import React from 'react'
import '../css/index.css';
import Footer from './Footer'
import ContactForm from './ContactForm'

export default function Contact() {
    return (
        <div>
            <ContactForm/>
            <Follow />
            <Footer/>
        </div>
    )
}

const Follow = () => {
    return (
        <div className="follow">
            <h1>Follow</h1>
            <p><a href="http://www.linkedin.com/christineman">LinkedIn</a></p>
        </div>
    )
}