const path = require("path");
const { URL } = require("url");
const { runDevcontainerCliInFolder } = require("./_devcontainer");
const { languages } = require("./_languages");
const { writeFile } = require("fs/promises");

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

const render = async (directory) => {
  const { stdout } = await runDevcontainerCliInFolder(directory, [
    "read-configuration",
  ]);

  const devcontainerSpec = JSON.parse(stdout);

  const actualDirectory = path.basename(
    devcontainerSpec.workspace.workspaceFolder
  );

  const kataCustomization =
    devcontainerSpec.configuration.customizations[DEVCONTAINER_SPEC_EXTENSION];

  const openAsCodespaceUrl = new URL(OPEN_IN_CODESPACE_URL);
  openAsCodespaceUrl.searchParams.append("ref", actualDirectory);

  const openInVsCodeUrl = new URL(OPEN_IN_VSCODE_URL);
  openInVsCodeUrl.searchParams.append("ref", actualDirectory);
  const wrappedOpenInVsCodeUrl = wrapInRedirect(openInVsCodeUrl);

  const openInGitpodIoUrl = new URL(OPEN_IN_GITPOD_URL);
  openInGitpodIoUrl.hash =
    "https://github.com/rradczewski/kata-bootstraps/tree/" + actualDirectory;

  return `
<img width="100px" src="${kataCustomization.languageLogo}" /></a>
# Kata-Bootstrap: ${devcontainerSpec.configuration.name}

| [Open in GitHub Codespace](${openAsCodespaceUrl}) | [Open in GitPod.io](${openInGitpodIoUrl}) | [Open locally in VSCode](${wrappedOpenInVsCodeUrl}) |
|---|---|---|

## Test Command

\`\`\`sh
$ ${kataCustomization.testCommand}
\`\`\`

## References

${kataCustomization.resources
  .map((res) => `- [${res.name}](${res.url})`)
  .join("\n")}
`;
};

const run = async () => {
  const directories = await languages(ROOT_DIR);

  for (let directory of directories) {
    const content = await render(directory);
    console.log(content);
    await writeFile(path.join(directory, "README.md"), content);
  }
};

run();
