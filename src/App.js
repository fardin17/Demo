import React from 'react';
import './App.css';
import './Component/assests/bootstrap.min.css'
import Navigation from "./Navigation";
import MyRoute from "./MyRoute"
import {BrowserRouter} from "react-router-dom";
function App() {
 const date=new Date()
    const hour=date.getHours()
    let ampm;
    if(hour>12){
         ampm="pm";

    }
    else
    {
         ampm="am"
    }
    const min=date.getMinutes()
    let zero
    if(min<10){
         zero=0
    }

    return (
        <div>
                <div>
                   <BrowserRouter>
                       <Navigation hour={hour%12} min={min} ampm={ampm} zero={zero}/>
                       <MyRoute/>

                   </BrowserRouter>


                </div>

        </div>


  );
}

export default App;
