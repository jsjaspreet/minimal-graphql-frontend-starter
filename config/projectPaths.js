const path = require('path')

const rootDir = path.join(__dirname, '..')
const configDir = path.join(rootDir, 'config')
const sourceDir = path.join(rootDir, 'src')
const clientDir = path.join(sourceDir, 'client')
const viewsDir = path.join(clientDir, 'views')
const distDir = path.join(rootDir, 'dist')
const assetDir = path.join(distDir, 'assets')

// build inputs
const webpackDir = path.join(configDir, 'webpack')
const clientEntry = path.join(clientDir, 'index.js')



module.exports = {
  // directories
  rootDir,
  sourceDir,
  webpackDir,
  viewsDir,
  distDir,
  assetDir,

  // entry points
  clientEntry,
};
