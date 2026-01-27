

//controllers for enhance professional ai features summary
//POST /api/ai/enhance-pro-sum

import Resume from "../models/Resume.js";
import ai from "../configs/ai.js";


export const enhanceProfessionalSummary = async(req, res) =>{

    try{

        const{userContent} = req.body;

        if(!userContent){
            return res.status(400).json({ message: "Content is required for enhancement" });
        }

    const response = await ai.chat.completions.create({
            model: process.env.OPENAI_MODEL,
            messages: [
                {
                    role: "system",
                    content: "You are an expert in resume writing. Enhance the professional summary using a first-person voice (use 'I' when referring to the candidate). Return 1-2 sentences that highlight key skills, experience, and career objective, make it compelling and ATS-friendly. Preserve appropriate tense: use present tense for current roles and past tense for past roles. Return only the enhanced summary text with no extra commentary or options."
                },
                {
                    role: "user",
                    content: userContent
                }
            ]
        })

        const enhancedContent = response.choices[0].message.content;

        return res.status(200).json({enhancedContent});

    }catch (error) {
        return res.status(400).json({ message: "Failed to enhance professional summary", error: error.message });
    }
}



//controllers for generate job description
//POST /api/ai/enhance-job-desc


export const enhanceJobDescription = async(req, res) =>{

    try{

        const{userContent} = req.body;

        if(!userContent){
            return res.status(400).json({ message: "Content is required for enhancement" });
        }

    const response = await ai.chat.completions.create({
            model: process.env.OPENAI_MODEL,
            messages: [
                {
                    role: "system",
                    content: "You are an expert in job description writing. Enhance the job description using a first-person voice (use 'I' when describing actions and achievements). Return 1-2 sentences that highlight key responsibilities and measurable achievements, make it compelling and ATS-friendly. Use present tense for current roles and past tense for previous roles. Return only the enhanced description text with no extra commentary or options."
                },
                {
                    role: "user",
                    content: userContent
                }
            ]
        })

        const enhancedContent = response.choices[0].message.content;

        return res.status(200).json({enhancedContent});

    }catch (error) {
        return res.status(400).json({ message: "Failed to enhance job description", error: error.message });
    }
}


//controllers for uploading a resume to the database
//POST /api/ai/upload-resume


export const uploadResume = async(req, res) =>{
    try {
        const { resumeText, title } = req.body;
        const userId = req.userId;

        if(!resumeText){
            return res.status(400).json({ message: "Resume text are required" });
        }




        const systemPrompt = "You are an expert AI agent to extract data from resume"

        const userPrompt = `Extraxt data from this resume: ${resumeText} 

     provide data in the following JSON format with no addational text before or after:

     {

      professional_summary: { type: String, default: "" },
    skills:[{ type: String }],
    personal_info:{
        image: { type: String, default: "" },
        full_name: { type: String, default: "" },
        procession: { type: String, default: "" },
        email: { type: String, default: "" },
        phone: { type: String, default: "" },
        location: { type: String, default: "" },
        linkedin: { type: String, default: "" },
        website: { type: String, default: "" },
    },


    experience:[{
        company: { type: String, default: "" },
        position: { type: String, default: "" },
        start_date: { type: String, default: "" },
        end_date: { type: String, default: "" },
        description: { type: String, default: "" },
        is_current: { type: Boolean, default: false },
    }],

    project: [{
        name: { type: String, default: "" },
        type: { type: String, default: "" },
        description: { type: String, default: "" },
    }],

    education: [{
        institution: { type: String, default: "" },
        degree: { type: String, default: "" },
        field: { type: String, default: "" },
        graduation_date: { type: String, default: "" },
        gpa: { type: String, default: "" },
    }],

     
      }
        `


          const response = await ai.chat.completions.create({
            model: process.env.OPENAI_MODEL,
            messages: [
                {
                    role: "system",
                    content: systemPrompt
                },
                {
                    role: "user",
                    content: userPrompt
                }
            ],
            response_format: {type: "json_object"}
        })

        const extractedData = response.choices[0].message.content; 
        const parsedData = JSON.parse(extractedData);
        const newResume = await Resume.create({
            userId,title,...parsedData
        })
        res.json({resumeId: newResume._id})
        

    } catch (error) {
        return res.status(400).json({ message: "Failed to upload resume", error: error.message });
        
    }
}
