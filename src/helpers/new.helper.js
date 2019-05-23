const path = require('path')
const Dir = require('../utils/dir.util')
const File = require('../utils/file.util')

const getTemplatesPathsByName = templateDir => {
  const templatesPathByName = {}
  new Dir(templateDir).read().forEach(name => {
    templatesPathByName[name] = path.join(templateDir, name)
  })
  return templatesPathByName
}

const copyBaseReact = (templateDir, rootDir, projectName) => {
  const templatesPathByName = getTemplatesPathsByName(templateDir)
  const projectDir = path.join(rootDir, projectName)
  Dir.copy(templatesPathByName['base-react'], projectDir)
  return projectDir
}

const updatePackageJson = (packageJsonPath, projectName) => {
  new File(packageJsonPath)
  .read()
  .update('name', projectName)
  .write()
}

module.exports = {
  copyBaseReact,
  updatePackageJson,
}