import express from 'express'
import { getAllModules,addNewModule,getModuleCategoires,addModuleCategory } from '../../controller/modules.controller.js';

const moduleRouter = express.Router()

moduleRouter.get('/',getAllModules)
moduleRouter.post('/',addNewModule)
moduleRouter.get('/:module/categories',getModuleCategoires)
moduleRouter.post('/:module/categories',addModuleCategory)



export default moduleRouter;