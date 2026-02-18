import express from "express"
import { createMassage, loginAdmin, getAdminMassages } from "../controllers/complaints.controller.js"
import { verifyToken } from "../middlewares/requireAdminAuth.js"


const router = express.Router()

router.post("/complaints", createMassage)
router.post("/admin/login", loginAdmin)
router.get("/complaints", verifyToken, getAdminMassages )

export default router