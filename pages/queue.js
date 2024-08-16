import React, { useState, useEffect } from 'react';
import styles from './QueueManagement.module.css';

const QueueManagement = () => {
  const [tokenNumber, setTokenNumber] = useState(204);
  const [servingTime, setServingTime] = useState(0);
  const [totalServedTokens, setTotalServedTokens] = useState(10);
  const [currentlyServing, setCurrentlyServing] = useState({ name: 'Paul Smith', number: 204 });
  const [queueList, setQueueList] = useState([
    { name: 'LIAM NAZ', status: 'waiting', number: 205 },
    { name: 'RIAN BONEFASHIO', status: 'waiting', number: 206 },
    { name: 'ANTAGRASIA SANDOVAL', status: 'waiting', number: 207 },
    { name: 'BLANCA GERERO', status: 'waiting', number: 208 },
    { name: 'LA DONA', status: 'waiting', number: 209 },
    { name: 'LILY CRUZ', status: 'waiting', number: 210 },
    { name: 'DANNY SIM', status: 'waiting', number: 211 },
    { name: 'KIARA SNAZ', status: 'waiting', number: 212 },
    { name: 'DEEP RAJ SING', status: 'waiting', number: 213 },
    { name: 'SINNA SINCLAIRE', status: 'waiting', number: 214 },
  ]);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isTimerRunning) {
      timer = setInterval(() => {
        setServingTime(prevTime => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isTimerRunning]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  const handleNext = () => {
    if (queueList.length > 0) {
      const nextPerson = queueList[0];
      setCurrentlyServing(nextPerson);
      setTokenNumber(nextPerson.number);
      setQueueList(prevList => prevList.slice(1));
      setTotalServedTokens(prev => prev + 1);
      setServingTime(0);
    }
  };

  const handleStart = () => {
    setIsTimerRunning(true);
  };

  const handleClose = () => {
    setIsTimerRunning(false);
    setServingTime(0);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src="/logo.png" alt="Logo" className={styles.logo} />
        <div className={styles.userInfo}>
          <span>{currentlyServing.name}</span>
          <span>17:38 PM</span>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.leftPanel}>
          <h2>Current Serving</h2>
          <div className={styles.tokenNumber}>
            <h3>Token Number</h3>
            <div className={styles.tokenBox}>{tokenNumber}</div>
          </div>
          <div className={styles.servingTime}>
            <h3>Serving Time</h3>
            <div>{formatTime(servingTime)}</div>
          </div>
          <div className={styles.footer}>
            <div>Total Served Tokens: {totalServedTokens}</div>
            <div>Performance Status: <span className={styles.excellent}>Excellent</span></div>
          </div>
        </div>
        <div className={styles.centerPanel}>
          <button className={styles.button} onClick={handleNext}>Next</button>
          <button className={styles.button}>Recall</button>
          <button className={styles.button} onClick={handleStart} disabled={isTimerRunning}>Start</button>
          <button className={styles.button} onClick={handleClose}>Close</button>
        </div>
        <div className={styles.sideNav}>
          <div className={styles.departmentHeader}>QUEUE</div>
          <ul className={styles.queueList}>
            {queueList.map((visitor, index) => (
              <li key={index} className={styles.visitorItem}>
                <div className={styles.visitorInfo}>
                  <span className={styles.visitorName}>{visitor.name}</span>
                  <span className={styles.visitorNumber}>N-{visitor.number}</span>
                  <span className={styles.visitorStatus}>{visitor.status}</span>
                </div>
                <div className={styles.visitorActions}>
                  <button className={styles.actionButton}>...</button>
                </div>
              </li>
            ))}
          </ul>
          <button className={styles.addVisitorButton}>Add Visitor</button>
        </div>
      </div>
    </div>
  );
};

export default QueueManagement;