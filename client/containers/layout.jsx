import React from 'react';
import 'whatwg-fetch';

export default class Layout extends React.Component{
    constructor(){
        super();
        
        this.state = {data: 'This is from client'}
    }
    render(){
        const data = this.state.data;
        return (
        <div>
            <div>Data from server: {data}</div>
            <div><button onClick={this.getData}>Get data</button></div>
        </div>
        )
    }

    getData = ()=> {
        fetch('/getdata')
        .then((response) => {
            return response.json(); 
        })
        .then((response) => {
            this.setState({
                data: response.someString
            });
        });
    }
}