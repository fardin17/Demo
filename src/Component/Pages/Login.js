import React, {Component} from 'react';

class Login extends Component {

    constructor() {
        super();
        this.state={
            isLoggedin:true,
            show:["Log in","Log out"]
        }
    }

    clickHandler=()=>{

           this.setState(prevstate=>{
               return{
                   isLoggedin: !prevstate.isLoggedin
               }

           })
    }
    render() {
        let show
        let showtext
        {this.state.isLoggedin===true?show=this.state.show[0]:show=this.state.show[1]}
        {this.state.isLoggedin===true?showtext="You are offline":showtext="You are online"}
        return (
            <div>
                <h1>{showtext}</h1>
                <button className="btn-info"
                        style={{width:"20%",margin:"350px",padding:"20px"}}
                        onClick={this.clickHandler}
                >{show}</button>


            </div>
        );
    }
}

export default Login;