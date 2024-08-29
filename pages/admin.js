import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Admin.module.css';
import axios from 'axios';

export default function AdminPage() {
  const [queueData, setQueueData] = useState([]);
  const [currentlyServing, setCurrentlyServing] = useState('000');
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    fetchQueue();
    const queueTimer = setInterval(fetchQueue, 5000);
    const dateTimer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(queueTimer);
      clearInterval(dateTimer);
    };
  }, []);

  const fetchQueue = async () => {
    try {
      const response = await axios.get('http://localhost:4000/customers');
      if (response.status === 200) {
        setQueueData(response.data.posts);
        console.log("data from backend:: ", response.data.posts);
      }
    } catch (error) {
      console.error('Error fetching queue:', error);
    }
  };

  const formatDateTime = (date) => {
    const options = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    };
    return date.toLocaleString('en-GB', options).replace(',', ' -');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>FlashQ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.title}>Current Queue</h1>
          <div className={styles.dateTime} suppressHydrationWarning>
            {formatDateTime(currentDateTime)}
          </div>
        </div>
        
        <div className={styles.content}>
          <div className={styles.queueSection}>
            <h2 className={styles.subtitle}> Queue</h2>
            <div className={styles.queueList}>
              <div className={styles.queueHeader}>
                <span>Position</span>
                <span>Name</span>
                <span>Time</span>
              </div>
              {queueData.length === 0 ? (
                <p className={styles.emptyQueue}>No customers in queue</p>
              ) : (
                queueData.map((item) => (
                  <div key={item.ID} className={styles.queueItem}>
                    <span className={styles.position}>{item.Position}</span>
                    <span className={styles.name}>{item.Name}</span>
                    <span className={styles.time} suppressHydrationWarning>
                      {new Date(item.CreatedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
          <div className={styles.statsSection}>
            <div className={styles.currentlyServing}>
              <h3>Now Serving</h3>
              <div className={styles.currentNumber}>{currentlyServing}</div>
            </div>
            <div className={styles.queueStats}>
              <div className={styles.statItem}>
                <h3>In Queue</h3>
                <div className={styles.statValue}>{queueData.length}</div>
              </div>
              <div className={styles.statItem}>
                <h3>Avg. Wait Time</h3>
                <div className={styles.statValue}>12 min</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}