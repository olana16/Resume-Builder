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
    
  return (
    <div>
      
    </div>
  )
}

export default SkillsForm
