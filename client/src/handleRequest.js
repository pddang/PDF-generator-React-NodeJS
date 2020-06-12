
import axios from "axios";
import React,{Component} from "react";
import {saveAs} from 'file-saver';
class createPDF extends Component{
    state = {
        name:'',
        receiptId:0,
        price1:0,
        price2:0,
    }

    handleChange = ({target:{value, name}}) =>this.setState({[name]: value})
    createAndDownloadPdf = () => {
        axios.post('/create-pdf', this.state)
            .then(() => axios.get('fetch-pdf', {responseType:'blob'}))
            .then((res) =>{
                const pdfBlob = new Blob([res.data],{type:'application/pdf'});
                saveAs(pdfBlob,'newPdf.pdf');
            })
    }
}

export default createPDF;

