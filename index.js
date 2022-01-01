const argv = require("./config/yargs");
const multiplicar = require("./helpers/multiplicar");

const base = argv.base
const file = argv.file
const list = argv.list
const max = argv.max

multiplicar(base, {
    file,
    list,
    max,
})