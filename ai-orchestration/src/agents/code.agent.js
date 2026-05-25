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

await agent.invoke({
    messages: [
        {
            role: "user",
            content: "create a simple calculator app with the help of react and make sure make it good all function are working.once user enter input and click button for result then after if user contiue his calculation then do calculation on currnt numbers which he give untill user clear the result. "
        }
    ]
})