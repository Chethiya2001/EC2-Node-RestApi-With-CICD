import express from "express";
const router = express.Router();

import userController from "../controllers/userController.js";
router.post("/create", userController.createNewUser);
router.get("/all", userController.getAllUsers);

export default router;
