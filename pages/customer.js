// pages/index.js
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Customer.module.css';
import axios from 'axios';


export default function CustomerPage() {
  const [queueData, setQueueData] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [currentlyServing, setCurrentlyServing] = useState('000');

  useEffect(() => {
    fetchQueue();
    // const interval = setInterval(fetchQueue, 5000); // Fetch queue every 5 seconds
    // return () => clearInterval(interval);
  }, []);

  const fetchQueue = async () => {
    try {
      const response = await axios.get('http://localhost:4000/customers').then((customers)=>{
      if (customers.status) {
        setQueueData(customers.data.posts);
        console.log("data from backend:: ", customers.data.posts);
        return customers.json
      }
      // log error hereresponse
    });
    
    
      // setCurrentlyServing(response.data.posts[0]?.number || '000');
    } catch (error) {
      console.error('Error fetching queue:', error);
    }
  };

  const addToQueue = async () => {
    if (name && isValidPhoneNumber(phoneNumber)) {
      const newCustomer = {
        name,
        number: '',
        position: 0,
      };
  
      try {
        const response = await axios.post('http://localhost:4000/customers', newCustomer);
        const savedCustomer = response.data.customer;
  
        setShowPopup(false);
        setName('');
        setPhoneNumber('');
        fetchQueue();
      } catch (error) {
        console.error('Error adding to queue:', error);
        alert(`Error adding to queue: ${error.response.data.error}`);
      }
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
          <span>FLASHQ</span>
          <span>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
        <div className={styles.currentQueueTitle}>CURRENT QUEUE</div>
        <div className={styles.content}>
          <div className={styles.queueList}>
            <div className={styles.header}>
              <span>Number</span>
              <span>Name</span>
              <span>Time</span>
            </div>
            {queueData.map((item) => (
              <div key={item.ID} className={styles.queueItem}>
                <span className={styles.tokenNumber}>{item.Position}</span>
                <span className={styles.tokenInfo}>{item.Name}</span>
                <span className={styles.tokenTime}>{item.CreatedAt}</span>
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
              type="text"
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