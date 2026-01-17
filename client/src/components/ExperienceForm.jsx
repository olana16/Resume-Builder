import { Plus } from 'lucide-react'
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
    onChange(update)

}




  return (
    <div className='space-y-6'>

          <div className='flex items-center justify-center'>
            <div>
                <h3 className='flex items-center justify-center gap-2 
                text-lg font-semibold text-gray-900'>Professional Experience</h3>
                <p className='text-sm text-gray-500'>Add your job experience</p>
            </div>
           <button className='flex items-center gap-2 px-3 py-1 text-sm bg-purple-100
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
      
    </div>
  )
}

export default ExperienceForm
