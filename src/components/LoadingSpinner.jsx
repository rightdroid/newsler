import React from 'react';
import { Spinner } from 'react-bootstrap';

const LoadingSpinner = () => 
    <Spinner animation='grow' variant="warning" style={spinnerStyle} />;

const spinnerStyle = {
    position: 'relative',
    left: '40vw',
    top: '40vh',
}

export default LoadingSpinner;