import React, { useState, useEffect } from 'react';
import styles from '../styles/Admin.module.css';

export default function AdminPage() {
  const [servingTime, setServingTime] = useState('00:45:13');

  useEffect(() => {
    const timer = setInterval(() => {
      // Update serving time logic here
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src="/venus-logo.png" alt="VENUS" />
        </div>
        <div className={styles.userInfo}>
          <div className={styles.userAvatar}></div>
          <span>Paul Smith</span>
          <span>Tue, 07 Sep 2023</span>
          <span>15:08 PM</span>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.leftPanel}>
          <h2 className={styles.currentServing}>Current Serving</h2>
          <h1 className={styles.tokenNumberTitle}>Token Number</h1>
          <div className={styles.tokenBox}>204</div>
          <div className={styles.servingTime}>
            <h3>Serving Time</h3>
            <div className={styles.timeBox}>{servingTime}</div>
          </div>
          <div className={styles.stats}>
            <div>
              <span>Total Served Tokens</span>
              <span className={styles.orange}>10</span>
            </div>
            <div>
              <span>Performance Status</span>
              <span className={styles.orange}>Excellent</span>
            </div>
          </div>
        </div>
        <div className={styles.middlePanel}>
          {['Next', 'Call', 'Recall', 'Transfer', 'Start', 'Close'].map((btn) => (
            <button key={btn} className={styles.button}>{btn}</button>
          ))}
        </div>
        <div className={styles.rightPanel}>
          <div className={styles.departmentHeader}>
            <h3>Department</h3>
            <div className={styles.counterStatus}>4 counters are serving</div>
          </div>
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className={styles.departmentRow}>
              <span>Zhou Zong</span>
              <div className={styles.statusIndicator}></div>
            </div>
          ))}
          <div className={styles.colorLegend}>
            <span className={styles.legendItem}><div className={styles.green}></div>Serve1</span>
            <span className={styles.legendItem}><div className={styles.orange}></div>Serve2</span>
            <span className={styles.legendItem}><div className={styles.blue}></div>Serve3</span>
            <span className={styles.legendItem}><div className={styles.red}></div>Serve4</span>
          </div>
          <button className={styles.addVisitor}>Add Visitor</button>
        </div>
      </main>
    </div>
  );
}