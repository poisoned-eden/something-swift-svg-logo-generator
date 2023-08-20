const { writeFile } = require('fs/promises');
const { join } = require('path');

async function stringToFile(folderPath, fileName, string)  {
    try {
        let fullPath = join(folderPath, fileName);
        await writeFile(fullPath, string);
        return console.log(`Successfully generated ${fileName} at ${fullPath}`);
    } catch (err) {
        console.log(err);
    }
}
module.exports = stringToFile;