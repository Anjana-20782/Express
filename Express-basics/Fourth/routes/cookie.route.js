import express from "express";
import { setCookie, readCookie } from "../controllers/cookie.controller.js";

const router = express.Router();

router.get("/set", setCookie);   // Set the cookie
router.get("/read", readCookie); // Read the cookie

export default router;
