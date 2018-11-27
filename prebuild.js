const path = require("path");
const fs = require("fs");
const librariesPath = "public/static/data/libraries";

const librariesFolder = path.resolve(__dirname, librariesPath);

const result = {};

fs.readdir(librariesFolder, (err, files) => {
  files.forEach(fileName => {
    const library = JSON.parse(
      fs
        .readFileSync(path.resolve(__dirname, librariesPath, fileName))
        .toString()
    );
    const sol = Object.keys(library)[0];
    const arch = Object.keys(library[sol])[0];
    const stages = Object.keys(library[sol][arch]);

    if (!result[sol]) result[sol] = {};
    if (!result[sol][arch]) result[sol][arch] = {};

    stages.forEach(stage => {
      const details = library[sol][arch][stage];
      if (!result[sol][arch][stage]) result[sol][arch][stage] = [];
      result[sol][arch][stage] = result[sol][arch][stage].concat(details);
    });
  });
  fs.writeFileSync(
    path.resolve(__dirname, librariesPath, "../", "libraries.json"),
    JSON.stringify(result, null, 2)
  );
});
