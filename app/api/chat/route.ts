import { NextResponse } from 'next/server'
import { GoogleGenerativeAI } from "@google/generative-ai";

const SCHOOL_CONTEXT = `
You are the friendly and knowledgeable AI Assistant for Al Shomoukh International School (SIS) in Muscat, Oman.
Your goal is to assist parents and students with helpful, accurate information about our school.
Tone: Warm, welcoming, professional, and educational.

### 🏫 School Overview
- **Name:** Al Shomoukh International Private School (SIS).
- **Founded:** 2015 by Honourable Sheihk Salim bin Hamood Al-Hashmi.
- **Mission:** "We RISE" (Respect, Integrity, Success, Exploration).
- **Vision:** Creating a community of lifelong learners and productive global citizens.
- **Grades:** Kindergarten (KG1) to Grade 12 (Ages 3-18).
- **Gender:** Co-educational (Boys and Girls).

### 📚 Curriculum & Academics
- **Kindergarten (KG1 & KG2):** Early Years Foundation Stage (EYFS) Framework. Focus on 7 areas of learning including literacy, math, and emotional development.
- **Primary (Grades 1-6):** UK National Curriculum (Key Stage 1 & 2). Uses the **Oxford Reading Tree** for phonics. Subjects include English, Math, Science, Art, ICT, Music, and Life Skills.
- **Lower Secondary (Grades 7-8):** Foundation for IGCSE.
- **Upper Secondary (Grades 9-10):** **Edexcel IGCSE** curriculum. Core: Math, English, Triple Science. Options: Business, ICT, Geography, History, Art, etc.
- **Advanced Level (Grades 11-12):** Students choose between:
  1. **Edexcel International Advanced Levels (IAL):** AS/A Levels.
  2. **Omani General Education Diploma (GED):** Ministry equivalent to A-Levels.

### 📝 Admissions & Enrollment
- **Process:** 1. Book a Tour -> 2. Placement Assessment (Interview/Exam) -> 3. Fee Payment & Documentation.
- **Age Criteria (by June of enrolling year):** KG1 (3 years), KG2 (4 years), Grade 1 (5 years).
- **Requirements:** Students must be toilet-trained for KG.
- **Class Size:** Average of 25 students.
- **Special Needs:** Currently limited capacity; does not typically enroll special needs students.

### 📍 Contact & Location
- **Phone:** +968 24284756 / +968 24284771
- **Email:** admission@alshomoukh.com, info@alshomoukh.com
- **Location:** Muscat, Sultanate of Oman.
- **Hours:** Sunday - Thursday, 7:30 AM - 3:30 PM.

### 💡 Guidelines for AI
- Answer concisely but with warmth.
- If asked about fees, mention they vary by grade (approx OMR 1500-3500) and direct to the admissions team for the exact structure.
- If you don't know an answer, politely ask them to contact the school administration directly.
- Emphasize our British innovation combined with Omani values.
`

export async function POST(req: Request) {
    try {
        const { message } = await req.json()

        if (!message) {
            return NextResponse.json({ error: 'Message is required' }, { status: 400 })
        }

        const apiKey = process.env.GEMINI_API_KEY

        // Fallback logic function (Local Backup)
        const getFallbackResponse = (msg: string) => {
            const lowerMsg = msg.toLowerCase();
            if (lowerMsg.includes('admission') || lowerMsg.includes('apply')) {
                return "Admissions are currently open for all grades. You can apply online through our 'Admissions' page or visit our campus for a tour.";
            } else if (lowerMsg.includes('fee') || lowerMsg.includes('cost')) {
                return "Our tuition fees vary by grade level, ranging from OMR 1,500 to OMR 3,500 per year. Please check the 'Admissions' section for a detailed fee structure.";
            } else if (lowerMsg.includes('curriculum')) {
                return "We follow the Cambridge International Curriculum, offering a balanced and rigorous education that prepares students for global opportunities.";
            } else if (lowerMsg.includes('contact') || lowerMsg.includes('phone') || lowerMsg.includes('email')) {
                return "You can reach us at +968 24284756 or email us at admission@alshomoukh.com. We are available Sunday to Thursday, 7:30 AM to 3:30 PM.";
            } else if (lowerMsg.includes('location') || lowerMsg.includes('where')) {
                return "We are located in Muscat, Sultanate of Oman. You can find our exact location on the map in the 'Contact' section.";
            } else {
                return "I'm currently unable to connect to the AI service, but let me help you with some basics. We are Al Shomoukh International School in Muscat. For specific inquiries, please call +968 24284756.";
            }
        }

        if (!apiKey || apiKey === 'your_gemini_api_key_here') {
            console.warn('Missing or default Gemini API Key');
            return NextResponse.json({ reply: getFallbackResponse(message) });
        }

        try {
            const genAI = new GoogleGenerativeAI(apiKey);
            const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

            // Combine context and user message
            // In a stateless single-turn setup, we can just prompt the model directly.
            const prompt = `${SCHOOL_CONTEXT}\n\nUser Question: ${message}`;

            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();

            return NextResponse.json({ reply: text })
        } catch (apiError: any) {
            console.error('Gemini API call failed:', apiError);
            // Return fallback response on any API failure
            return NextResponse.json({ reply: getFallbackResponse(message) });
        }

    } catch (error) {
        console.error('Chat API Error:', error)
        // Return fallback response on error
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
