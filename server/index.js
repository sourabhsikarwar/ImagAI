import express from "express"
import * as dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/dbConn.js"
import PostRoute from "./routes/postRoute.js"
import DalleRoute from "./routes/dalleRoute.js"

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json({ limit: '50mb'}))

app.use('/api/v1/post', PostRoute)
app.use('/api/v1/dalle', DalleRoute)

app.get('/', async (req, res) => {
    res.send('Hello From ImagAI')
})

const startServer = () => {
    try {
        connectDB()
        app.listen(8080, () => {
            console.log('Server running on http://localhost:8080')
        })
    } catch (error) {
        console.log(error.message)
    }
}

startServer()
