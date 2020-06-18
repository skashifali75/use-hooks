import React,{useState} from 'react';
import './App.css';

function Flasher(props){

    return (
            <div className={`area ${props.isGreen ? 'green' : 'red'}`}>
            <h2> It {props.isGreen ? 'Green' : 'Red'} Now </h2>    
    <h3>{props.isGreen}</h3>

            </div>


    );

  

}
export default Flasher;