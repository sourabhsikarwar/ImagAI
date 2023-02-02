import express from "express"
import { Configuration, OpenAIApi } from "openai";
import * as dotenv from "dotenv"

dotenv.config()

const router = express.Router()

const configuration = new Configuration({
    apiKey : process.env.OPENAI_API
})

const openai = new OpenAIApi(configuration)

router.get('/', (req, res) => {
    res.send('Hello from Dall-e Route')
})

router.post('/', async (req, res) => {
    try {
        const { prompt } = req.body
        const aiResponse = await openai.createImage({
            prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json'
        })
        const image = aiResponse.data.data[0].b64_json
        res.status(200).json({ photo: image })
    } catch (error) {
        console.log(error?.response.data.error)
        res.status(500).send(error?.response.data.error)
    }
})

export default router