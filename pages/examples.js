import Head from 'next/head'
import styles from '../styles/example.module.css'
import React, { Component } from 'react'

class website extends Component {

    render() {
        return (
            <>
                <Head>
                    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
                </Head>
                <div className={styles.background}>
                    <div className={styles.exbox}></div>
                </div>
            </>
        );
    }
}

export default website;