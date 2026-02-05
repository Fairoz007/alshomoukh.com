const { GoogleGenerativeAI } = require("@google/generative-ai");

const apiKey = "AIzaSyAHV2BNEej7S09TC6fB38AXQt5E4FlPb_o";
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

async function list() {
    const result = await genAI.listModels();
    console.log(result);
}

async function run() {
    try {
        const prompt = "Hello";
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        console.log("Success:", text);
    } catch (error) {
        console.error("Error details:", error.message);
        if (error.response) {
            console.error("Response:", JSON.stringify(error.response, null, 2));
        }
    }
}

run();
// list();
