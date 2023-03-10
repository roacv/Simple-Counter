import React from "react"
import { useState,useEffect } from "react";

export const Counter = (props) => {
    const [clock, setClock] = useState(props.seconds.toString());
    let x="";
    useEffect(() => {
        const formato = () => {
          for (let i=0; i<= (6-props.seconds.toString().length); i++){
            x+="0";
          }
          setClock(x+props.seconds.toString());
        };
        formato();
      });

    return(
        <div className="d-flex justify-content-center align-items-center">
            <div className="numero rounded-3"><i className="fa-solid fa-stopwatch-20"></i> </div>
            <div className="numero rounded-3">{clock[0]} </div>
            <div className="numero rounded-3">{clock[1]} </div>
            <div className="numero rounded-3">{clock[2]} </div>
            <div className="numero rounded-3">{clock[3]} </div>
            <div className="numero rounded-3">{clock[4]} </div>
            <div className="numero rounded-3">{clock[5]} </div>
            <div className="numero rounded-3">{clock[6]} </div>
        </div>
    );

}
