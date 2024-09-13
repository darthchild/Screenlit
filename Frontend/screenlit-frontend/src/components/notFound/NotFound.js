import React from 'react';
import { Button } from 'react-bootstrap';
import './NotFound.css'; 

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>404</h1>
            <p>Oops! The page you're looking for does not exist.</p>
            <Button href="/" variant="warning" className="mt-3">Go Back Home</Button>
        </div>
    );
};

export default NotFound;
