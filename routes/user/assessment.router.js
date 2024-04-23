import express from "express";
import {
  addAssessmentQuestion,
  createAssessment,
  getAllAssessments,
  getAssessmentDetails,
  updateAssessment,
  getAssessmentQuestionDetails,
  updateAssessmentQuestionDetails,
  deleteAssessmentQuestion,
  getAssessmentHomepageData
} from "../../controller/assessment.controller.js";

const router = express.Router();

//router.route('/').get(getAllAssessments).post(createAssessment)

router.get("/home", getAssessmentHomepageData);
router.get("/", getAllAssessments);
router.post("/", createAssessment);
router.get("/:id", getAssessmentDetails);
router.post("/:id", addAssessmentQuestion);
router.put("/:id", updateAssessment);

router.get("/:id/question/:qid", getAssessmentQuestionDetails);
router.put("/:id/question/:qid", updateAssessmentQuestionDetails);
router.delete("/:id/question/:qid", deleteAssessmentQuestion);

export default router;

// ${serverURL}/api/assessments/${assessmentId}/question/${questionId}
