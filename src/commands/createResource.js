const path = require('path')
const fs = require('fs')
const { ensureFolder, writeFile } = require('../utils/fileHandler')
const controllerTemplate = require('../templates/controllerTemplate')
const modelTemplate = require('../templates/modelTemplate')
const interfaceTemplate = require('../templates/interfaceTemplate')
const routesTemplate = require('../templates/routesTemplate')
const validationTemplate = require('../templates/validationTemplate')

const createResource = (resourceName, fields) => {
   const config = require('../../config.json')
   const resourcePath = path.join(
      process.cwd(),
      config.outputDirectory,
      `${resourceName}Services`
   )

   if (ensureFolder(resourcePath)) {
      console.log(`Error: Folder ${resourcePath} already exists. Aborting.`)
      return
   }

   writeFile(
      path.join(resourcePath, `controller.js`),
      controllerTemplate(resourceName)
   )
   writeFile(
      path.join(resourcePath, `model.js`),
      modelTemplate(resourceName, fields)
   )
   writeFile(
      path.join(resourcePath, `interface.js`),
      interfaceTemplate(resourceName, fields)
   )
   writeFile(path.join(resourcePath, `route.js`), routesTemplate(resourceName))
   writeFile(
      path.join(resourcePath, `validation.js`),
      validationTemplate(resourceName, fields)
   )

   console.log(
      `Resource ${resourceName} created successfully in ${resourcePath}`
   )
}

module.exports = { createResource }
