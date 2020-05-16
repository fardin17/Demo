import React, {Component} from 'react';
import Profile from "./Component/Pages/Profile";
import About from "./Component/Pages/About";
import Contactinfo from "./Component/Pages/Contactinfo";
import {Route} from "react-router-dom";
import Home from "./Component/Pages/Home";
import Login from "./Component/Pages/Login";
class MyRoute extends Component {
    render() {
        return (
            <div>
                    <Route exact path="/Home" component={Home}/>
                    <Route exact path="/Profile" component={Profile}/>
                    <Route exact path="/About" component={About} />
                    <Route exact path="/Contactinfo" component={Contactinfo} />
                    <Route exact path="/Login" component={Login} />


            </div>
        );
    }
}

export default MyRoute;