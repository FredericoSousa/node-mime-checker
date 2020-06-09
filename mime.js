const { exec } = require('child_process')
const fs = require('fs')
const path = require('path')

module.exports = (fileContent) => {
  return new Promise((resolve, reject) => {
    const rand = `${new Date().getTime() }${Math.floor(Math.random() * 99999)}`
    const filePath = path.resolve(__dirname, 'tmp', `${rand}`)
    fs.writeFileSync(filePath, fileContent)
    const command = process.platform === 'win32' ? '"C:\\Program Files (x86)\\GnuWin32\\bin\\file" −-mime-type' : 'file -b --mime-type'
    exec(`file -b --mime-type ${filePath}`, (err, result) => {
      if (err) reject(err)
      fs.unlinkSync(filePath)
      resolve(result)
    })
  })
}