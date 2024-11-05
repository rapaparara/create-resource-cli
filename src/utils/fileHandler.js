const fs = require('fs');
const path = require('path');

const ensureFolder = (folderPath) => {
  if (fs.existsSync(folderPath)) {
    return true;
  }
  fs.mkdirSync(folderPath, { recursive: true });
  return false;
};

const writeFile = (filePath, content) => fs.writeFileSync(filePath, content.trim());

module.exports = {
  ensureFolder,
  writeFile,
};
