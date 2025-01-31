import mongoose from "mongoose";
import { questionSchema } from "./Question.model.js";


export const assessmentSchema = new mongoose.Schema({
    name: String,
    title: String,
    description: String,
    image: String,
    questions: {
        type: [questionSchema],
        default :[]
    }
})




const Assessment = mongoose.model("Assessment", assessmentSchema)

export default Assessment;


