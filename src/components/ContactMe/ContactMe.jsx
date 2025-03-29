import React from 'react'
import "./ContactMe.css"
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'

const ContactMe = () => {
  return (
    <section className="contact-container">
        <h5>Contact Me</h5>

        <div className="contact-content">
            <div style={{flex: 1}}>
                <ContactInfoCard
                iconUrl="./images/email-icon.png"
                text="vantien999968@gmail.com"
                />
                 <ContactInfoCard
                iconUrl="./images/github-icon.png"
                text="https://github.com/nvantien"
                />
            </div>
            <div style={{flex: 1}}></div>
        </div>
    </section>
  )
}

export default ContactMe