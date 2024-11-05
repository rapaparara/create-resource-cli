module.exports = (resourceName) => `

import { Router } from 'express'
import * as dataController from './controller.js'

const router = Router()

router.get('/${resourceName}', dataController.getAllData)
router.get('/${resourceName}/:uuid', dataController.getDataByUuid)
router.post('/${resourceName}', dataController.createData)
router.put('/${resourceName}/:uuid', dataController.updateData)
router.delete('/${resourceName}/:uuid', dataController.deleteData)

export default router

`
