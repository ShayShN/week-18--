import express from "express"
import routerComplaints from "./routes/complaints.routes.js"
import cors from 'cors'

import dotenv from "dotenv"

dotenv.config()

const app = express()
const port = 3001

app.use(express.json())
app.use(cors());


app.use("/api", routerComplaints)










app.listen(port, ()=>{
    console.log(`server running on  http://localhost:${port}`);
})