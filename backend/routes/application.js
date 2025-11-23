import express from "express";
import User from '../model/auth.model.js'
import bcrypt, { truncates } from "bcryptjs";

const router = express.Router();


router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const exist = await User.findOne({ email });
    if (exist) return res.status(400).json({ message: "Email already used!" });

    const hashedPass = await bcrypt.hash(password, 10);

    const user = new User({ name, email, password: hashedPass });
    await user.save();

    res.json({ message: "User registered successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found!" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ message: "Invalid password!" });

    res.json({ message: "Login successful!", user });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
