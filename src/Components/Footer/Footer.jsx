import React from 'react'
import './Footer.css'
import Navlogo from '../Assests/Navlogo.png'


const Footer = () => {
  return (
    <>


        <div className='mainFooter'>

            <div className='footer'>
                <img src={Navlogo} alt="" />
                    <div className="foot">
                        <p>References</p>
                        <p>Support</p>
                        <p>Donate</p>
                        <p>Subscription</p>
                    </div>
                    <div className="foot">
                        <p>Facebook</p>
                        <p>X (Twitter)</p>
                        <p>Instagram</p>
                        <p>Pinterest</p>
                    </div>
                    <div className="foot">
                        <p>Terms</p>
                        <p>Report</p>
                        <p>About</p>
                        <p>Contact</p>
                    </div>
            </div>
        </div>
 
    </>
  )
}

export default Footer
