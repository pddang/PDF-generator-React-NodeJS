import React from 'react';
import {Container, Row,Col} from "react-bootstrap";

const RecipientList = (props) => {
    const items = props.items.map((item, index) =>{
        return <List items ={item} key={index} onDelete={props.onDelete}/>
    })
    return(
        <div>
            {items}
        </div>
    )

}

export default RecipientList;

const List = (props) => {
    return (
        <div>
            {props.items}
            <button onClick={()=>{props.onDelete(props.id)}}>Delete</button>
        </div>
    )
}


