import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteAccount,
  deleteEducation,
  deleteExperience,
  getCurrentProfile
} from '../../redux/actions/profile';
import { FiUserCheck } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import CustomButton from '../common/CustomButton/CustomButton';
import DashboardAction from './DashboardAction';
import styles from './Dashboard.module.css';
import formatDate from '../../utils/formatDate';
const Dashboard = () => {
  const auth = useSelector((state) => state.auth);
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentProfile());
  }, [dispatch]);
  //spinner remaining

  // return profile.loading && profile === null ? <Spinner /> : <div>Teast</div>;
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col xs={9}>
          <div>
            <h1 className={styles.title}>Dashboard</h1>
            <p className={styles.username}>
              <FiUserCheck />
              {auth.user && auth.user.name}
            </p>
            <DashboardAction />

            {profile.profile !== null ? (
              <>
                <h2 className='mt-3'>EDUCATION CREDEINTIALS</h2>
                <table className='table'>
                  <thead className='thead-dark'>
                    <tr>
                      <th scope='col'>school</th>
                      <th scope='col'>Degree</th>
                      <th scope='col'>Year</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {profile.profile.education.map((data) => {
                      return (
                        <tr key={data.id}>
                          <td>{data.school}</td>
                          <td>{data.degree}</td>
                          <td>
                            {formatDate(data.from)}-
                            {data.to ? formatDate(data.to) : 'Now'}
                          </td>
                          <td>
                            <Button
                              className={styles.deleteButton}
                              onClick={() => dispatch(deleteEducation(data.id))}
                            >
                              Delete
                            </Button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <h2 className='mt-3'>EXPERIENCE CREDEINTIALS</h2>
                <table className='table'>
                  <thead className='thead-dark'>
                    <tr>
                      <th>Company</th>
                      <th>Title</th>
                      <th>Year</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {profile.profile.experience.map((data) => {
                      return (
                        <tr key={data.id}>
                          <td>{data.company}</td>
                          <td>{data.title}</td>
                          <td>
                            {formatDate(data.from)}-
                            {data.to ? formatDate(data.to) : 'Now'}
                          </td>
                          <td>
                            <Button
                              className={styles.deleteButton}
                              onClick={() =>
                                dispatch(deleteExperience(data.id))
                              }
                            >
                              Delete
                            </Button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </>
            ) : (
              <div>
                <h1>You have not yet setup a profile, plaese add some info</h1>
                <Link to='/create-profile'>
                  <CustomButton>Create Profile</CustomButton>
                </Link>
              </div>
            )}
          </div>
          <Button variant='danger' onClick={() => dispatch(deleteAccount())}>
            Detele My account
          </Button>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
