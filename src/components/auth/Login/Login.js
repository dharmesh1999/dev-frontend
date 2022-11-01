import React, { useState } from 'react';
import { Form, Container, Col, Row, Image } from 'react-bootstrap';
import { AiOutlineUser } from 'react-icons/ai';
import CustomButton from '../../common/CustomButton/CustomButton';
import Signup from '../../../assets/images/singup.jpg';
import styles from './Login.module.css';
import { Link, Navigate } from 'react-router-dom';
import { login } from '../../../redux/actions/auth';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    // const newUser = {
    //   name,
    //   email,
    //   password
    // };
    // try {
    //   const config = {
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   };

    //   const body = JSON.stringify(newUser);

    //   const res = await axios.post('/api/users', body, config);
    //   console.log(res.data);
    // } catch (error) {
    //   console.error(error.response.data);
    // }
    dispatch(login(formData));
  };

  if (isAuthenticated) {
    return <Navigate replace to='/dashboard' />;
  }
  return (
    <Container className={`${styles.container} container-fluid p-0`}>
      <Row className='d-flex align-items-center w-100'>
        <Col></Col>
        <Col xs={12} lg={5} md={7} sm={12} className='border p-4 rounded'>
          <div className='d-flex justify-content-between'>
            <div>
              <h2>Login</h2>
              <h6>
                <AiOutlineUser />
                Login your account
              </h6>
            </div>
            <div>
              <Image src={Signup} width='100px' />
            </div>
          </div>
          <Form onSubmit={(e) => onSubmit(e)}>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                name='email'
                value={email}
                onChange={(e) => onChange(e)}
              />
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
            <div className='d-flex justify-content-between'>
              <CustomButton type='submit' className={styles.signup}>
                Login
              </CustomButton>
              <h6 className='d-flex align-items-center p-0'>
                Don't have an account? <Link to='/singup'>Signup</Link>
              </h6>
            </div>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Login;
