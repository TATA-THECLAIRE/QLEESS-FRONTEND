'use client';
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2 className="logo">FLASH<span>Q</span></h2>
          <p>he best queue management system</p>
          <div className="social-icons">
            <Link href="#" className="icon-link">
              <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            </Link>
            <Link href="#" className="icon-link">
              <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </Link>
            <Link href="#" className="icon-link">
              <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </Link>
            <Link href="#" className="icon-link">
              <svg viewBox="0 0 24 24" width="18" height="18"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path fill="currentColor" d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </Link>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Get In Touch</h3>
          <p>for more info get in touch</p>
          <p><svg viewBox="0 0 24 24" width="16" height="16"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> MOLYKO, BUEA, CAMEROON</p>
          <p><svg viewBox="0 0 24 24" width="16" height="16"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> +123 673456321</p>
          <p><svg viewBox="0 0 24 24" width="16" height="16"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> flashq@gmail.com</p>
        </div>
        
        <div className="footer-section">
          <h3>SEND A MESSAGE</h3>
          <form>
            <input type="text" placeholder="Your Name" className="input-field" />
            <input type="email" placeholder="Your Email" className="input-field" />
            <button type="submit" className="submit-button">Submit Now</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© FLASHQ. All Rights Reserved. Designed by TEAM OBS</p>
      </div>
      <style jsx>{`
        .footer {
          background-color: #0f4c81;
          color: white;
          padding: 60px 0 0;
        }
        .footer-content {
          display: flex;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 15px;
        }
        .footer-section {
          flex: 1;
          margin-right: 30px;
          max-width: 33%;
        }
        .footer-section:last-child {
          margin-right: 0;
        }
        .logo {
          font-size: 28px;
          font-weight: bold;
          margin: 0 0 20px;
        }
        .logo span {
          color: #40e0d0;
        }
        .footer-section p {
          margin-bottom: 20px;
          font-size: 14px;
          line-height: 1.6;
        }
        .social-icons {
          display: flex;
          gap: 10px;
        }
        .icon-link {
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        h3 {
          font-size: 18px;
          margin-bottom: 20px;
        }
        .input-field {
          width: 100%;
          padding: 10px;
          margin-bottom: 10px;
          border: none;
        }
        .submit-button {
          width: 100%;
          padding: 10px;
          background-color: #40e0d0;
          color: white;
          border: none;
          cursor: pointer;
        }
        .footer-bottom {
          background-color: #0a3d6d;
          text-align: center;
          padding: 20px 0;
          margin-top: 40px;
        }
        .footer-bottom p {
          margin: 0;
          font-size: 14px;
        }
      `}</style>
    </footer>
  );
};

export default Footer;