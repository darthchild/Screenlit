import React from 'react';
import { Button } from 'react-bootstrap';
import './Future.css'; // Optional: for custom styling

const Future = () => {
    return (
        <div className="under-development text-center">
            <h1>🔧</h1>
            <p>This feature is currently under development.</p>
            <Button href="/" variant="warning" className="home-button mt-3">Go Back Home</Button>
        </div>
    );
};

export default Future;
