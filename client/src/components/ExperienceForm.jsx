import { Briefcase, Plus, Trash2 } from 'lucide-react'
import React from 'react'

const ExperienceForm = ({data, onChange}) => {


const addExperience = ()=>{

    const newExperience ={
        company:"",
        position:"",
        start_date:"",
        end_date:"",
        description:"",
        is_current:false

    }
    onChange([...data, newExperience])

}

const removeEXperience =(index)=>{

    const updated = data.filter((_,i)=> i !== index)
    onChange(updated)

}

const updateEXperience =(index)=>{

    const updated = [...data]
    updated[index] ={...updated[index], [field]: value}
    onChange(updated)

}




  return (
    <div className='space-y-6'>

          <div className='flex items-center justify-center'>
            <div>
                <h3 className='flex items-center justify-center gap-2 
                text-lg font-semibold text-gray-900'>Professional Experience</h3>
                <p className='text-sm text-gray-500'>Add your job experience</p>
            </div>
           <button onClick={addExperience} className='flex items-center gap-2 px-3 py-1 text-sm bg-purple-100
            text-purple-700 rounded hover:bg-purple-200 transition-colors'>

            <Plus className='size-4'/>
            Add Experience
           </button>
        </div>

        <div className='mt-6'>
            <textarea value={data || ""} onChange={(e)=>onChange(e.target.value)} rows={7} className='w-full p-3 px-4 border text-sm 
             border-gray-300 rounded-lg focus:ring focus:ring-blue-500
              focus:border-blue-500 outline-none transition-colors resize-none'
               placeholder='Write  a compelling professional summary that highlight your key strength and crareer objectives ... '/>
                <p className='text-xs text-gray-500 max-w-4/5 mx-auto text-center'>
      Tip: keep it concise (3-4 sentences) and focus on your most relevant achivment and skills.
                </p>

              
        </div>


        {data.length === 0 ? (
            <div className='text-center py-8 text-gray-500'>
                <Briefcase className='w-12 h-12 mx-auto mb-3 text-gray-300'/>
                <p>No work experience add yet</p>
                <p className='text-sm'>Click "AddExperince" to get started</p>

            </div>
        ) : (

            <div className='space-y-4'>
                {data.map((experience, index)=>{
                    <div key={index} className='p-4 border border-gray-200 rounded-lg space-y-3'>
                        <div className='flex justify-between items-start'>
                            <h4>Experience #{index + 1}</h4>
                            <button onClick={()=>removeEXperience(index)} className='text-red-500 hover:text-red-700 transition-colors'>
                                <Trash2 className='size-4'/>
                            </button>
                        </div>
                    </div>
                })}

            </div>
        )}
      
    </div>
  )
}

export default ExperienceForm
