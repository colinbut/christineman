import React, { Component } from 'react'
import '../css/index.css';
import Grid from '@material-ui/core/Grid'
import SubmitButton from './ui/SubmitButton'

class ContactForm extends Component {

    constructor(props) {
        super(props)

        this.initialState = {
            firstName: '',
            lastName: '',
            email: '',
            message: '',
            firstNameFieldEmpty: false,
            lastNameFieldEmpty: false,
            emailFieldEmpty: false,
            messageFieldEmpty: false
        }

        this.state = this.initialState
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    submitForm = () => {
        console.log('Submitted form: ', this.state)
        let { firstName, lastName, email, message, firstNameFieldEmpty, 
            lastNameFieldEmpty, emailFieldEmpty, messageFieldEmpty } = this.state
        
        firstName = firstName.trim()
        lastName = lastName.trim()
        email = email.trim()
        message = message.trim()    

        firstNameFieldEmpty = (firstName === "" || firstName.length === 0)
        lastNameFieldEmpty = (lastName === "" || lastName.length === 0)
        emailFieldEmpty = (email === '' || email.length === 0)
        messageFieldEmpty = (message === '' || message.length === 0)

        if (firstNameFieldEmpty && lastNameFieldEmpty && emailFieldEmpty && messageFieldEmpty) {
            this.setState({
                firstNameFieldEmpty: firstNameFieldEmpty,
                lastNameFieldEmpty: lastNameFieldEmpty,
                emailFieldEmpty: emailFieldEmpty,
                messageFieldEmpty: messageFieldEmpty
            })
        } else {
            // send email
            console.log("Sending email...")
            this.setState(this.initialState)
        }
        
    }

    render() {

        const { firstName, lastName, email, message, firstNameFieldEmpty, 
            lastNameFieldEmpty, emailFieldEmpty, messageFieldEmpty } = this.state

        return (
            <div className="contact-page-container-wrapper">
                <h2>
                    if you have any work inquiry, or you would like to
                    collaborate, please feel free to email me.
                </h2>
                <form>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <label for="name">Name*</label>
                        </Grid>
                        <Grid item xs={6}>
                            <input type="text" className={firstNameFieldEmpty ? "error" : "default"} name="firstName" id="firstname" value={firstName} onChange={this.handleChange}/> 
                        </Grid>
                        <Grid item xs={6}>
                            <input type="text" className={lastNameFieldEmpty ? "error" : "default"} name="lastName" id="lastname" value={lastName} onChange={this.handleChange}/>
                        </Grid>
                        <Grid item xs={6}>
                            <label for="firstname">First Name</label>
                        </Grid>
                        <Grid item xs={6}>
                            <label for="lastname">Last Name</label>
                        </Grid>
                        <Grid item xs={12}>
                            <label for="name">Email*</label>
                        </Grid>
                        <Grid item xs={12}>
                            <input type="email" className={emailFieldEmpty ? "error" : "default"} name="email" id="email" value={email} onChange={this.handleChange}/>
                        </Grid>
                        <Grid item xs={12}>
                            <label for="message">Your Message*</label>
                        </Grid>
                        <Grid item xs={12}>
                            <textarea className={messageFieldEmpty ? "error" : "default"} rows="4" cols="50">{message}</textarea>
                        </Grid>
                        <Grid item xs={3}>
                            <SubmitButton buttonText="Submit" submitForm={this.submitForm} />
                        </Grid>
                    </Grid>
                </form>
            </div>
        )
    }
}

export default ContactForm