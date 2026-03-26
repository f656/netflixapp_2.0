import express from "express";
import { getProfile, Login, Logout, Register } from "../controllers/user.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
const router = express.Router();

router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").get(Logout);

// 🔥 NEW ROUTE
router.route("/profile").get(isAuthenticated, getProfile);


export default router;