import React, { useState } from 'react'
import './Accordion.css'
const acco=[
    {
        Head:'1.Consultation',
        para:'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
    },
    {
        Head:'2.Research and Stratergy',
        para:'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
    },
    {
        Head:'3.Implementation',
        para:'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
    },
    {
        Head:'4.Monitoring and Optimization',
        para:'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
    },
    {
        Head:'5.Reporting and communication',
        para:'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
    }
]
const Accordion = () => {
    const [component,setcomponet]=useState(null);
    function handleacco(index){
        setcomponet(index===component ? null : index)
        console.log(index)

    }
  return (
    <>
    <h2 className='head'>Accordion section</h2>
    <div className='Acco'>
        {acco.map((item,index)=>(
            <div key={index} className='accordion'  onClick={()=>handleacco(index)} >
                <div>
                    <h1>{item.Head}</h1>
                </div>
                {component===index && <p>{item.para}</p>}
            </div>
        ))}
    </div>
    </>
  )
}

export default Accordion
