import mongoose from "mongoose";
import { questionSchema } from "./Question.model.js";


const assessmentSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    questions: [questionSchema]
})


const Assessment = mongoose.model("Assessment", assessmentSchema)

export default Assessment;


