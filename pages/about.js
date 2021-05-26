import Head from 'next/head'
import styles from '../styles/about.module.css'
import React, { Component } from 'react'
import Cloud4 from '../components/cloud4'

class statement extends Component {

    render() {
        return (
            <>
                <Head>
                    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
                </Head>
                <div className={styles.background}>
                    <Cloud4 />
                    <div className={styles.aboutbox}>
                        <h1 className={styles.title}>Our Mission</h1>
                        <p className={styles.text}> To build cutting edge software solutions that solve modern day problems.
                        We work with businesses and people of all shapes and sizes, no problem is to big or small.
                        We hope to create a future that is more equitable and prosperous for everyone.
                        </p>
                    </div>
                </div>
            </>
        );
    }
}

export default statement;