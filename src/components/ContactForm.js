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
            message: ''
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
        console.log('Submitted form: ' + this.state)
    }

    render() {

        const { firstName, lastName, email, message } = this.state

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
                            <input type="text" name="firstName" id="firstname" value={firstName} onChange={this.handleChange}/> 
                        </Grid>
                        <Grid item xs={6}>
                            <input type="text" name="lastName" id="lastname" value={lastName} onChange={this.handleChange}/>
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
                            <input type="email" name="email" id="email" value={email} onChange={this.handleChange}/>
                        </Grid>
                        <Grid item xs={12}>
                            <label for="message">Your Message*</label>
                        </Grid>
                        <Grid item xs={12}>
                            <textarea rows="4" cols="50">{message}</textarea>
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