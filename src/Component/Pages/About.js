import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import fire from "./TryFirebase";

class About extends Component {

    constructor() {
        super();
        this.state={
            uname:null,
            email:null,
            phone:null
        }
    }
    onChangeHandler=(event)=>{
        var inputname=event.target.name;
        var inputvalue=event.target.value;
        this.setState({[inputname]:inputvalue})

    }
    submitClick(){

            let nameRef=fire.database().ref('name').orderByKey().limitToLast(100)
           fire.database().ref('name').push(this.state.uname)
        this.setState(
            {uname:""}
        )
    }



    render() {
        if(sessionStorage.getItem("userName")=="Log in"){
            return <Redirect to="/Login"/>
        }
        else{

            return (
                <div>
                    <h2>This is my about</h2>
                    <h3>Input form</h3>
                    <form>
                        <input onChange={this.onChangeHandler} name="uname" type="text" placeholder="Your Name"/><br/>
                        <input onChange={this.onChangeHandler} name="email" type="text" placeholder="Your Email"/><br/>
                        <input onChange={this.onChangeHandler} name="phone" type="text" placeholder="Your Phone No."/><br/>
                        <input onClick={this.submitClick} type="submit" value="Save Now" className="btn-danger"/>
                    </form>
                    <a>   Name: {this.state.uname}</a><br/>
                    <a>   Email: {this.state.email}</a><br/>
                    <a>   Phone No: {this.state.phone}</a>
                </div>
            );
        }

    }
}

export default About;