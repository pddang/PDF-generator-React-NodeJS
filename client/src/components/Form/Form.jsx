import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.css';
import createPDF from '../../handleRequest'
import {InputGroup, FormControl,Button, Col, Row} from "react-bootstrap";
import HandleRecipientList from "../../handleRecipientList";
import RecipientList from "../List/RecipientList";
const Form = (props) => (

  <div>
        <Row className= "justify-content-center">
            <Col xs ={6} md = {4}>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Recipient's email"
                        aria-label="Recipient's email"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary">Add Recipient</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Col>

        </Row>


        <input type="text" placeholder="Name" name="name" onChange={createPDF.handleChange} />
      <input type="number" placeholder="Receipt ID" name="receiptId" onChange={createPDF.handleChange} />
      <input type="number" placeholder="Price 1" name="price1" onChange={createPDF.handleChange} />
      <input type="number" placeholder="Price 2" name="price2" onChange={createPDF.handleChange} />
      <button onClick={createPDF.createAndDownloadPdf}>Download PDF</button>
  </div>
);

Form.propTypes = {};

Form.defaultProps = {};

export default Form;
