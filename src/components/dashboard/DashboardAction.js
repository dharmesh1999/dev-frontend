import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserEdit, FaBlackTie } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';
import styles from './DashboardAction.module.css';
const DashboardAction = () => {
  return (
    <div className='deshboardButton'>
      <Link to='/edit-profile'>
        <Button variant='secondary' className={styles.button} onClick=''>
          <p>
            <FaUserEdit /> Edit
          </p>
        </Button>
      </Link>
      <Link to='/add-experience'>
        <Button variant='secondary' className={styles.button}>
          <p>
            <FaBlackTie className='me-2' />
            Add Experience
          </p>
        </Button>
      </Link>
      <Link to='/add-education'>
        <Button variant='secondary' className={styles.button}>
          <p>
            <SiGooglescholar className='me-2' />
            Add Education
          </p>
        </Button>
      </Link>
    </div>
  );
};

export default DashboardAction;
