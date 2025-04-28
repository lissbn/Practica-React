import React, {useState} from "react";
import './App.css'; 

 function Test (props){

    const [users] = useState([ // estado para guardar la informacion de los usuarios
          {name: "Lucia", message: "Donald Trump es el mejor presidente de USA, dijo nadie nunca", numberLikes: 951 }, // informacion por parametros
          {name: "Juana", message: "He adoptado un cachorro", numberLikes: 456 }, // objeto
          {name: "Sofia", message: "Tengo la bandeja llena, no envien mas", numberLikes: 120 }, 
          {name: "Pedro", message: "El mundo se acabara", numberLikes: 755550},
          {name: "Luis",  message: "De cada 10 personas que ven la televicion 5 son la mitad", numberLikes: 4564564 }
        ]);
    
    return (

        <div>
    
            <h3> { props.name } </h3>
            <h3> { props.message} </h3>
            <h3> { props.numberLikes} </h3> 

            {/* {
              users.map(user => ( 
                <><h3> {user.name} </h3><h3> {user.message} </h3></>
               // <div><h3> {user.name} </h3><h3> {user.message} </h3></div> // todo dentro del return debe ir cerrado
              ))}         */}


        </div>     

    );
    
 }

export default Test;