import express from "express";

export const router = express.Router();

import { indexUsers, createUser } from "../controllers/userController";

router.get("/", indexUsers);

router.post("/", createUser);
