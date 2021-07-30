import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/service.module.css'
import React, { Component } from 'react'


class prices extends Component {

    render() {
        return (
            <>
                <Head>
                    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
                </Head>
                <div className={styles.background}>
                
                
                    <div className={styles.servbox}>
                        <div className={styles.imagecontainer}>
                    <Image src="/images/developercartoon.png" alt="developer" className={styles.developerpic}
                        width="700" height= "500" />
                        </div>
                        <div className={styles.servboxinner}>
                                <h2 className={styles.price}>Web Development</h2>
                          <div className={styles.detail}>
                            <p>Landing Page: Single page website used to build email lists</p>
                            <p>Full Website: A custom multipage website that can be used for business purposes</p>
                            <p>E-commerce Website: A website built specifically to sell products and services</p>
                          </div>
                           <Link href="/contact">
                            <button className={styles.buy}>Contact</button>
                               </Link>
                        </div>
                        
                        
                    
                    </div>
                    <div className={styles.servbox}>
                    <div className={styles.imagecontainer2}>
                    <Image src="/images/robotcartoon.png" alt="developer" className={styles.developerpic}
                        width="500" height= "700" />
                        </div>
                    <div className={styles.servboxinner}>
                        <h2 className={styles.price}>AI Chatbot</h2>
                       
                        <div className={styles.detail}>
                            <p className={styles.plan}>Coming Soon</p>
                    </div>
                        


                        </div>
                    </div>

                </div>
            </>
        );
    }
}

export default prices;