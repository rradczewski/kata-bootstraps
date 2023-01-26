const path = require("path");
const { execFile } = require("child_process");

const DEVCONTAINER_CLI = path.resolve(
  __dirname,
  "node_modules/",
  ".bin/",
  "devcontainer"
);

const execFileAsync = (cmd, args, options) =>
  new Promise((resolve, reject) => {
    execFile(cmd, args, options, (e, stdout, stderr) => {
      if (e) return reject(e);
      return resolve({ stdout, stderr });
    });
  });

const runDevcontainerCliInFolder = async (directory, args) =>
  execFileAsync(DEVCONTAINER_CLI, [...args, "--workspace-folder", directory]);

module.exports = { runDevcontainerCliInFolder };
