
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/application.js";
import bodyParser from "body-parser";

const app = express();
const url = "mongodb+srv://asif:123@cluster0.k4mugdm.mongodb.net/?appName=Cluster0"

app.use(cors());
// app.use(bodyParser.json({extebded:true}));
// app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

// DB CONNECTION
mongoose.connect(url)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// ROUTES
app.use("/api", authRoutes);

// SERVER
app.listen(5000, () => console.log("Server running on port 5000"));
