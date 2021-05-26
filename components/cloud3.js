import styles from '../styles/cloud.module.css'
import React, { Component } from 'react'
import Head from 'next/head'

class cloud3 extends Component {

    render() {
        return (
            <>
                <Head>
                    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
                </Head>
                <div className={styles.background}>

                    <div className={styles.cloud3} id='cloud3back' ></div>
                    <div className={styles.cloud3} id='cloud3mid' ></div>
                    <svg width='0' height='0'>
                        <filter id='filter'>
                            <feTurbulence type='fractalNoise' baseFrequency='.015' numOctaves='6' result='turb' />
                            <feDisplacementMap in2='turb' in='SourceGraphic' xChannelSelector='R'
                                yChannelSelector='G' scale='150' />
                        </filter>
                        <filter id='filter-mid'>
                            <feTurbulence type='fractalNoise' baseFrequency='.015' numOctaves='6' result='turb' />
                            <feDisplacementMap in2='turb' in='SourceGraphic' xChannelSelector='R'
                                yChannelSelector='G' scale='150' />
                        </filter>
                    </svg>
                </div>
            </>
        );
    }
}

export default cloud3;