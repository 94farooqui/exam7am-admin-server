import express from "express";
import {getAllSubModules} from './../../controller/submodules.controller.js'


const router = express.Router();

router.get('/:module', getAllSubModules)
// router.get('/:module/', (req,res)=>{
//     console.log(req.params)
// })

export default router;