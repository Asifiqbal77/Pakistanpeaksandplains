import mongoose from "mongoose";
import Tour from "../model/tour.model.js";

const url = "mongodb+srv://asif:123@cluster0.k4mugdm.mongodb.net/?appName=Cluster0";

const tours = [
  {
    name: "Hunza Valley Deluxe Package (5 Days)",
    location: "Hunza",
    description: "Enjoy a 5-day trip including Karimabad, Altit & Baltit Fort, and Attabad Lake.",
    price: "PKR 55,000",
    images: ["uploads/deosai.jpg"]
  },
  {
    name: "Hunza & Khunjerab Pass Adventure (7 Days)",
    location: "Hunza",
    description: "Full Hunza valley adventure with a trip to Khunjerab Pass, Passu Cones, and Borith Lake.",
    price: "PKR 75,000",
    images: ["uploads/mult1.jpg"]
  },

  {
    name: "Hunza & Khunjerab Pass Adventure (7 Days)",
    location: "Hunza",
    description: "Full Hunza valley adventure with a trip to Khunjerab Pass, Passu Cones, and Borith Lake.",
    price: "PKR 75,000",
    images: ["uploads/mult1.jpg"]
  },

  {
    name: "Hunza & Khunjerab Pass Adventure (7 Days)",
    location: "Hunza",
    description: "Full Hunza valley adventure with a trip to Khunjerab Pass, Passu Cones, and Borith Lake.",
    price: "PKR 75,000",
    images: ["uploads/mult1.jpg"]
  },

  {
    name: "Hunza & Khunjerab Pass Adventure (7 Days)",
    location: "Hunza",
    description: "Full Hunza valley adventure with a trip to Khunjerab Pass, Passu Cones, and Borith Lake.",
    price: "PKR 75,000",
    images: ["uploads/mult1.jpg"]
  },

  {
    name: "Hunza & Khunjerab Pass Adventure (7 Days)",
    location: "Hunza",
    description: "Full Hunza valley adventure with a trip to Khunjerab Pass, Passu Cones, and Borith Lake.",
    price: "PKR 75,000",
    images: ["uploads/mult1.jpg"]
  },
  // Add more for each package/image...
];

async function seedTours() {
  try {
    await mongoose.connect(url);
    await Tour.deleteMany({});
    await Tour.insertMany(tours);
    console.log("Tours seeded!");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seedTours();