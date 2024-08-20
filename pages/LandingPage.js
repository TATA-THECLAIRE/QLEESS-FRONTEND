import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/LandingPage.module.css';
import Footer from '../pages/Footer';


const LandingPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <div className={styles.topBarLeft}>
          <Link href="#">FAQs</Link>
          <Link href="#">Help</Link>
          <Link href="#">Support</Link>
        </div>
        <div className={styles.topBarRight}>
          <Link href="#"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></Link>
          <Link href="#"><FontAwesomeIcon icon={['fab', 'twitter']} /></Link>
          <Link href="#"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></Link>
          <Link href="#"><FontAwesomeIcon icon={['fab', 'instagram']} /></Link>
              <Link href="#"><FontAwesomeIcon icon={['fab', 'youtube']} /></Link>
         
        </div>
      </div>
      <nav className={styles.navbar}>
        <div className={styles.logo}>FLASG<span>Q</span></div>
        <div className={styles.navLinks}>
          <Link href="/">Home</Link>
          <Link href="/components/cutomer">join queue</Link>
          <Link href="#">view queue</Link>
     
          <Link href="#">Contact</Link>
        </div>
      </nav>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h2>NO TIME WASTAGE FOR TIME IS MONEY</h2>
          <h1>Best queueing services</h1>
          <Link href="#" className={styles.ctaButton}>Learn More</Link>
        </div>
        <div className={styles.sliderControls}>
          <button>&lt;</button>
          <button>&gt;</button>
        </div>
      </div>
      
      <section className={styles.services}>
        <h3>OUR SERVICES</h3>
        <h2>What We Offer</h2>
        <div className={styles.serviceGrid}>
          <div className={styles.serviceItem}>
            <div className={styles.serviceIcon}>
              <FontAwesomeIcon icon="sun" />
            </div>
            <h4>Ability to join queue</h4>
          </div>
          <div className={styles.serviceItem}>
            <div className={styles.serviceIcon}>
              <FontAwesomeIcon icon="tshirt" />
            </div>
            <h4>View current queue</h4>
          </div>
          <div className={styles.serviceItem}>
            <div className={styles.serviceIcon}>
              <FontAwesomeIcon icon="water" />
            </div>
            <h4>notifications</h4>
          </div>
          <div className={styles.serviceItem}>
            <div className={styles.serviceIcon}>
              <FontAwesomeIcon icon="user-tie" />
            </div>
            <h4>customer support</h4>
          </div>
        </div>
        </section>
            <Footer />
    </div>
  );
};

export default LandingPage;