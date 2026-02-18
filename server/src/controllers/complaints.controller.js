import { readFileFS, writeFileFS } from "../fileSystem/handle-files.js";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

const pathData = "src/db/data.json"

export const createMassage = async (req, res) => {
    try {
        const dataMassage = await readFileFS(pathData)
        const newMassage = {
            category: req.body.category,
            message: req.body.message,
            createdAt: new Date().toISOString()
        }

        console.log(dataMassage);
        
        dataMassage.push(newMassage)
        
          console.log(dataMassage);
        
        await writeFileFS(pathData, dataMassage)
        return res.json({ "message": "Massage created successfully" })
    } catch (err) {
        console.error(err);
        return res.status(500).send("createMassage error")

    }
}

export const loginAdmin = async (req, res) => {
    try {
        if (!(String(req.body.password) === process.env.ADMIN_PASSWORD)) {
            return res.status(401).send("Unauthorized")
            
        }
        else{
        const token = jwt.sign( {role: "admin"}, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN })
        return res.json({token: token, role: "admin"})
        }
    } catch (err) {
        console.error(err);
        return res.status(500).send("loginAdmin error")
    }
}

export const getAdminMassages = async (req, res) => {
    try {
        const dataMassage = await readFileFS(pathData)
        if (!dataMassage || dataMassage.length === 0) {
            return res.status(404).send("data is empty")
        }
        return res.json({data: dataMassage.reverse()});
        
    } catch (err) {
        console.error(err);
        return res.status(500).send("getAdminMassages error")
    }
}