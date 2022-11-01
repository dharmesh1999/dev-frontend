import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './Profile.module.css';

const Profile = () => {
  return (
    <>
      <Container>
        <Row>
          <Col></Col>
          <Col xs={12} lg={12} md={7} sm={12}>
            <div>
              <h1 className={styles.title}>Devlopers</h1>
              <p>Browse and connect with developers</p>
              <div className="profile">
                
              </div>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
