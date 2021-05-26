import Head from 'next/head'
import styles from '../styles/contact.module.css'
import React, { Component } from 'react'
import Cloud3 from '../components/cloud3'
import axios from 'axios'

class form extends Component {
    constructor(props) {
        super(props);
        this.state = {

            name: '',
            email: '',
            phone: '',
            message: ''

        };


        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleChange4 = this.handleChange4.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange1(event) {

        this.setState({ name: event.target.value });
    }
    handleChange2(event) {

        this.setState({ email: event.target.value });
    }
    handleChange3(event) {

        this.setState({ phone: event.target.value });
    }
    handleChange4(event) {

        this.setState({ message: event.target.value });
    }



    handleSubmit(event) {
        event.preventDefault();

        let client = {
            "name": this.state.name,
            "email": this.state.email,
            "phone": this.state.phone,
            "message": this.state.message
        }



        axios.post('/api/formsubmit', client).then(response => {
            console.log('data sent');
            console.log(response)
        }).catch((err) => {
            console.log(err)
        });


    }

    render() {
        return (
            <>
                <Head>
                    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
                </Head>
                <div className={styles.background}>
                    <Cloud3 />
                    <div className={styles.contactbox}>
                        <h1 className={styles.head}>Contact</h1>
                        <form className={styles.formbox} onSubmit={this.handleSubmit}>
                            <input type="text" name="name" placeholder='Name/Business Name'
                                value={this.state.name} onChange={this.handleChange1} className={styles.inputbox} />

                            <input type="email" name="email" placeholder='Enter your email'
                                value={this.state.email} onChange={this.handleChange2} className={styles.inputbox} />

                            <input type="tel" name="phone" placeholder='Phone number'
                                value={this.state.phone} onChange={this.handleChange3} className={styles.inputbox} />

                            <textarea name="message" rows="10" cols="30" placeholder='leave a message'
                                value={this.state.message} onChange={this.handleChange4} className={styles.inputbox}>

                            </textarea>

                            <input type="submit" />
                        </form>
                    </div>

                </div>

            </>
        );
    }
}

export default form;