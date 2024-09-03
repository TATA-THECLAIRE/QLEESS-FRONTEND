import React, { useState, useEffect } from 'react';
import styles from './QueueManagement.module.css';
import axios from 'axios';

const QueueManagement = () => {
  const [tokenNumber, setTokenNumber] = useState(0);
  const [servingTime, setServingTime] = useState(0);
  const [totalServedTokens, setTotalServedTokens] = useState(0);
  const [currentlyServing, setCurrentlyServing] = useState({ Name: '', Position: 0 });
  const [queueList, setQueueList] = useState([]);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    fetchQueue();
    const interval = setInterval(fetchQueue, 5000); // Fetch queue every 5 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let timer;
    if (isTimerRunning) {
      timer = setInterval(() => {
        setServingTime(prevTime => prevTime + 1); 
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isTimerRunning]);

  const fetchQueue = async () => {
    try {
      const response = await axios.get('http://localhost:4000/customers');
      if (response.status === 200) {
        const customers = response.data.posts;
        setQueueList(customers);
        if (customers.length > 0) {
          setCurrentlyServing(customers[0]);
          setTokenNumber(customers[0].Position);
        }
        setTotalServedTokens(customers.length);
      }
    } catch (error) {
      console.error('Error fetching queue:', error);
    }
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  const handleNext = async () => {
    if (currentlyServing && currentlyServing.Position) {
      try {
        const position = currentlyServing.Position; // Get the position of the currently serving customer
  
        // Call API to delete the currently serving customer using their position
        await axios.delete(`http://localhost:4000/customers/delete/${position}`);
        
        // Update the queue list by removing the currently serving customer
        const updatedList = queueList.filter(person => person.Position !== position);
        setQueueList(updatedList);
  
        if (updatedList.length > 0) {
          // Set the next person in the queue (if any)
          const nextPerson = updatedList[0];
          setCurrentlyServing(nextPerson);
          setTokenNumber(nextPerson.Position);
        } else {
          // Reset state if no one is left
          setCurrentlyServing({ Name: '', Position: 0 });
          setTokenNumber(0);
        }
  
        // Update served tokens and reset serving time
        setTotalServedTokens(prev => prev + 1);
        setServingTime(0);
      } catch (error) {
        console.error('Error serving next customer:', error);
      }
    } else {
      console.warn('No currently serving customer found or Position is undefined');
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
          <span>{currentlyServing.Name}</span>
          <span>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.leftPanel}>
          <h2>Current Serving</h2>
          <div className={styles.tokenNumber}>
            <h3>Token Number</h3>
            <div className={styles.tokenBox}>00{tokenNumber}</div>
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
            {queueList.slice(1).map((visitor, index) => (
              <li key={index} className={styles.visitorItem}>
                <div className={styles.visitorInfo}>
                  <span className={styles.visitorName}>{visitor.Name}</span>
                  <span className={styles.visitorNumber}>00{visitor.Position}</span>
                  <span className={styles.visitorStatus}>waiting</span>
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