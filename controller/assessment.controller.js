import Assessment from "../models/Assessment.model.js";
import Question from "./../models/Question.model.js";



export const getAssessmentHomepageData = async (req, res) => {
  console.log("Request recevied")
  const allAssessments = await Assessment.aggregate([
    {
      $project : {
        title: 1,
        description:1,
        image: 1,
        numberOfQuestions: { $size : '$questions'}
      }
    }
  ])

  if (allAssessments) {
    return res.status(200).send(allAssessments);
  }
  return res.status(401).send({ error: "Unable to fetch the data" });
};

export const getAllAssessments = async (req, res) => {
  console.log("Request recevied")
  const allAssessments = await Assessment.find();

  if (allAssessments) {
    return res.status(200).send(allAssessments);
  }
  return res.status(401).send({ error: "Unable to fetch the data" });
};

export const createAssessment = async (req, res) => {
  const newAssessment = new Assessment(req.body);
  const created = await newAssessment.save();
  if (created) {
    return res.status(200).json(created);
  } else return res.status(400).json({ msg: "error" });
};

export const getAssessmentDetails = async (req, res) => {
  const { id } = req.params;
  const assessment = await Assessment.findById(id);

  if (assessment) {
    return res.status(200).send(assessment);
  } else return res.status(402).send({ msg: "Error" });
};

export const addAssessmentQuestion = async (req, res) => {
  const id = req.params.id;

  const newQuestion = new Question(req.body)

  try {
    const updatedAssessment = await Assessment.findByIdAndUpdate(
      id,
      { $push: { questions: req.body } },
      { new: true }
    );

    if (!updatedAssessment) {
      return res.status(404).send("Assessment not found");
    }

    res.status(201).json(updatedAssessment);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error adding new question");
  }
};

export const updateAssessment = (req, res) => {};


export const getAssessmentQuestionDetails = async (req,res) => {
  const assessmentId = req.params.id
  const questionId = req.params.qid
  
  //console.log("request received", req.params)

  const assessmentFound = await Assessment.findOne({_id: assessmentId})

  if(!assessmentFound){
    return res.status(404).json({msg:"Bad request, Assessment Not found"})
  }

  console.log(assessmentFound)

  const questionFound = assessmentFound.questions.find(q => q._id == questionId)

  if(!questionFound){
    console.log("Question not found")
    return res.status(404).json({msg:"Bad request, Question not found"})
  }

  //console.log("Found",questionFound)

  return res.status(200).send(questionFound)
  
}

export const updateAssessmentQuestionDetails = async (req,res) => {
  console.log(req.params, req.body)
  const assessmentId = req.params.id
  const questionId = req.params.id

  try{
    const assessment = await Assessment.findOne({_id:assessmentId})

    if(!assessment){
      return res.status(404).json({error:"Bad request"})
    }

    const questionIndex = assessment.questions.find(q => q._id === questionId)
    assessment.questions[questionIndex] = req.body
    const updatedQuestion = await assessment.save()

    if(updatedQuestion){
      return res.status(200).send(updatedQuestion)
    }

    return res.status(500).json({error: "Something went wrong"})

  }
  catch(error){
    console.error('Error updating question:', error);
  }
}

export const deleteAssessmentQuestion = async (req,res) => {
  const assessmentId = req.params.id
  const questionId = req.params.qid
  console.log( assessmentId , questionId)
  const assessment = await Assessment.findById(assessmentId)
  assessment.questions = assessment.questions.filter(q => q._id!= questionId)
  //assessment.questions = afterFilter
  //assessment = assessment.questions.filter(q => q._id!== questionId)
  const deleted = await assessment.save()
if(deleted){
  return res.status(200).send(deleted)
}
else return res.status(501).json({msg:"Soemthing went wrong"})
}