import Head from 'next/head'
import styles from '../styles/navigation.module.css'
import Image from 'next/image'
import React, { Component } from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'






let navOpen = {
    open: {
        x: '-50vw'
    },
    close: {
        x: '50vw'
    }

};



class nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav: ''
        };

        //this.openNav = this.openNav.bind(this);

    }



    openNav() {
        console.log('click')
        this.setState({
            nav: '7'
        })

    }

    closeNav() {
        this.setState({
            nav: '3'
        })
    }




    render() {
        return (<>
            <Head>
                <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
            </Head>
            <div className={styles.menubutton} onClick={() => this.openNav()}>
                <div className={styles.hamburger}></div>
                <div className={styles.hamburger}></div>
                <div className={styles.hamburger}></div>
            </div>

            <motion.nav className={styles.navbox}
                variants={navOpen}
                animate={(this.state.nav > 5) ? "open" : "close"}>
                <div className={styles.navclose} onClick={() => this.closeNav()}><p>
                    +</p></div>
                <div className={styles.logobox}>
                    <Image src='/images/lightbulblogo.png'
                        alt='lightbulb'
                        width='50'
                        height='120' />
                    <h2 className={styles.brandname}>Iunfluential</h2>
                    <h2 className={styles.brandname}>Design</h2>

                </div>
                <div className={styles.buttonbox}>
                    <div className={styles.navbutton}>
                        <Link href="/">
                            <a className={styles.buttonlink}> <h2 className={styles.buttontext}>Home</h2></a>
                        </Link>
                    </div>
                    <div className={styles.navbutton}>
                        <Link href="/about">
                            <a className={styles.buttonlink}>
                                <h2 className={styles.buttontext}>About</h2>
                            </a>
                        </Link>
                    </div>
                    <div className={styles.navbutton}>
                        <Link href="/services">
                            <a className={styles.buttonlink}>
                                <h2 className={styles.buttontext}>Services</h2>
                            </a>
                        </Link>
                    </div>
                    <div className={styles.navbutton}>
                        <Link href="/contact">
                            <a className={styles.buttonlink}>
                                <h2 className={styles.buttontext}>Contact</h2>
                            </a>
                        </Link>
                    </div>
                </div>
            </motion.nav>


        </>);
    }
}

export default nav;