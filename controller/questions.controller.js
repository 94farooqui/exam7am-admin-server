import Assessment from "../models/Assessment.model.js";
import Module from "../models/Module.model.js";
import Question from "../models/Question.model.js";

export const getQuestions = async (req, res) => {
  const { module, subModule } = req.params;
  console.log("Module:", req.params);
//   const modules = await Module.find(
//     { name: module, assessments: { name: subModule } },
//     {
//       questions: 1,
//     }
//   ).populate("questions");
//   if (!modules) {
//     return res.status(404).json({ msg: "No data" });
//   } else return res.status(200).send(modules);

try {
    const mainModule = await Module.findOne({ name: module });
    if (!mainModule) {
      return []; // Handle case where main module not found
    }

    const submodule = mainModule.assessments.find(
      (assessment) => assessment.name === subModule
    );
    if (!submodule) {
      return []; // Handle case where sub-module not found
    }

    // const allQuestions = submodule.questions.map((question) => question);  Fetch all questions
    // // Alternatively, extract specific fields:
    // // const allQuestions = subModule.questions.map((question) => ({ name: question.name, description: question.description }));

    return res.status(200).send(submodule)
    //return allQuestions;
  } catch (error) {
    console.error(error);
    return res.status(404).json({ msg: "No data" });
  }
};
