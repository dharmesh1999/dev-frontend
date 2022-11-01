import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { addExperience, addEducation } from '../../redux/actions/profile';
import { useDispatch } from 'react-redux';
import styles from './AddExperience.module.css';
import CustomButton from '../common/CustomButton/CustomButton';
import { Link } from 'react-router-dom';

const AddExperience = () => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    from: '',
    to: '',
    current: false,
    description: ''
  });

  const [toDateDisable, setToDateDisable] = useState(false);

  const { title, company, location, from, to, current, description } = formData;

  const dispatch = useDispatch();

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('first');
    dispatch(addExperience(formData));
  };

  return (
    <Container className={`${styles.container} container-fluid p-0`}>
      <Row className='d-flex align-items-center w-100'>
        <Col></Col>
        <Col xs={12} lg={5} md={7} sm={12} className='border p-4 rounded'>
          <div className='d-flex justify-content-between'>
            <div>
              <h2>Add an experience</h2>
              <h6>
                Add any developer/programming positions that you have had in the
                past
              </h6>
            </div>
          </div>
          <Form onSubmit={(e) => onSubmit(e)}>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Job Title</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Job Tilte'
                name='title'
                value={title}
                onChange={(e) => onChange(e)}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Company</Form.Label>
              <Form.Control
                type='text'
                placeholder='Company Name'
                name='company'
                value={company}
                onChange={(e) => onChange(e)}
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Location</Form.Label>
              <Form.Control
                type='text'
                placeholder='location'
                name='location'
                value={location}
                onChange={(e) => onChange(e)}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>From date</Form.Label>
              <Form.Control
                type='date'
                placeholder='dd-mm-yyyy'
                name='from'
                value={from}
                onChange={(e) => onChange(e)}
              />
            </Form.Group>
            <Form.Check
              type='checkbox'
              id='checkbox'
              label='Current Job'
              value={current}
              checked={current}
              onChange={(e) => {
                setFormData({ ...formData, current: !current });
                setToDateDisable(!toDateDisable);
              }}
            />
            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>To date</Form.Label>
              <Form.Control
                type='date'
                placeholder='dd-mm-yyyy'
                name='to'
                value={to}
                onChange={(e) => onChange(e)}
                disabled={toDateDisable ? 'disabled' : ''}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as='textarea'
                type='text'
                placeholder='Description'
                name='description'
                value={description}
                onChange={(e) => onChange(e)}
              />
            </Form.Group>
            <CustomButton type='submit' className=''>
              Submit
            </CustomButton>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default AddExperience;
