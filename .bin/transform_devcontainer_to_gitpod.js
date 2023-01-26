const { runDevcontainerCliInFolder } = require("./_devcontainer");
const { languages } = require("./_languages");
const YAML = require("yaml");
const path = require("path");
const { writeFile } = require("fs/promises");

const ROOT_DIR = path.resolve(__dirname, "../");

const transformDevcontainer = async (directory) => {
  const devcontainerSpec = JSON.parse(
    (await runDevcontainerCliInFolder(directory, ["read-configuration"])).stdout
  );

  const gitpod = {};
  if (typeof devcontainerSpec.configuration.image === "string") {
    gitpod.image = devcontainerSpec.configuration.image;
  } else if (
    typeof devcontainerSpec.configuration.build?.dockerfile === "string"
  ) {
    const configFilePath = path.dirname(
      path.relative(
        directory,
        devcontainerSpec.configuration.configFilePath.path
      )
    );
    gitpod.image = {
      file: path.join(
        configFilePath,
        devcontainerSpec.configuration.build.dockerfile
      ),
    };
  }
  gitpod.tasks = [
    { name: "Init", init: devcontainerSpec.configuration.onCreateCommand },
  ];
  if (devcontainerSpec.configuration.customizations?.vscode?.extensions) {
    gitpod.vscode = {
      extensions:
        devcontainerSpec.configuration.customizations.vscode.extensions,
    };
  }

  return writeFile(path.join(directory, ".gitpod.yml"), YAML.stringify(gitpod));
};

const run = async () => {
  const directories = await languages(ROOT_DIR);

  return Promise.all(directories.map(transformDevcontainer));
};

run();
