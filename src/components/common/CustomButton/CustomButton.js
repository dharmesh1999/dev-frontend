import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './CustomButton.module.css';

const CustomButton = ({ children, className, type }) => {
  return (
    <Button className={`${className} ${styles.button}`} type={type}>
      {children}
    </Button>
  );
};

export default CustomButton;
