import express from "express";
import {getQuestions} from './../../controller/questions.controller.js'


const router = express.Router();

router.get('/:module/:subModule', getQuestions)

// router.get('/:module/', (req,res)=>{
//     console.log(req.params)
// })

export default router;