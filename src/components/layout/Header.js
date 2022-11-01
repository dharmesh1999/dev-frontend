import React, { Fragment } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Header.module.css';
import { logout } from '../../redux/actions/auth';
import { FiLogOut, FiUser } from 'react-icons/fi';
const Header = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const authLinks = (
    <Nav>
      <Nav.Link href='/dashboard' className={styles.menu}>
        <FiUser />
        Dashboard
      </Nav.Link>
      <Nav.Link
        href='#deets'
        className={styles.menu}
        onClick={(e) => dispatch(logout())}
      >
        <FiLogOut />
        Logout
      </Nav.Link>
    </Nav>
  );

  const guestLinks = (
    <Nav>
      <Nav.Link href='/' className={styles.menu}>
        Developers
      </Nav.Link>
      <Nav.Link eventKey={2} href='/singup' className={styles.menu}>
        Singup
      </Nav.Link>
      <Nav.Link eventKey={2} href='/login' className={styles.menu}>
        Login
      </Nav.Link>
    </Nav>
  );
  return (
    <>
      <Navbar collapseOnSelect expand='lg' className={styles.navbar}>
        <Container>
          <Navbar.Brand href='/' className={styles.logo}>
            DevConnector
          </Navbar.Brand>
        </Container>
        {!auth.loading && (
          <Fragment>{auth.isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
      </Navbar>
    </>
  );
};

export default Header;
