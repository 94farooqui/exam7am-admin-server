import mongoose, { Schema } from "mongoose";
import { questionSchema } from "./Question.model.js";

export const assessmentSchema = new mongoose.Schema({
  name: String,
  title: String,
  description: String,
  image: String,
  questions: [
    {
        type : Schema.Types.ObjectId,
        ref : "Question"
    }
  ],
});

const Assessment = mongoose.model("Assessment", assessmentSchema);

export default Assessment;
