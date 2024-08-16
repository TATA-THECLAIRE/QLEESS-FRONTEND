// pages/index.js
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Customer.module.css';

export default function CustomerPage() {
  const [queueData, setQueueData] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [currentlyServing, setCurrentlyServing] = useState('000');

  useEffect(() => {
    fetchQueue();
    const interval = setInterval(fetchQueue, 5000); // Fetch queue every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const fetchQueue = async () => {
    const response = await fetch('/api/queue');
    const data = await response.json();
    setQueueData(data);
    setCurrentlyServing(data[0]?.number || '000');
  };

  const addToQueue = async () => {
    if (name && isValidPhoneNumber(phoneNumber)) {
      const newNumber = String(queueData.length + 1).padStart(3, '0');
      const newTime = new Date(Date.now() + 30 * 60000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const newCustomer = { number: newNumber, name, phoneNumber, time: newTime };

      await fetch('/api/queue', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCustomer),
      });

      setShowPopup(false);
      setName('');
      setPhoneNumber('');
      fetchQueue();
    } else {
      alert('Please enter a valid name and phone number.');
    }
  };

  const isValidPhoneNumber = (number) => {
    // Cameroon phone number format: +237 6XXXXXXXX or 6XXXXXXXX
    const regex = /^(\+237|0)?6[5-9]\d{7}$/;
    return regex.test(number);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Queue System</title>
        <meta name="description" content="Queue system customer page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.statusBar}>
          <span>LTE</span>
          <span>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
        <div className={styles.currentQueueTitle}>CURRENT QUEUE</div>
        <div className={styles.content}>
          <div className={styles.queueList}>
            <div className={styles.header}>
              <span>Upcoming</span>
              <span>No show</span>
              <span>Done</span>
            </div>
            {queueData.map((item) => (
              <div key={item.number} className={styles.queueItem}>
                <span className={styles.tokenNumber}>{item.number}</span>
                <span className={styles.tokenInfo}>{item.name}</span>
                <span className={styles.tokenTime}>{item.time}</span>
              </div>
            ))}
          </div>
          <div className={styles.currentToken}>
            <div className={styles.timer}>CURRENTLY SERVING</div>
            <div className={styles.currentNumber}>{currentlyServing}</div>
            <button className={styles.addToQueueButton} onClick={() => setShowPopup(true)}>Add to Queue</button>
          </div>
        </div>
      </main>

      {showPopup && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <h2>Join the Queue</h2>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <button onClick={addToQueue}>Add</button>
            <button onClick={() => setShowPopup(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}