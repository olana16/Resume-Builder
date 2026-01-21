import { Plus } from 'lucide-react';
import React from 'react'
import { useState } from 'react';
const SkillsForm = ({data,Onchange}) => {
    const [newSkill, setNewSkill] = useState("");

    const addSkill = () => {
        // Add logic to handle adding a new skill
        if(newSkill.trim() && !data.includes(newSkill.trim())) {
            Onchange([...data, newSkill.trim()]);
            setNewSkill("");
        }
    }

    const removeSkill = (indexToRemove) => {
        Onchange(data.filter((_, index) => index !== indexToRemove));
    }

    const handleKeyPress = (e)=>{
        if(e.key === 'Enter'){
            e.preventDefault();
            addSkill();
        }
    }

  return (
    <div className='space-y-4'>
        <div>
            <h3 className='flex items-center gap-2 text-lg font-semibold'>Skills</h3>
            <p className='text-sm text-gray-500'>Add your technical and soft Skills</p>
        </div>

        <div className='flex gap-2'>
            <input type="text" placeholder='Enter a skill(e.g Javascript, Project Managment)'
            className='flex-1 px-3 py-2 text-sm' 
            onChange={(e)=>setNewSkill(e.target.value)}
            value={newSkill}
            onKeyDown={handleKeyPress}/>

            <button onClick={addSkill} disabled={!newSkill.trim()} className='flex items-center gap-2 px-4 py-2 text-sm bg-blue-500
             text-white rounded-lg hover:bg-blue-700 transition-colors
              disabled:opacity-50 disabled:cursor-not-allowed'>
                <Plus className='size-4'/>Add
            </button>

        </div>
      
    </div>
  )
}

export default SkillsForm
