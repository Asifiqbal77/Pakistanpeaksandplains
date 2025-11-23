// backend/model/tour.model.js
import mongoose from 'mongoose';

const tourSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: String,
  duration: String,
  price: String,
  maxPeople: Number,
  description: String,
  images: [String], // Array of image paths
  itinerary: [String],
  highlights: [String],
  // Add more fields as needed
});

export default mongoose.model('Tour', tourSchema);