import mongoose from "mongoose";

const skillSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        enum: ["frontend", "backend", "database", "tools"],
        required: true,
    },
})

const Skill = mongoose.model("skill", skillSchema);

export default Skill;
