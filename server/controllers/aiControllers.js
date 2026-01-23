

//controllers for enhance professional ai features summary
//POST /api/ai/enhance-pro-sum


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
                    content: " You are an expert in resume writing.Your task is to enhance the professional summary of resume. The summary should 1 - 2 sentences also highlight key skills, experience and career objective . Make compelling and ATS-friendly. and also return text no options or anything else "
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

