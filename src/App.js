import React from 'react'
import Nav from './Components/Navbar/Nav'
import Footer from './Components/Footer/Footer'
import './App.css'
import Accordion from './Components/Accordiion/Accordion'
import Hero1 from './Assets/Hero1.png'
import Amazon from './Assets/Amazon.png'
import Dribbble from './Assets/Dribbble.png'
import Hub from './Assets/Hub.png'
import Netflix from './Assets/Netflix.png'
import Notion from './Assets/Notion.png'
import Zoom from './Assets/Zoom.png'
import data1 from './Assets/data1.png'
import data2 from './Assets/data2.png'
import data3 from './Assets/data3.png'
import data4 from './Assets/data4.png'
import data5 from './Assets/data5.png'
import data6 from './Assets/data6.png'

const App = () => {
  let data=[
    {
      Heading:'Search Engine Optimization',
      para:'Learn More',
      image:`${data1}`
    },
    {
      Heading:'Pay-Per-Click Advertising',
      para:'Learn More',
      image:`${data2}`
    },
    {
      Heading:'Social media Marketing',
      para:'Learn More',
      image:`${data3}`
    },
    {
      Heading:'Email Marketing',
      para:'Learn More',
      image:`${data4}`
    },
    {
      Heading:'Content Creation',
      para:'Learn More',
      image:`${data5}`
    },
    {
      Heading:'Analytic and Tracking',
      para:'Learn More',
      image:`${data6}`
    }
]

  return (
    <div>
      <Nav/>
      <div className='Main'> 
        <div className='Hero1'>
            <div className='Hero1-left'>
              <h1>Navigating the digital landscape for success</h1>
              <p>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
              <button>Book a consultation</button>
            </div>
            <div className='Hero1-right'>
              <img src={Hero1} alt='Hero1'/>
            </div>
        </div>
        <div className='Hero2'>
          <img src={Amazon} alt='Amazon'/>
          <img src={Dribbble} alt='Amazon'/>
          <img src={Hub} alt='Amazon'/>
          <img src={Notion} alt='Amazon'/>
          <img src={Netflix} alt='Amazon'/>
          <img src={Zoom} alt='Amazon'/>
          <div className='Hero2sub'>  
              <h1>Services</h1>
              <p>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
          </div>
          
        </div>
        <div className='Hero3'>
          {data.map((item)=>(
            <div className='Hero3sub'>
              <div className='Hero3sub1'>
                <h1>{item.Heading}</h1>
                <p>{item.para}</p>
              </div>
              <img src={item.image} alt=''/>
            </div>
          ))}
          </div>
      </div>
      <Accordion/>
      <Footer/>
     
    </div>
  )
}

export default App
