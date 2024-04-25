import mongoose from "mongoose";
import { assessmentSchema } from "./Assessment.model.js";

const moduleSchema = new mongoose.Schema({
    name:{
        type: String,
        unique: true,
    },
    title:{
        type: String,
        unique: true,
    },
    description:{
        type: String,
        default: ""
    },
    imageUrl: String,
    assessments: [assessmentSchema]
})

const Module = mongoose.model("Module",moduleSchema)

export default Module;