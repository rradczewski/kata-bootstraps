const fs = require("fs/promises");
const path = require("path");

const languages = async (ROOT_DIR) => {
  return (
    await fs.readdir(path.resolve(ROOT_DIR), {
      withFileTypes: true,
    })
  )
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith("."))
    .map((dirent) => path.resolve(ROOT_DIR, dirent.name));
};

module.exports = { languages };
