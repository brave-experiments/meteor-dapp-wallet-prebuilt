const {copySync} = require('fs-extra')
const path = require('path')

/**
 * Copies build/* to the target directory.
 * @param {string} target - path to the target directory
 */
module.exports.init = (target) => {
  const source = path.join(__dirname, 'build')
  copySync(source, target)
  console.log(`Copied ${source} to ${target}`)
}
