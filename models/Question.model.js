import mongoose from "mongoose";

const optionSchema = new mongoose.Schema({
    key : {
        type: String,
        enum: ["one" , "two" , "three" , "four"]
    },
    value: String
})


export const questionSchema = new mongoose.Schema({
    question : String,
    image: String,
    options : [optionSchema],
    correctAnswer: {
        type: String,
        enum : ["one","two","three","four"]
    }
})

const Question = mongoose.model("Question", questionSchema)

export default Question;