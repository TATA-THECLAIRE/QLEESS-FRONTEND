import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/Footer.module.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(faMapMarkerAlt, faPhoneAlt, faEnvelope);

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h2 className={styles.logo}>DRY<span>ME</span></h2>
          <p>Volup amet magna clita tempor. Tempor sea eos vero ipsum. Lorem lorem sit sed elitr sit no, sed kasd et ipsum dolor duo dolor</p>
          <div className={styles.socialIcons}>
            <Link href="#"><FontAwesomeIcon icon={faTwitter} /></Link>
            <Link href="#"><FontAwesomeIcon icon={faFacebookF} /></Link>
            <Link href="#"><FontAwesomeIcon icon={faLinkedinIn} /></Link>
            <Link href="#"><FontAwesomeIcon icon={faInstagram} /></Link>
          </div>
        </div>
        
        <div className={styles.footerSection}>
          <h3>Get In Touch</h3>
          <p>Dolor clita stet nonumy clita diam vero, et et ipsum diam labore</p>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} /> 123 Street, New York, USA</p>
          <p><FontAwesomeIcon icon={faPhoneAlt} /> +012 345 67890</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> info@example.com</p>
        </div>
        
        <div className={styles.footerSection}>
          <h3>Quick Links</h3>
          <ul>
            <li><Link href="#">Home</Link></li>
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">Services</Link></li>
            <li><Link href="#">Pricing</Link></li>
            <li><Link href="#">Contact Us</Link></li>
          </ul>
        </div>
        
        <div className={styles.footerSection}>
          <h3>Newsletter</h3>
          <form>
            <input type="text" placeholder="Your Name" className={styles.inputField} />
            <input type="email" placeholder="Your Email" className={styles.inputField} />
            <button type="submit" className={styles.submitButton}>Submit Now</button>
          </form>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© Your Site Name. All Rights Reserved. Designed by HTML Codex</p>
      </div>
    </footer>
  );
};

export default Footer;