import "dotenv/config"
import { ChatMistralAI } from "@langchain/mistralai"
import { listFiles, readFile, updateFile } from "./tools.js";
import { createAgent } from "langchain"

const model = new ChatMistralAI({
    model: "mistral-medium-latest",
    apiKey: process.env.MISTRALAI_API_KEY,
})

const agent = createAgent({
    model,
    tools: [listFiles, readFile, updateFile],
})

export default agent;