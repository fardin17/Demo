import React, {Component} from 'react';

class Contactinfo extends Component {


    render() {
        const  datas=[{city:"Dhaka",Code:"1000"},
                     {city:"Barisal",Code:"2000"},
                     {city:"Rajshahi",Code:"3000"},
                     {city:"Sylhet",Code:"4000"}
        ]
        const mydatacity=datas.map((data)=>{
            return (
                    <option>{data.city}</option>

            )
        })
        const mydataCode=datas.map((data)=>{
            return (
                <li>{data.Code}</li>
        )
        })

        return (
            <div>
                <h2>This is my contactinfo</h2>
                <select >
                    {mydatacity}
                </select>
                <ul>
                    {mydataCode}
                </ul>
            </div>
        );
    }
}

export default Contactinfo;