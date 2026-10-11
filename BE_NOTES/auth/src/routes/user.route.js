import { Router } from "express";
import userModel from "../model/user.model.js";
import jwt from "jsonwebtoken";

const appRouter = Router();

// Read at call time: with ES modules this file runs before server.js loads .env.
// No fallback value: a missing secret must stop the request, not sign with a known key.
const getJwtSecret = () => {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error("JWT_SECRET is not set (see .env.example)");
  return secret;
};

const signToken = (userId) =>
  jwt.sign({ id: userId }, getJwtSecret(), { expiresIn: "1h" });

appRouter.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({
      message: "Username, email, and password are required",
    });
  }

  const normalizedUsername = username.trim();
  const normalizedEmail = email.trim().toLowerCase();

  try {
    const userExists = await userModel.findOne({
      $or: [{ username: normalizedUsername }, { email: normalizedEmail }],
    });

    if (userExists) {
      return res.status(400).json({
        message: "User with this email or username already exists",
      });
    }

    const newUser = await userModel.create({
      username: normalizedUsername,
      email: normalizedEmail,
      password,
    });

    const token = signToken(newUser._id);

    return res.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to register user",
      error: error.message,
    });
  }
});


appRouter.get("/getme", async (req, res) => {
  const token = req.headers.authorization;
//   const token = authHeader && authHeader.split(" ")[1];
     const decoded = jwt.verify(token, getJwtSecret());
     



     if (!token) {
     return res.status(401).json({ message: "No token provided" });
     }

     



}

export default appRouter;