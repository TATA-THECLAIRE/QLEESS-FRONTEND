// pages/admin.js
import React, { useState, useEffect } from 'react';
import Head from 'next/head';

import styles from '../styles/Admin.module.css';

export default function AdminPage() {
  const [queueData, setQueueData] = useState([]);
  const [currentCustomer, setCurrentCustomer] = useState(null);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    fetchQueue();
    const interval = setInterval(fetchQueue, 5000); // Fetch queue every 5 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let interval;
    if (currentCustomer) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [currentCustomer]);

  const fetchQueue = async () => {
    const response = await fetch('/api/queue');
    const data = await response.json();
    setQueueData(data);
  };

  const updateQueue = async (newQueue) => {
    await fetch('/api/queue', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newQueue),
    });
    fetchQueue();
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const callNextCustomer = () => {
    if (queueData.length > 0) {
      const nextCustomer = queueData[0];
      setCurrentCustomer(nextCustomer);
      updateQueue(queueData.slice(1));
      setTimer(0);
    }
  };

  const markAsNoShow = () => {
    if (currentCustomer) {
      setCurrentCustomer(null);
      setTimer(0);
    }
  };

  const finishCurrentCustomer = () => {
    if (currentCustomer) {
      setCurrentCustomer(null);
      setTimer(0);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Queue System Admin</title>
        <meta name="description" content="Queue system admin page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Queue Management System</h1>
        
        <div className={styles.currentCustomer}>
          <h2>Current Customer</h2>
          {currentCustomer ? (
            <div>
              <p>Number: {currentCustomer.number}</p>
              <p>Name: {currentCustomer.name}</p>
              <p>Phone: {currentCustomer.phoneNumber}</p>
              <p>Time: {formatTime(timer)}</p>
            </div>
          ) : (
            <p>No customer currently being served</p>
          )}
        </div>

        <div className={styles.actions}>
          <button onClick={callNextCustomer}>Call Next</button>
          <button onClick={markAsNoShow}>No Show</button>
          <button onClick={finishCurrentCustomer}>Finish</button>
        </div>

        <div className={styles.queueList}>
          <h2>Queue</h2>
          <table>
            <thead>
              <tr>
                <th>Number</th>
                <th>Name</th>
                <th>Time</th>
                <th>Phone Number</th>
              </tr>
            </thead>
            <tbody>
              {queueData.map((customer) => (
                <tr key={customer.number}>
                  <td>{customer.number}</td>
                  <td>{customer.name}</td>
                  <td>{customer.time}</td>
                  <td>{customer.phoneNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}