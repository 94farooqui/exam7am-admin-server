import express from 'express'
import { getAllModules,addNewModule,getModuleCategoires,addModuleCategory,getModuleCategoryDetails,addNewQuestion } from '../../controller/modules.controller.js';

const moduleRouter = express.Router()

moduleRouter.get('/',getAllModules)
moduleRouter.post('/',addNewModule)
moduleRouter.get('/:module/categories',getModuleCategoires)
moduleRouter.get('/:module/categories/:category',getModuleCategoryDetails)
moduleRouter.post('/:module/categories/:category/newQuestion',addNewQuestion)
moduleRouter.post('/:module/categories',addModuleCategory)



export default moduleRouter;