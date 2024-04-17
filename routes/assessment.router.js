import express from 'express'
import { addAssessmentQuestion, createAssessment, getAllAssessments, getAssessmentDetails, updateAssessment , getAssessmentQuestionDetails} from '../controller/assessment.controller.js';

const router = express.Router()

//router.route('/').get(getAllAssessments).post(createAssessment)
router.get('/', getAllAssessments)
router.post('/', createAssessment)
router.get('/:id', getAssessmentDetails)
router.post('/:id', addAssessmentQuestion)
router.put('/:id', updateAssessment)

router.get('/:id/question/:qid', getAssessmentQuestionDetails)


export default router;