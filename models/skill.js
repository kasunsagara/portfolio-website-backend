import mongoose from "mongoose";

const skillSchema = mongoose.Schema({
    icon: {
        type: String,
        required: true,
    },
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
        enum: ["frontend", "backend", "database", "tools", "other"],
        required: true,
    },
})

const Skill = mongoose.model("skill", skillSchema);

export default Skill;
