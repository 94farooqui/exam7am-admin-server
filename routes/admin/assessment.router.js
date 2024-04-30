import express from 'express'
import { addAssessmentQuestion, createAssessment, getAllAssessments, getAssessmentDetails, updateAssessment , getAssessmentQuestionDetails,updateAssessmentQuestionDetails,deleteAssessmentQuestion} from '../../controller/assessment.controller.js';

const router = express.Router()



//being used
router.get('/', getAllAssessments)
router.get('/:id/question/:qid', getAssessmentQuestionDetails)
router.put('/:id/question/:qid', updateAssessmentQuestionDetails)
router.delete('/:id/question/:qid', deleteAssessmentQuestion)



//router.route('/').get(getAllAssessments).post(createAssessment)

router.post('/', createAssessment)
router.get('/:id', getAssessmentDetails)
router.post('/:id', addAssessmentQuestion)
router.put('/:id', updateAssessment)



export default router;

// ${serverURL}/api/assessments/${assessmentId}/question/${questionId}