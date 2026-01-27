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
     /* constrain page size and hide other UI */
     html, body {
         width: 8.5in;
         height: 11in;
         margin: 0;
         padding: 0;
         overflow: hidden;
     }
     body * {
         visibility: hidden;
     }
     #resume-preview, #resume-preview * {
         visibility: visible;
     }
     /* Force the preview to match a single printed page and scale slightly if needed */
     #resume-preview {
         position: absolute;
         left: 0;
         top: 0;
         width: 8.5in;
         height: 11in;
         box-shadow: none !important;
         border: none !important;
         margin: 0;
         padding: 0.4in; /* small padding inside page */
         overflow: hidden;
         -webkit-print-color-adjust: exact;
         transform-origin: top left;
         /* slight scale to prevent overflow across browsers; adjust if content still breaks */
         transform: scale(0.98);
     }
     /* Avoid page breaks inside major sections */
     #resume-preview section, #resume-preview .section {
         break-inside: avoid;
         page-break-inside: avoid;
     }
 }
`}</style>

        </div>
    )
}

export default ResumePreview
