import express from 'express'
import { addAssessmentQuestion, createAssessment, getAllAssessments, getAssessmentDetails, updateAssessment } from '../controller/assessment.controller.js';

const router = express.Router()


router.get('/', getAllAssessments)
router.post('/', createAssessment)
router.get('/:id', getAssessmentDetails)
router.post('/:id', addAssessmentQuestion)
router.put('/:id', updateAssessment)


export default router;