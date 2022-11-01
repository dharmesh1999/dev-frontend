import React from 'react';
import { Alert } from 'react-bootstrap';

const AlertBar = ({ alert }) => {
  return (
    alert !== null && (
      <Alert key={alert.msg} variant={alert.alertType}>
        {alert.msg}
      </Alert>
    )
  );
};

export default AlertBar;
