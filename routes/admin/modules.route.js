import express from 'express'
import { getAllModules,addNewModule,getModuleCategoires } from '../../controller/modules.controller.js';

const moduleRouter = express.Router()

moduleRouter.get('/',getAllModules)
moduleRouter.post('/',addNewModule)
moduleRouter.get('/:module/categories',getModuleCategoires)


export default moduleRouter;