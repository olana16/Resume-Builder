import React from 'react'

const EducationForm = ({data, onChange}) => {



      const addEducation = () => {
        const newEducation = {
            institution: "",
            degree: "",
            field: "",
            graduation_date: "",
            gpa: "",
        }
        onChange([...data, newExperience])
    }

    const removeEducation = (index) => {
        onChange(data.filter((_, i) => i !== index))
    }

    const updateEducation = (index, field, value) => {
        const updated = [...data]
        updated[index] = { ...updated[index], [field]: value }
        onChange(updated)
    }



  return (
    <div>
      
    </div>
  )
}

export default EducationForm
