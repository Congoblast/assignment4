const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Question = new Schema(
    {
        name: { type: String},
        question: { type: [String]},
    },
)

module.exports = mongoose.model("questions", Question)