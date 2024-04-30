import express from 'express'
import { getAllModules,addNewModule,getModuleCategoires,addModuleCategory,getModuleCategoryDetails,addNewQuestion } from '../../controller/modules.controller.js';

const moduleRouter = express.Router()




//being used
moduleRouter.get('/',getAllModules)
moduleRouter.get('/:module/categories',getModuleCategoires)
moduleRouter.post('/',addNewModule)
moduleRouter.get('/:module/categories/:category',getModuleCategoryDetails)
moduleRouter.post('/:module/categories',addModuleCategory)
moduleRouter.post('/:module/categories/:category/newQuestion',addNewQuestion)



export default moduleRouter;