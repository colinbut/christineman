import React from 'react'
import '../css/index.css';
import Footer from './Footer'
import ContactForm from './ContactForm'
import data from '../config/static.json'

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
            <p><a href={data.contact.socialmedia.linkedin}>LinkedIn</a></p>
        </div>
    )
}