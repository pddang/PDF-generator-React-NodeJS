import React,{Component} from 'react';
import RecipientList from "./components/List/RecipientList";
import {Container, Row,Col} from "react-bootstrap";
import Form from "./components/Form/Form";
class HandleRecipientList extends React.Component{
    state = {
        recipients: ["aaass"]
    };

    handleDelete = (index) => {
        const newArr = [...this.state.recipients];
        newArr.splice(index, 1);
        this.setState({recipients: newArr});
    }
    handleAdd = recipient => {
        this.setState({recipients: [...this.state.recipients,recipient]});
    }



render(){
    return (
        <Container>
            <Form onFormSubmit = {this.handleAdd}/>
           <RecipientList items ={this.state.recipients} onDelete = {this.handleDelete}/>

        </Container>
    );
  }
}

export default HandleRecipientList;
