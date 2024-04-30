import mongoose, { Schema } from "mongoose";
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
    assessments: [
        {
            type : Schema.Types.ObjectId,
            ref : "Assessment"
        }
    ]
})

const Module = mongoose.model("Module",moduleSchema)

export default Module;