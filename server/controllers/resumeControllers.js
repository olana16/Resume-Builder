


// Controllers for creating resume

import Resume from "../models/Resume.js";

//GET /api/resumes/create
export const createResume = async(req, res) =>{
    try{
        const userId = req.userId;
        const {title} = req.body;


        // create new resume
        const newResume = await Resume.create({
            title,
            user: userId
        });


        //return sucess message

        return res.status(201).json({ message: "Resume created successfully", resume: newResume });

    }       catch (error) {
        return res.status(400).json({ message: "Resume creation failed", error: error.message });
    }
} 


//controllers for deleting resume
//DELETE /api/resumes/delete

export const deleteResume = async(req, res) =>{
    try{

        const userId = req.userId;
        const { resumeId } = req.params;

        await Resume.findOneAndDelete({userId, _id: resumeId, user: userId });
        return res.status(200).json({ message: "Resume deleted successfully" });
    }catch (error) {

        return res.status(400).json({ message: "Resume deletion failed", error: error.message });
}
}

//get resume by id controller
//GET /api/resumes/get

export const getResumeById = async(req, res) =>{
    try{
        const userId = req.userId;
        const { resumeId } = req.params;

        const resume = await Resume.findOne({userId, _id: resumeId });
        if(!resume){
            return res.status(404).json({ message: "Resume not found" });
        }

        resume.__v = undefined; // hide __v field
        resume.createdAt = undefined; // hide createdAt field
        resume.updatedAt = undefined; // hide updatedAt field

        return res.status(200).json({ resume });

    }catch (error) {
        return res.status(400).json({ message: "Failed to fetch resume", error: error.message });
    }
}