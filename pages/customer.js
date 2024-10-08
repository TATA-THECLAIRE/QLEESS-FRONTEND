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
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    fetchQueue();
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
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

  const addToQueue = async () => {
    if (name && isValidPhoneNumber(phoneNumber)) {
      const newCustomer = {
        name,
        number: phoneNumber,
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
        alert(`Error adding to queue: ${error.response?.data?.error || 'Unknown error'}`);
      }
    } else {
      alert('Please enter a valid name and phone number.');
    }
  };

  const isValidPhoneNumber = (number) => {
    const regex = /^(\+237|0)?6[5-9]\d{7}$/;
    return regex.test(number);
  };

  // const handleLeave = async () => {
  //   // Ensure there are customers in the queue
  //   if (queueData.length === 0) {
  //     console.warn('No customers in the queue.');
  //     return;
  //   }
  
  //   try {
  //     // Get the last customer's position
  //     const lastCustomer = queueData[queueData.length - 1];
  //     const position = lastCustomer.Position;
  
  //     // Call API to delete the customer at the last position
  //     await axios.delete(`http://localhost:4000/customers/delete/${position}`);
  
  //     // // Update the queue list by removing the last customer
  //     // const updatedList = queueData.slice(0, -1); // Remove the last customer
  //     // setQueueData(updatedList);
  
  //   } catch (error) {
  //     console.error('Error deleting the last customer:', error);
  //   }
  // };

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
        <title>Queue System</title>
        <meta name="description" content="Queue system customer page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.statusBar}>
          <span>FLASHQ</span>
          <span suppressHydrationWarning>{formatDateTime(currentDateTime)}</span>
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
                <span className={styles.tokenTime} suppressHydrationWarning>
                  {new Date(item.CreatedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                </span>
              </div>
            ))}
          </div>
          <div className={styles.currentToken}>
            <div className={styles.timer}>CURRENTLY SERVING</div>
            <div className={styles.currentNumber}>{currentlyServing}</div>
            <button className={styles.addToQueueButton} onClick={() => setShowPopup(true)}>Add to Queue</button>
            <button
              className={styles.removeFromQueueButton}
              onClick={() => { window.confirm("Are you sure you want to leave the queue?")
                // if (window.confirm("Are you sure you want to leave the queue?")) {
                //   handleLeave(); // Call the existing handleNext function
                // }
              }}
            >
              Leave Queue
            </button>
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