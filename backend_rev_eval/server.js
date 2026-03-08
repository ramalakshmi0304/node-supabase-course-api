import express from "express"
import courseRoute from "./routes/courses.routes"
import { logger } from "../middleware/logger";
import dotenv from dotenv
dotenv.config()

const app= express()
const PORT= process.env.PORT||4000;

app.use(express.json())
app.use(logger)
app.use("/api", courseRoute)

app.listen(PORT,()=>{
    console.log(`server is listening on ${PORT}`)
})

