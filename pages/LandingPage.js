'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from '../styles/LandingPage.module.css';
import Footer from '../pages/Footer';


const LandingPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [passkey, setPasskey] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleAdminClick = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const handlePasskeySubmit = (e) => {
    e.preventDefault();
    if (passkey === 'OPS149') {
      setShowPopup(false);
      setPasskey('');
      setError('');
      router.push('/components/cusdash');
    } else {
      setError('Invalid passkey. Please try again.');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <div className={styles.topBarLeft}>
          <Link href="/components/faqs">FAQs</Link>
          <Link href="#">Help</Link>
        </div>
      
      </div>
      <nav className={styles.navbar}>
        <div className={styles.logo}>FLASH<span>Q</span></div>
        <div className={styles.navLinks}>
          <Link href="/">Home</Link>
          <Link href="/components/cutomer">join queue</Link>
          <Link href="/components/admin">view queue</Link>
          <a href="#" onClick={handleAdminClick}>Admin</a>
        </div>
      </nav>

      {showPopup && (
        <div className={styles.adminPopupOverlay}>
          <div className={styles.adminPopup}>
            <button className={styles.closeButton} onClick={() => setShowPopup(false)}>&times;</button>
            <h2>Admin Access</h2>
            <form onSubmit={handlePasskeySubmit}>
              <div className={styles.inputGroup}>
                <label htmlFor="passkey">Passkey:</label>
                <input
                  type="password"
                  id="passkey"
                  value={passkey}
                  onChange={(e) => setPasskey(e.target.value)}
                  placeholder="Enter admin passkey"
                  required
                />
              </div>
              {error && <p className={styles.errorMessage}>{error}</p>}
              <div className={styles.buttonGroup}>
                <button type="submit" className={styles.submitButton}>Submit</button>
                <button type="button" className={styles.cancelButton} onClick={() => setShowPopup(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h2>NO TIME WASTAGE FOR TIME IS MONEY</h2>
          <h2>FLASHQ, GATEWAY TO QLESS SERVICES</h2>
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
          <Link href="/components/customer">
            <div className={styles.serviceItem}>
              <div className={styles.serviceIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.95 5.636l1.414 1.414-5.657 5.657-2.828-2.829 1.414-1.414 1.414 1.414 4.243-4.242zm-4.95 14.364c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
                </svg>
              </div>
              <h4>Ability to join queue</h4>
            </div>
          </Link>
          <Link href="/components/admin">
            <div className={styles.serviceItem}>
              <div className={styles.serviceIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M24 10.935v2.131l-8 3.947v-2.23l5.64-2.783-5.64-2.79v-2.223l8 3.948zm-16 3.848l-5.64-2.783 5.64-2.79v-2.223l-8 3.948v2.131l8 3.947v-2.23zm7.047-10.783h-2.078l-4.011 16h2.073l4.016-16z"/>
                </svg>
              </div>
              <h4>View current queue</h4>
            </div>
          </Link>
          <Link href="#">
            <div className={styles.serviceItem}>
              <div className={styles.serviceIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M15.137 3.945c-.644-.374-1.042-1.07-1.041-1.82v-.003c.001-1.172-.938-2.122-2.096-2.122s-2.097.95-2.097 2.122v.003c.001.751-.396 1.446-1.041 1.82-4.667 2.712-1.985 11.715-6.862 13.306v1.749h20v-1.749c-4.877-1.591-2.195-10.594-6.863-13.306zm-3.137-2.945c.552 0 1 .449 1 1 0 .552-.448 1-1 1s-1-.448-1-1c0-.551.448-1 1-1zm3 20c0 1.598-1.392 3-2.971 3s-3.029-1.402-3.029-3h6z"/>
                </svg>
              </div>
              <h4>notifications</h4>
            </div>
          </Link>
          <Link href="/components/faqs">
            <div className={styles.serviceItem}>
              <div className={styles.serviceIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z"/>
                </svg>
              </div>
              <h4>customer support</h4>
            </div>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;