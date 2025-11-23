// backend/routes/tour.js
import express from "express";
import multer from "multer";
import { getAllTours, getTourById, createTour } from "../controllers/tourController.js";

const router = express.Router();

// Multer config for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, './uploads'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

// Get all tours
router.get("/", getAllTours);

// Get a tour by ID
router.get("/:id", getTourById);

// Admin: Create a new tour (with image upload)
router.post("/", upload.array("images", 10), createTour);

export default router;