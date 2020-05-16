import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import imag1 from '../Image/Image2.jpg'
import red from "@material-ui/core/colors/red";
class Profile extends Component {

    constructor() {
        super();
        this.state={
            data:"This is my profile",
            count:null,
            unreadmsg:[]

        }
    }
    componentDidMount() {
        setTimeout(()=>{
            this.setState({
                data:<div>
                    <h3>Fardin islam</h3>
                    <h6>Study in Computer Science and Engineering</h6>
                    <h6>Patuakhali Science And Technology University</h6>

                </div>
            })
        },9500)
    }


    clickChange(){
        var container=document.getElementById("dataid")
            var element= <h3>Nothing in it..........!!</h3>
        ReactDOM.render(element,container);


    }
    clickHandler=()=>{
       this.setState(prevstate=>{
           return{
               count:prevstate.count++
           }
       })
    }

    render() {
        var circleStyle = {
            padding:10,
            margin:20,
            backgroundColor: red,
            borderRadius: "50%",
            width:250,
            height:220,
        }
        return (
            <div  >

                 <img src={imag1} height={165} width={210} style={circleStyle}  />
                <h2 id="dataid" >{this.state.data}</h2>
                <button className="btn-danger" onClick={this.clickChange}  >More</button>
                 <button className="btn-info" onClick={this.clickHandler}>Count</button>
                <h1>{this.state.count}</h1>
                {this.state.unreadmsg.length>0&&
                <p>You have {this.state.unreadmsg.length} unread message</p>
                }
            </div>

        );
    }
}

export default Profile;