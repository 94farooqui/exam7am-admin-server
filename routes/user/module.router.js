import express from "express";
import {getAllModules} from './../../controller/modules.controller.js'


const router = express.Router();

router.get('/', getAllModules)

export default router;