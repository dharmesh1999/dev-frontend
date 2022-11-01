import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import Dev from '../../assets/images/dev.jpg';
import CustomButton from '../common/CustomButton/CustomButton';
import styles from './Landing.module.css';

const Landing = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (isAuthenticated) {
    return <Navigate to='/dashboard' />;
  }
  return (
    <Container>
      <Row>
        <Col xs={7} className='d-flex align-items-center'>
          <div>
            <h1 className={styles.title}>Developer Connector</h1>
            <p className={styles.description}>
              Create a developer profile/portfolio, share posts and get help
              from other developers
            </p>
            <div className='mt-4'>
              <Link to='/singup'>
                <CustomButton className={styles.singup}>Sign Up</CustomButton>
              </Link>
              <Link to='/login'>
                <CustomButton className={styles.login}>Login</CustomButton>
              </Link>
            </div>
          </div>
        </Col>
        <Col className='mt-5'>
          <Image src={Dev} fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default Landing;
