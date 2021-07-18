const hostPath = 'http://localhost'
const port = '8000'

function getHostPath() {
  return `${hostPath}:${port}/`
}

function getPath(PATH) {
  return getHostPath() + PATH
}

module.exports = {
  getPath
}