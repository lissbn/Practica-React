import React from "react";
import './App.css'; // import formato de App

function Tweet (props) {

    return(//jsx
        <div className="tweet"> 
        {/* // division con nombre de clase tweet */}
            <h3> {props.name}</h3> 
            {/* // se puso props. para tomar informacion de App */}
            <p>  {props.message}</p>
            <h3> {props.numberLikes} </h3>
        </div>
    );
}

export default Tweet;


// componente tets que tenga 5 usuarios, que muestre el listado