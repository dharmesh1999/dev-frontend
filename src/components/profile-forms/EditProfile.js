import React, { useState, useEffect } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import CustomButton from '../common/CustomButton/CustomButton';
import { Container } from 'react-bootstrap';
import styles from './CreateProfile.module.css';
import { createProfile, getCurrentProfile } from '../../redux/actions/profile';
import AlertBar from '../common/Alert/Alert';
import { useSelector, useDispatch } from 'react-redux';
const EditProfile = () => {
  const alert = useSelector((state) => state.alert);
  const { profile, loading } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    company: '',
    website: '',
    location: '',
    skills: '',
    githubusername: '',
    bio: '',
    twitter: '',
    linkedin: '',
    youtube: '',
    instagram: ''
  });
  const {
    company,
    website,
    location,
    skills,
    githubusername,
    bio,
    twitter,
    linkedin,
    youtube,
    instagram
  } = formData;

  useEffect(() => {
    dispatch(getCurrentProfile());
    setFormData({
      company: loading || !profile.company ? '' : profile.company,
      website: loading || !profile.website ? '' : profile.website,
      location: loading || !profile.location ? '' : profile.location,
      skills: loading || !profile.skills ? '' : profile.skills,
      githubusername:
        loading || !profile.githubusername ? '' : profile.githubusername,
      bio: loading || !profile.bio ? '' : profile.bio,
      twitter: loading || !profile.twitter ? '' : profile.twitter,
      linkedin: loading || !profile.linkedin ? '' : profile.linkedin,
      youtube: loading || !profile.youtube ? '' : profile.youtube,
      instagram: loading || !profile.instagram ? '' : profile.instagram
    });
  }, [
    dispatch,
    loading,
    profile.bio,
    profile.company,
    profile.githubusername,
    profile.instagram,
    profile.linkedin,
    profile.location,
    profile.skills,
    profile.twitter,
    profile.website,
    profile.youtube
  ]);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(createProfile(formData));
  };

  return (
    <Container className={`${styles.container} container-fluid p-0 mt-4`}>
      <Row className='d-flex align-items-center w-100'>
        <Col xs={12} lg={12} md={7} sm={12} className='border p-4 rounded'>
          {alert !== null && <AlertBar alert={alert} />}
          <Form onSubmit={(e) => onSubmit(e)}>
            <h2>Create Profile</h2>
            <div className='d-flex'>
              <div className='w-50 me-3'>
                <Form.Group className='mb-3' controlId='companyname'>
                  <Form.Label>Company</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Comapany name'
                    name='company'
                    value={company}
                    onChange={(e) => onChange(e)}
                  />
                </Form.Group>
                <Form.Group className='mb-3' controlId='website'>
                  <Form.Label>Web site</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter website'
                    name='website'
                    value={website}
                    onChange={(e) => onChange(e)}
                  />
                </Form.Group>
                <Form.Group className='mb-3' controlId='location'>
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter your location'
                    name='location'
                    value={location}
                    onChange={(e) => onChange(e)}
                  />
                </Form.Group>
                <Form.Group className='mb-3' controlId='skills'>
                  <Form.Label>Skills</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter your skills'
                    name='skills'
                    value={skills}
                    onChange={(e) => onChange(e)}
                  />
                </Form.Group>
                <Form.Group className='mb-3' controlId='githubusername'>
                  <Form.Label>Github Username</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter your githubusername'
                    name='githubusername'
                    value={githubusername}
                    onChange={(e) => onChange(e)}
                  />
                </Form.Group>
              </div>
              <div className='w-50 ms-3'>
                <Form.Group className='mb-3' controlId='bio'>
                  <Form.Label>Bio</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter your bio'
                    name='bio'
                    value={bio}
                    onChange={(e) => onChange(e)}
                  />
                </Form.Group>
                <Form.Group className='mb-3' controlId='instagram'>
                  <Form.Label>Instagram</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Instagram Links...'
                    name='instagram'
                    value={instagram}
                    onChange={(e) => onChange(e)}
                  />
                </Form.Group>
                <Form.Group className='mb-3' controlId='linkedin'>
                  <Form.Label>LinkedIn</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Linkedin Links...'
                    name='linkedin'
                    value={linkedin}
                    onChange={(e) => onChange(e)}
                  />
                </Form.Group>
                <Form.Group className='mb-3' controlId='youtube'>
                  <Form.Label>YouTube</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='YouTube Links...'
                    name='youtube'
                    value={youtube}
                    onChange={(e) => onChange(e)}
                  />
                </Form.Group>
                <Form.Group className='mb-3' controlId='twitter'>
                  <Form.Label>Twitter</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='YouTube Links...'
                    name='twitter'
                    value={twitter}
                    onChange={(e) => onChange(e)}
                  />
                </Form.Group>
              </div>
            </div>
            <div className='justify-content-space-between'>
              <CustomButton type='submit' className={styles.signup}>
                Submit
              </CustomButton>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default EditProfile;
