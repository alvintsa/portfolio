// src/components/Test.js
import React, { useState, useEffect } from 'react';
import axios from '../config/axios';  // Import the custom Axios instance

const Test = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get('/api/test')
            .then(response => {
                console.log('Response:', response); // Log the response

                setMessage(response.data.message);
            })
            .catch(error => {
                console.error('Error fetching message:', error);
            });
    }, []);

    return (
        <div>
            <h1>Message from Backend:</h1>
            <p>{message}</p>
        </div>
    );
};

export default Test;
