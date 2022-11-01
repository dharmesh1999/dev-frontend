import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import CustomButton from '../common/CustomButton/CustomButton';
import styles from './AddEducation.module.css';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addEducation } from '../../redux/actions/profile';

const AddEducation = () => {
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    to: '',
    current: '',
    description: ''
  });
  const [toDateDisable, setToDateDisable] = useState(false);

  const { school, degree, fieldofstudy, from, to, current, description } =
    formData;
  const dispatch = useDispatch();

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(addEducation(formData));
  };
  return (
    <Container className={`${styles.container} container-fluid p-0`}>
      <Row className='d-flex align-items-center w-100'>
        <Col></Col>
        <Col xs={12} lg={5} md={7} sm={12} className='border p-4 rounded'>
          <div className='d-flex justify-content-between'>
            <div>
              <h2>Add an education</h2>
              <h6>Add any school, Collage, etc that you have attended</h6>
            </div>
          </div>
          <Form onSubmit={(e) => onSubmit(e)}>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Scholl or Collage</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter scholl or collage name'
                name='school'
                value={school}
                onChange={(e) => onChange(e)}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Degree or Certificate</Form.Label>
              <Form.Control
                type='text'
                placeholder='Degree or Certificate'
                name='degree'
                value={degree}
                onChange={(e) => onChange(e)}
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Field of study</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Field of study'
                name='fieldofstudy'
                value={fieldofstudy}
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

export default AddEducation;
