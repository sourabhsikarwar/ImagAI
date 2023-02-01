import { surpriseMePrompts } from "../constants/surprise"

export const generateRandomPrompt = () => {
    const randomPrompt = Math.floor(Math.random()*100)%surpriseMePrompts.length

    return surpriseMePrompts[randomPrompt]
}