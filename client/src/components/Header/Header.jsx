import React from 'react';
import PropTypes from 'prop-types';
import {Container, Row, Image, Col}  from 'react-bootstrap';
import logo from './logo.png';
import styles from './Header.module.css';

const Header = () => (
  <Container className={styles.itemCenter}>
    <Row>
      <Col xs ={6} md = {4} >
        <img className={styles.logo} src={logo}/>
      </Col>
    </Row>
  </Container>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
