import React, { useState } from 'react';
import { Form, Container, Col, Row, Image } from 'react-bootstrap';
import { AiOutlineUserAdd } from 'react-icons/ai';
import CustomButton from '../../common/CustomButton/CustomButton';
import Signup from '../../../assets/images/singup.jpg';
import styles from './Singup.module.css';
import { Link, Navigate } from 'react-router-dom';
import { setAlert, removeAlert } from '../../../redux/actions/alert'; //action
import { register } from '../../../redux/actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import AlertBar from '../../common/Alert/Alert';
// import axios from 'axios';

const Singup = () => {
  const alert = useSelector((state) => state.alert); //reduser function
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      dispatch(setAlert('Password do not match', 'danger'));
      setTimeout(() => dispatch(removeAlert()), 5000);
    } else {
      // const newUser = {
      //   name,
      //   email,
      //   password
      // };
      //   try {
      //     const config = {
      //       headers: {
      //         'Content-Type': 'application/json'
      //       }
      //     };
      //     const body = JSON.stringify(newUser);
      //     const res = await axios.post('/api/users', body, config);
      //     console.log(res.data);
      //   } catch (error) {
      //     console.error(error.response.data);
      //   }
      // }
      console.log('sucess');
      dispatch(register({ name, email, password }));
    }
  };

  if (isAuthenticated) {
    return <Navigate replace to='/dashboard' />;
  }
  return (
    <Container className={`${styles.container} container-fluid p-0`}>
      <Row className='d-flex align-items-center w-100'>
        <Col></Col>
        <Col xs={12} lg={5} md={7} sm={12} className='border p-4 rounded'>
          {alert !== null && <AlertBar alert={alert} />}
          <div className='d-flex justify-content-between'>
            <div>
              <h2>Sing Up</h2>
              <h6>
                <AiOutlineUserAdd />
                Create your new account
              </h6>
            </div>
            <div>
              <Image src={Signup} width='100px' />
            </div>
          </div>
          <Form onSubmit={(e) => onSubmit(e)}>
            <Form.Group className='mb-3' controlId='formBasicName'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Name'
                name='name'
                value={name}
                onChange={(e) => onChange(e)}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                name='email'
                value={email}
                onChange={(e) => onChange(e)}
              />
              <Form.Text className='text-muted'>
                This site uses Gravatar so if you want a profile image, use a
                Gravatar email.
              </Form.Text>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Password'
                name='password'
                value={password}
                onChange={(e) => onChange(e)}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicPassword2'>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Confirm Password'
                name='password2'
                value={password2}
                onChange={(e) => onChange(e)}
              />
            </Form.Group>
            <div className='d-flex justify-content-between'>
              <CustomButton type='submit' className={styles.signup}>
                Sing Up
              </CustomButton>
              <h6 className='d-flex align-items-center p-0'>
                Already have an account? <Link to='/login'>Sign In</Link>
              </h6>
            </div>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Singup;
