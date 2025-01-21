// Create component here to display the Basic information such as 
// Name: Email: Phone: Address:
// Make sure to include these in your code with semicolon

import {Component} from "react";


export class Hero extends Component{

    constructor(){
        super();
        this.state={
            Name:"name",
            email:"ks@gmail.com",
            phone:683698273,
            address:"ABC, XYZ Street"
        }
    }
    render(){
        return (
            <div className="Hero">
                <p><b>Name:{this.state.Name}</b></p>
                <p>Email: {this.state.email}</p>
                <p>Phone: {this.state.phone}</p>
                <p>Address: {this.state.address}</p>
            </div>
        );
    }
}