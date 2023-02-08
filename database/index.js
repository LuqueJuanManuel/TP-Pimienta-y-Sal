const fs = require ('fs');

const dbMenu = JSON.parse(fs.readFileSync("./database/menu.json", 'utf-8'));

module.exports= dbMenu;