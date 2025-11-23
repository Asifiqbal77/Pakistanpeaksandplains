// backend/controllers/tourController.js
import Tour from "../model/tour.model.js";

export const getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();
    res.json(tours);
  } catch (err) {
    res.status(500).json({ message: "Failed to get tours" });
  }
};

export const getTourById = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    if (!tour) return res.status(404).json({ message: "Tour not found" });
    res.json(tour);
  } catch (err) {
    res.status(500).json({ message: "Failed to get tour" });
  }
};

export const createTour = async (req, res) => {
  try {
    const data = req.body;
    const images = req.files ? req.files.map(file => file.path) : [];
    const tour = new Tour({ ...data, images });
    await tour.save();
    res.json({ message: "Tour created", tour });
  } catch (err) {
    res.status(500).json({ message: "Failed to create tour" });
  }
};