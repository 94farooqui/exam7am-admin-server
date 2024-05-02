import Assessment from "../models/Assessment.model.js";
import Module from "../models/Module.model.js";
import Question from "../models/Question.model.js";

export const getAllModules = async (req, res) => {
  const modules = await Module.find({}, "name title description imageUrl");
  if (!modules) {
    return res.status(404).json({ msg: "No data" });
  } else return res.status(200).send(modules);
};

export const addNewModule = async (req, res) => {
  console.log(req.body);
  const newModule = new Module(req.body);
  const saved = await newModule.save();
  //console.log(req.body)
  if (saved) {
    return res.status(200).send(saved);
  } else return res.status(400).json({ msg: "Error in adding module" });
};

export const getModuleCategoires = async (req, res) => {
  console.log(req.params.module);

  const moduleFound = await Module.findOne({
    name: req.params.module,
  }).populate("assessments");

  if (!moduleFound) {
    return res.status(404).json({ msg: "Not found" });
  }

  //const categoryList = moduleFound
  console.log(moduleFound);

  return res
    .status(200)
    .send({ categories: moduleFound.assessments, title: moduleFound.title });
};

export const addModuleCategory = async (req, res) => {
  const module = req.params.module;
  const newCategory = new Assessment(req.body);
  const savedCategory = await newCategory.save();

  try {
    const foundModule = await Module.findOne({ name: module });
    if (!foundModule) {
      console.log("Bad request");
      return res.status(400).json({ msg: "Bad request" });
    }
    console.log(newCategory);
    console.log("Module", foundModule);
    console.log("Assessments", foundModule.assessments);

    foundModule.assessments.push(savedCategory._id);
    const saved = await foundModule.save();
    console.log("After save", saved);
    return res.status(200).json({ msg: "Successfull Added" });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

export const getModuleCategoryDetails = async (req, res) => {
  const module = req.params.module;
  const assessment = req.params.category;
  try {
    const foundAssessment = await Assessment.findOne({name:assessment}).populate("questions")
    return res.status(200).send(foundAssessment);
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

export const addNewQuestion = async (req, res) => {
  const { module, category } = req.params;

  console.log(module, category);

  try {
    // const foundModule = await Module.findOne({ name: module });
    // if (!foundModule) {
    //   console.log("Bad request");
    //   return res.status(400).json({ msg: "Bad request" });
    // }

    // const assessmentIndex = foundModule.assessments.findIndex(
    //   (obj) => obj.name == category
    // );
    // console.log("Index ", assessmentIndex);
    // foundModule.assessments[assessmentIndex].questions.push(newQuestion);
    // const saved = await foundModule.save();

    const newQuestion = new Question(req.body);
    const addedQuestion = await newQuestion.save(); // returns saved question with ID
    console.log(newQuestion);
  
    const foundAssessment = await Assessment.findOne({ name: category });
    foundAssessment.questions.push(addedQuestion._id);
    const updatedAssessment = foundAssessment.save();

    if (!updatedAssessment) {
      console.log("Bad request");
      return res.status(500).json({ msg: "Something went wrong" });
    }
    return res.status(200).send({ msg: "Successfully added" });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};
