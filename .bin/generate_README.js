const fs = require("fs/promises");
const path = require("path");
const { execFile } = require("child_process");
const { URL } = require("url");

const DEVCONTAINER_SPEC_EXTENSION = "github.com/rradczewski/kata-bootstraps";
const ROOT_DIR = path.resolve(__dirname, "../");
const DEVCONTAINER_CLI = path.resolve(
  __dirname,
  "node_modules/",
  ".bin/",
  "devcontainer"
);

const OPEN_IN_CODESPACE_URL = new URL("https://github.com/codespaces/new");
OPEN_IN_CODESPACE_URL.searchParams.append("hide_repo_select", "true");
OPEN_IN_CODESPACE_URL.searchParams.append("ref", "main");
OPEN_IN_CODESPACE_URL.searchParams.append(
  "repo",
  "rradczewski/kata-bootstraps"
);

const execFileAsync = (cmd, args, options) =>
  new Promise((resolve, reject) => {
    execFile(cmd, args, options, (e, stdout, stderr) => {
      if (e) return reject(e);
      return resolve({ stdout, stderr });
    });
  });

const languages = async () => {
  const directories = (
    await fs.readdir(path.resolve(ROOT_DIR, ".devcontainer"), {
      withFileTypes: true,
    })
  )
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith("."))
    .map((dirent) => path.resolve(ROOT_DIR, ".devcontainer", dirent.name));

  return Promise.allSettled(directories.map((dir) => renderLanguage(dir))).then(
    (results) =>
      results
        .filter((result) => result.status === "fulfilled")
        .map((result) => result.value)
        .join("\n")
  );
};

const renderLanguage = async (directory) => {
  const { stdout } = await execFileAsync(DEVCONTAINER_CLI, [
    "read-configuration",
    "--config",
    path.resolve(directory, "devcontainer.json"),
    "--workspace-folder",
    directory,
  ]);

  const devcontainerSpec = JSON.parse(stdout);

  const actualDirectory = path.basename(
    devcontainerSpec.workspace.workspaceFolder
  );

  const kataCustomization =
    devcontainerSpec.configuration.customizations[DEVCONTAINER_SPEC_EXTENSION];

  const openAsCodespaceUrl = new URL(OPEN_IN_CODESPACE_URL);
  openAsCodespaceUrl.searchParams.append(
    "devcontainer_path",
    path.relative(ROOT_DIR, devcontainerSpec.configuration.configFilePath.path)
  );

  return `| <a alt="${devcontainerSpec.configuration.name}" href="./${actualDirectory}"><img width="100px" src="${kataCustomization.languageLogo}" /></a> | ${devcontainerSpec.configuration.name} | [Open in Codespace](${openAsCodespaceUrl})`;
};

const layout = async (l) =>
  `# Curated Kata Bootstrap Projects

This repository contains curated starter projects for running katas. All projects are kept up-to-date automatically by [renovate](https://github.com/renovatebot/) and are based on [devcontainers](https://code.visualstudio.com/docs/remote/containers).

|   |   |   |
|---|---|---|
${await languages()}

## Contributing a bootstrap

The general paradigm of this repository is to create a self-contained, minimal starter projects that are least likely to (silently) break in the future and can automatically be kept up-to-date.

Any bootstrap project may be added to this repository, if:

- The language is not yet present **or** the test-framework enables a different paradigm than the bootstraps already present for the language (e.g. a cucumber or mutation testing tool, not junit4)
- Dependencies and docker images are well-known and commonly used
    - Avoids using custom Dockerfile-based dev-containers
    - Uses only one testing framework and one assertion library
- A single failing test exists
- Version numbers are either \`latest\` or [renovate](https://github.com/renovatebot/) can pick them up automatically (e.g. don't use variables in \`pom.xml\` or elsewhere).

A bootstrap needs to contain a valid [\`.devcontainer.json\`](./java_junit5/.devcontainer/devcontainer.json) that configures a container with all appropriate tooling. Furthermore, the \`postCreateCommand\` needs to contain a shell command that, when executed, will verify that the test runner correctly runs and reports the single failure present.

## Other kata bootstraps

- [swkBerlin/kata-bootstraps](https://github.com/swkberlin/kata-bootstraps) - A huge collection of kata-bootstraps in plenty of languages with plenty of different frameworks
`;

const run = async () => {
  console.log(await layout());
};

run();
