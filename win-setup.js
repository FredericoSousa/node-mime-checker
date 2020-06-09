const copyDir = require('copy-dir')
const path = require('path')
const { platform } = process

if (platform === 'win32') {
  const filesPath = path.resolve(__dirname, 'win-setup')
  const installPath = path.resolve('C', 'Program Files (x86)')
  console.log('Starting setup')
  console.log('Copying files...')
  copyDir(filesPath, installPath, (err) => {
    if (err) console.log(`Error: ${err}`)
    else console.log('Files copied successfully!')
  })
} else {
  console.log('Only windows need this setup!')
}