import React from 'react'
import ClassicTemplate from './templates/ClassicTemplate'
import ModernTemplate from './templates/ModernTemplate'
import MinimalTemplate from './templates/MinimalTemplate'
import MinimalImageTemplate from './templates/MinimalImageTemplate'

const ResumePreview = ({ data, template, accentColor, classes = "" }) => {


    const renderTemplate = () => {
        switch (template) {
            case "modern":
                return <ModernTemplate data={data} accentColor={accentColor} />
            case "minimal":
                return <MinimalTemplate data={data} accentColor={accentColor} />
            case "minimal-image":
                return <MinimalImageTemplate data={data} accentColor={accentColor} />
            default:
                return <ClassicTemplate data={data} accentColor={accentColor} />
        }
    }

    return (
        <div className='w-full bg-gray-100'>
            <div id='resume-preview'
                className={"border border-gray-200 print:shadow-none print:border-none" + classes}>

                {renderTemplate()}


            </div>

                        <style jsx>{`
 @page{
     size: letter;
     margin: 0;
 }
 @media print {
     /* constrain page width and hide other UI, allow multi-page flow */
     html, body {
         width: 8.5in;
         margin: 0;
         padding: 0;
         background: white;
     }
     body * {
         visibility: hidden;
     }
     #resume-preview, #resume-preview * {
         visibility: visible;
     }
     /* Place the preview at the very top of the printed page so it doesn't shift to a later page */
     #resume-preview {
         position: absolute;
         left: 0;
         top: 0;
         width: 8.5in;
         box-shadow: none !important;
         border: none !important;
         margin: 0;
         padding: 0.4in; /* small padding inside page */
         overflow: visible;
         -webkit-print-color-adjust: exact;
         transform: none;
     }
     /* Prefer avoiding breaks inside small sections but allow natural page breaks for long content */
     #resume-preview section, #resume-preview .section {
         break-inside: avoid-column;
         page-break-inside: avoid;
     }
     /* Ensure long sections can break across pages when necessary */
     #resume-preview .allow-break {
         break-inside: auto;
         page-break-inside: auto;
     }
 }
`}</style>

        </div>
    )
}

export default ResumePreview
