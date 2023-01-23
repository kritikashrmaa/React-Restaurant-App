import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import ComonSection from '../components/UI/common-section/ComonSection'

import '../styles/contact.css';
const Contact = () => {
  return <Helmet title='Contact'>
         <ComonSection title='Contact'/>
         <section className="contact section-padding" id="contact">

      
        <div className="section-title section-title--left">
            <h1 className="section-title_name bell-fonts">Contact</h1>
            <div className="section-title_underline"></div>

        </div>
       
        <div className="contact-container">
           <div className="map mt-5">
             <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27387.67871458567!2d77.08122383887111!3d30.901768421009695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f86b5eef4ee27%3A0xa5e81a26852325ef!2sSolan%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1674384898020!5m2!1sen!2sin"
              width="700" height="500"  allowfullscreen style={{border:"0",borderRadius:"9px"}}></iframe>
              
           </div>
            <div className="contact-info">
              
                <div className="contact-item">
                    <div className="contact-item_icon">
                        <i className="fas fa-map-pin">

                        </i>
                    </div>
                    <h3 className="contact-item_title">Address</h3>
                    <p className="contact-item_text">Near Mohan Park,Solan,H.P</p>
                </div>

                
                 <div className="contact-item">
                    <div className="contact-item_icon">
                        <i className="fas fa-map-pin">

                        </i>
                    </div>
                    <h3 className="contact-item_title">Support</h3>
                    <p className="contact-item_text"><span>
                        <i className="fas fa-phone"></i>
                    </span>
                0176354785</p>
                    <p className="contact-item_text">
                      <span>
                        <i className="fas fa-envelope">
                               <span className='mail'>Hungry@gmail.com</span>
                        </i>
                     </span>
                   </p>
                </div>

               
                 <div className="contact-item">
                    <div className="contact-item_icon">
                        <i className="fas fa-map-pin">

                        </i>
                    </div>
                    <h3 className="contact-item_title">Timings</h3>
                    <p className="contact-item_text">Sunday-Thursday 10:00am-11:00pm</p>
                    <p className="contact-item_text">Friday-Saturday Closed</p>

                </div>
            </div>
        </div>
    </section>

        
    </Helmet>
  
}

export default Contact
