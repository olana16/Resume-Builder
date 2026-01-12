import { BookAlertIcon } from 'lucide-react'
import React from 'react'
import Title from './Title'


const Testimonials = () => {
    
  return (
     <div id='testimonials' className='flex flex-col items-center my-10 scroll-m-12'>
      
       <div className="flex items-center gap-2 text-sm green-blue-800 bg-green-400/10  rounded-full px-6 py-1.5 my-4">

            <BookAlertIcon className='size-4.5 stroke-green-600' />

            <span>Testimonials</span>

        </div>
        <Title title="Don't just take our words" description="Hear what our users say about us. We're always looking for ways to
        improve. If you have any feedback, please let us know." />


    </div>
  )
}

export default Testimonials
