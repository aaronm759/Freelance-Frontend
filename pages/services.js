import Head from 'next/head'
import styles from '../styles/service.module.css'
import React, { Component } from 'react'
import Cloud3 from '../components/cloud3'

class prices extends Component {

    render() {
        return (
            <>
                <Head>
                    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
                </Head>
                <div className={styles.background}>
                    <Cloud3 />
                    <div className={styles.servbox}>
                        <div className={styles.price}>
                            <h2>750</h2>
                        </div>
                        <div className={styles.detail}>
                            <p className={styles.plan}>Lite Plan</p>
                            <p className={styles.text}>1 Bot</p>
                            <p className={styles.text}>1 Landing Page</p>
                            <p className={styles.text}>Basic AI Bot</p>

                        </div>
                    </div>
                    <div className={styles.servbox}>
                        <div className={styles.price}>
                            <h2>1500</h2>
                        </div>
                        <div className={styles.detail}>
                            <p className={styles.plan}>Business Plan</p>
                            <p className={styles.text}>2 Bots</p>
                            <p className={styles.text}>2 Landing Page</p>
                            <p className={styles.text}>Advanced AI Bot</p>

                        </div>
                    </div>
                    <div className={styles.servbox}>
                        <div className={styles.price}>
                            <h2>2500</h2>
                        </div>
                        <div className={styles.detail}>
                            <p className={styles.plan}>Enterprise Plan</p>
                            <p className={styles.text}>3 Bots</p>
                            <p className={styles.text}>3 Landing Page</p>
                            <p className={styles.text}>Advanced AI Bot</p>

                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default prices;