


// Controllers for creating resume

import imageKit from "../configs/imageKit.js";
import Resume from "../models/Resume.js";
import fs from "fs";

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


// get resume by id public controller
//GET /api/resumes/public

export const getPublicResumeById = async(req, res) =>{
    try{
        const { resumeId } = req.params;

        const resume = await Resume.findOne({public: true, _id: resumeId });
        if(!resume){
            return res.status(404).json({ message: "Resume not found or is not public" });
        }
        return res.status(200).json({ resume });

       
    } catch (error) {
        return res.status(400).json({ message: "Failed to fetch resume", error: error.message });
    }
}

//controllers for updating resume
//PUT /api/resumes/update

export const updateResume = async(req, res) =>{
    try{
        const userId = req.userId;
        const { resumeId, resumeData, removeBackground } = req.body;
        const image = req.file;


        let resumeDataCopy = JSON.parse(JSON.stringify(resumeData));

        if(image){

            const imageBufferData = fs.createReadStream(image.path);
            

            const response = await imageKit.files.upload({
               file: imageBufferData,
                 fileName: 'resume.png',
                 folder: 'user-resumes',
                 transformation:{
                    pre:'w-300, h-300, fo-face, z-0.75,'+ (removeBackground ? 'e-bgremove,' : '')
                 }

                 });


                 resumeDataCopy.personal_info.image = response.url;


        }

     const resume =   await Resume.findOneAndUpdate(
            { userId, _id: resumeId },
            resumeDataCopy, {new:true});

             return res.status(200).json({ message: "Resume updated successfully", resume });
       
    }catch (error) {
        return res.status(400).json({ message: "Resume update failed", error: error.message });
    }
}   