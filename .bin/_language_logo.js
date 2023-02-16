const { URL } = require("url");
const path = require("path");

const resolveLanguageLogo = (ref, basePath, referencePath) => {
  // if URL, then return URL, else resolve path relative to given directory)
  try {
    new URL(ref);
    return ref;
  } catch (_e) {
    return path.relative(basePath, path.resolve(referencePath, ref));
  }
};

module.exports = { resolveLanguageLogo };
