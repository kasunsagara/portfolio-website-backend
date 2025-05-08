import Skill from "../models/skill.js";

// Add a new skill
export async function addSkill(req, res) {
    const { icon, name, desc, category } = req.body;
    try {
      const newSkill = new Skill({ icon, name, desc, category });
      await newSkill.save();
      res.status(201).json(newSkill);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  
// Get all skills
export async function getSkills(req, res) {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export async function getSkillById(req, res) {
  try {
    const skill = await Skill.findById(req.params.id);
    if (!skill) return res.status(404).json({ error: 'Skill not found' });
    res.json(skill);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}


// Update a skill
export async function updateSkill(req, res) {
  try {
    const updated = await Skill.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a skill
export async function deleteSkill(req, res) {
  try {
    await Skill.findByIdAndDelete(req.params.id);
    res.json({ message: "Skill deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
