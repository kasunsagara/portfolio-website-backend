import Service from "../models/service.js";

// Create a new service
export async function createService(req, res) {
    const { icon, title, description } = req.body;
    try {
      const newService = new Service({ icon, title, description });
      await newService.save();
      res.status(201).json(newService);
    } catch (error) {
      res.status(400).json({ message: "Failed to create service", error });
    }
  };
  
// Get all services
export async function getServices(req, res) {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch services", error });
  }
};

export async function getServiceById(req, res) {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) return res.status(404).json({ message: "Service not found" });
    res.status(200).json(service);
  } catch (error) {
    res.status(400).json({ message: "Failed to fetch service", error });
  }
}

// Update a service
export async function updateService(req, res) {
  try {
    const { id } = req.params;
    const updatedService = await Service.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedService) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.status(200).json(updatedService);
  } catch (error) {
    res.status(400).json({ message: "Failed to update service", error });
  }
}

// Delete a service
export async function deleteService(req, res) {
  try {
    const { id } = req.params;
    await Service.findByIdAndDelete(id);
    res.status(200).json({ message: "Service deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete service", error });
  }
};
