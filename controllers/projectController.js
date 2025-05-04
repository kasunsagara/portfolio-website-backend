import Project from '../models/project.js';

// Create a new project
export async function createProject(req, res) {
  try {
    const { name, image, description, startDate, endDate, skills } = req.body;

    const project = new Project({ name, image, description, startDate, endDate, skills });
    const savedProject = await project.save();

    res.status(201).json(savedProject);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create project', error });
  }
};

// Get all projects
export async function getAllProjects(req, res) {
  try {
    const projects = await Project.find().sort({ startDate: -1 });
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve projects', error });
  }
};

// Get a single project by ID
export async function getProjectById(req, res) {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });

    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve project', error });
  }
};

// Update a project
export async function updateProject(req, res) {
  try {
    const { name, image, description, startDate, endDate, skills } = req.body;

    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      { name, image, description, startDate, endDate, skills },
      { new: true }
    );

    if (!updatedProject) return res.status(404).json({ message: 'Project not found' });

    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update project', error });
  }
};

// Delete a project
export async function deleteProject(req, res) {
  try {
    const deleted = await Project.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Project not found' });

    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete project', error });
  }
};
