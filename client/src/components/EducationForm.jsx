import { GraduationCap } from 'lucide-react'
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
        onChange([...data, newEducation])
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
     <div className='space-y-6'>

            <div className='flex items-center justify-between'>
                <div>
                    <h3 className='flex items-center justify-center gap-2 text-lg font-semibold text-gray-900'>Education</h3>
                    <p className='text-sm text-gray-500'>Add your Education Details</p>
                </div>
                <button onClick={addEducation} className='flex items-center gap-2 px-3 py-1 text-sm
                 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors'>
                    <Plus className='size-4' />
                    Add Education
                </button>
            </div>

            {(!data || data.length === 0) ? (
                <div className='text-center py-8 text-gray-500'>
                    <GraduationCap className='w-12 h-12 mx-auto mb-3 text-gray-300' />
                    <p>No education added yet</p>
                    <p className='text-sm'>Click "Add Education" to get started</p>
                </div>
            ) : (
                <div className='space-y-4'>
                    {data.map((education, index) => (
                        <div key={index} className='p-4 border border-gray-200 rounded-lg space-y-3'>
                            <div className='flex justify-between items-start'>
                                <h4>Education #{index + 1}</h4>
                                <button onClick={() => removeEducation(index)} className='text-red-500 hover:text-red-700 transition-colors'>
                                    <Trash2 className='size-4' />
                                </button>
                            </div>

                            <div className='grid md:grid-cols-2 gap-3'>

                                <input value={education.institution || ""} onChange={(e) => updateEducation(index, "institution", e.target.value)} className='px-3 py-2 text-sm rounded-lg' type="text" placeholder='Institution' />

                                <input value={education.degree || ""} onChange={(e) => updateEducation(index, "degree", e.target.value)} className='px-3 py-2 text-sm rounded-lg' type="text" placeholder='Degrees (e.g, Masters or Bachlors' />

                                <input value={education.field || ""} onChange={(e) => updateEducation(index, "field", e.target.value)} className='px-3 py-2 text-sm rounded-lg' type="text" placeholder='Field os Study' />

                                <input typeof='' value={education.graduation_date || ""} onChange={(e) => updateEducation(index, "graduation_date", e.target.value)} className='px-3 py-2 text-sm rounded-lg ' type="date" />

                            </div>
                                                           
                      <input value={education.gpa || ""} onChange={(e) => updateEducation(index, "gpa",
                         e.target.value)} className='px-3 py-2 text-sm rounded-lg' type="text" placeholder='GPA(Gpa optional)' />


                            <label className='flex items-center gap-2'>
                                <input
                                    type="checkbox"
                                    checked={experience.is_current || false}
                                    onChange={(e) => {
                                        const checked = e.target.checked
                                        const updated = [...data]
                                        updated[index] = {
                                            ...updated[index],
                                            is_current: checked,
                                            end_date: checked ? "" : updated[index].end_date
                                        }
                                        onChange(updated)
                                    }}
                                    className='rounded border-gray-300 accent-blue-600 focus:ring-blue-500'
                                />
                                <span className='text-sm text-gray-700'>Currently Working Here.</span>
                            </label>

                            <div className='space-y-2'>

                                <div className='flex items-center justify-between'>

                                    <label className='text-sm font-medium text-gray-700'> Job Description</label>
                                    <button className='flex items-center gap-1 px-2 py-1 text-xs bg-purple-100 text-purple-700 focus:ring-blue-500 rounded hover:bg-purple-200 transition-colors disabled:opacity-50'>
                                        <Sparkles className='w-3 h-3' />Enhance with AI
                                    </button>
                                </div>

                                <textarea
                                    value={experience.description || ""}
                                    onChange={(e) => updateExperience(index, "description", e.target.value)}
                                    rows={4}
                                    className='w-full text-sm px-3 py-2 rounded-lg resize-none border border-gray-300 outline-none focus:ring focus:ring-blue-500 focus:border-blue-500'
                                    placeholder='Describe your key responsibility and achievements...'
                                />

                            </div>

                        </div>
                    ))}

                </div>
            )}

        </div>
  )
}

export default EducationForm
