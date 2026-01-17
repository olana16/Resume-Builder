import React from 'react'

const ProjectForm = ({data, onChange}) => {

     const addProject = () => {
        const newProject = {
            institution: "",
            degree: "",
            field: "",
            graduation_date: "",
            gpa: "",
        }
        onChange([...data, newProject])
    }

    const removeProject = (index) => {
        onChange(data.filter((_, i) => i !== index))
    }

    const updateProject = (index, field, value) => {
        const updated = [...data]
        updated[index] = { ...updated[index], [field]: value }
        onChange(updated)
    }



  return (
    <div>
      
    </div>
  )
}

export default ProjectForm
