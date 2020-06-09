const mime = require('./mime')
const fs = require('fs')

const content = fs.readFileSync('./testFile.php').toString()
mime(content).then(console.log)