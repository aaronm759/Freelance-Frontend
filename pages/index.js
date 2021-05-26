import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import React, { Component } from 'react'
import Cloud1 from '../components/cloud1'
import Cloud2 from '../components/cloud2'


class Home extends Component {

  render() {
    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
        </Head>
        <div className={styles.background}>
          <h1 className={styles.cname}>
            Influential Design
        </h1>
          <h2 className={styles.title}>
            Professional  Software Development Services
        </h2>
          <button className={styles.cta}>
            <Link href="/contact">
              <a className={styles.buttonlink}>Free Consultation</a>
            </Link>
          </button>
          <Cloud1 />
          <Cloud2 />
          <div>

          </div>
        </div>
      </>
    );
  }
}

export default Home;