import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Admin.module.css';

export default function AdminPage() {
  const [queueData, setQueueData] = useState([]);

  useEffect(() => {
    const fetchQueueData = async () => {
      const response = await fetch('/api/queue');
      const data = await response.json();
      setQueueData(data);
    };

    fetchQueueData();
    const intervalId = setInterval(fetchQueueData, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handleAction = async (id, action) => {
    await fetch(`/api/queue/${id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action }),
    });

    setQueueData(queueData.filter(item => item.id !== id));
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Admin Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Admin Dashboard</h1>
        
        <div className={styles.queueContainer}>
          <h2 className={styles.subtitle}>Current Queue</h2>
          {queueData.length === 0 ? (
            <p className={styles.emptyQueue}>No customers in queue</p>
          ) : (
            queueData.map((item, index) => (
              <div key={item.id} className={styles.queueItem}>
                <div className={styles.queueInfo}>
                  <span className={styles.queueNumber}>{index + 1}</span>
                  <span className={styles.queueName}>{item.name}</span>
                  <span className={styles.queueTime}>
                    {new Date(item.timestamp).toLocaleTimeString()}
                  </span>
                </div>
                <div className={styles.actionButtons}>
                  <button
                    className={`${styles.button} ${styles.callButton}`}
                    onClick={() => handleAction(item.id, 'call')}
                  >
                    Call
                  </button>
                  <button
                    className={`${styles.button} ${styles.noShowButton}`}
                    onClick={() => handleAction(item.id, 'noShow')}
                  >
                    No Show
                  </button>
                  <button
                    className={`${styles.button} ${styles.doneButton}`}
                    onClick={() => handleAction(item.id, 'done')}
                  >
                    Done
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}