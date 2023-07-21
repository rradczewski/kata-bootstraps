const path = require("path");
const { URL } = require("url");
const { runDevcontainerCliInFolder } = require("./_devcontainer");
const { languages } = require("./_languages");
const { writeFile } = require("fs/promises");
const { resolveLanguageLogo } = require("./_language_logo");

const DEVCONTAINER_SPEC_EXTENSION = "github.com/rradczewski/kata-bootstraps";
const ROOT_DIR = path.resolve(__dirname, "../");

const OPEN_IN_CODESPACE_URL = new URL("https://github.com/codespaces/new");
OPEN_IN_CODESPACE_URL.searchParams.append("hide_repo_select", "true");
OPEN_IN_CODESPACE_URL.searchParams.append(
  "repo",
  "rradczewski/kata-bootstraps"
);

const OPEN_IN_GITPOD_URL = new URL("https://gitpod.io/");

const OPEN_IN_VSCODE_URL = new URL("vscode://vscode.git/clone");
OPEN_IN_VSCODE_URL.searchParams.append(
  "url",
  "https://github.com/rradczewski/kata-bootstraps.git"
);

const OPEN_IN_INTELLIJ = new URL(
  "jetbrains://idea/checkout/git?idea.required.plugins.id=Git4Idea&checkout.repo=https%3A%2F%2Fgitlab.com%2Fwith-humans%2Fdevops-workshop%2Finfrastructure.git"
);
OPEN_IN_INTELLIJ.searchParams.append(
  "checkout.repo",
  "https://github.com/rradczewski/kata-bootstraps.git"
);

const REDIRECT_URL = new URL(
  "https://rradczewski.github.io/kata-bootstraps/redirect.html"
);
const wrapInRedirect = (url) => {
  const redirectUrl = new URL(REDIRECT_URL);
  redirectUrl.searchParams.append("url", url);
  return redirectUrl;
};

const renderLanguages = async () => {
  const directories = await languages(ROOT_DIR);

  return Promise.all(directories.map((dir) => renderLanguage(dir))).then(
    (results) => results.join("\n")
  );
};

const renderLanguage = async (directory) => {
  const { stdout } = await runDevcontainerCliInFolder(directory, [
    "read-configuration",
  ]);

  const devcontainerSpec = JSON.parse(stdout);
  const devcontainerJsonPath = path.dirname(
    devcontainerSpec.configuration.configFilePath.path
  );

  const actualDirectory = path.basename(
    devcontainerSpec.workspace.workspaceFolder
  );

  const kataCustomization =
    devcontainerSpec.configuration.customizations[DEVCONTAINER_SPEC_EXTENSION];

  const logoUrl = resolveLanguageLogo(
    kataCustomization.languageLogo,
    '.',
    devcontainerJsonPath
  );

  const openAsCodespaceUrl = new URL(OPEN_IN_CODESPACE_URL);
  openAsCodespaceUrl.searchParams.append("ref", actualDirectory);

  const openInVsCodeUrl = new URL(OPEN_IN_VSCODE_URL);
  openInVsCodeUrl.searchParams.append("ref", actualDirectory);
  const wrappedOpenInVsCodeUrl = wrapInRedirect(openInVsCodeUrl);

  const openInGitpodIoUrl = new URL(OPEN_IN_GITPOD_URL);
  openInGitpodIoUrl.hash =
    "https://github.com/rradczewski/kata-bootstraps/tree/" + actualDirectory;

  return (
    `| <p align="center"><a alt="${devcontainerSpec.configuration.name}" href="./${actualDirectory}"><img width="100px" src="${logoUrl}" /><br/>${devcontainerSpec.configuration.name}</a></p> ` +
    `| ${kataCustomization.resources
      .map((res) => `[${res.name}](${res.url})`)
      .join("<br/>")} ` +
    `| \`${kataCustomization.testCommand}\` ` +
    `| <p><a href="${openAsCodespaceUrl}">☁️ Open in GitHub Codespace</a></p>` +
    `  <p><a href="${openInGitpodIoUrl}">☁️ Open in GitPod</a></p>` +
    `  <p><a href="${wrappedOpenInVsCodeUrl}">💻 Open in VSCode</a></p>`
  );
};

const layout = async (l) =>
  `# Ready-to-go kata bootstrap projects

This repository contains starter projects for running katas in a variety of languages. All projects are using the latest language and framework versions (thanks to [renovate](https://github.com/renovatebot/)) and run on any device straight out of the box using Visual Studio Code and [devcontainers](https://code.visualstudio.com/docs/remote/containers). 


<b>In the cloud:</b> Select the language from below and click "Open in GitHub Codespace" or "Open in GitPod"

<b>In VisualStudio Code:</b> Select the language from below and click "Open in VisualStudio Code"

<b>In IntelliJ:</b> [Click here to clone this repository in IntelliJ](${wrapInRedirect(
    OPEN_IN_INTELLIJ
  )}) (requires [Jetbrains Toolbox](https://www.jetbrains.com/lp/toolbox/)) and select your language either by opening one of the subfolders as a project or by switching the branch.

| Language  | Resources | Test Command | Quick Start |
|---|---|---|---|
${await renderLanguages()}

## Contributing a bootstrap

The general paradigm of this repository is to create self-contained, minimal starter projects that are least likely to (silently) break in the future and can automatically be kept up-to-date.

Any bootstrap project may be added to this repository, if:

- The language is not yet present **or** the test-framework enables a different paradigm than the bootstraps already present for the language (e.g. a cucumber or mutation testing tool, not just junit4 or testng)
- Dependencies and docker images are well-known and commonly used
    - Avoids using custom Dockerfile-based dev-containers (they will have to be built each time a devcontainer starts)
    - Uses only one testing framework and one assertion library
- One failing, and one succeeding test exists
- Version numbers are fixed (so they can be picked up and updated by renovate)

A bootstrap needs to contain a valid [\`.devcontainer.json\`](./java/.devcontainer/devcontainer.json) that configures a container with all appropriate tooling. See any of the existing bootstrap projects for reference.

## Other kata bootstraps

- [swkBerlin/kata-bootstraps](https://github.com/swkberlin/kata-bootstraps) - A huge collection of kata-bootstraps in plenty of languages with plenty of different frameworks
`;

const run = async () => {
  const content = await layout();
  console.log(content);
  return writeFile(path.join(ROOT_DIR, "README.md"), content);
};

run();
