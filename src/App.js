import React, {useState} from "react"; // importa react
import Tweet from "./Tweet"; // importa un codigo aparte
import './App.css'; // importa el formato de app
//import Hello from "./sayHello";
import Test from "./Test"

  function App(){ // componente es una funcion App

    const [isRed, setRed] = useState(false);         // State, hace que la pagina se actualiza / renderizar
    let   isRed2 = true;
    const [count, setCount] = useState(0);   

    // const [users, setUsers] = useState([                          // estado para guardar la informacion de los usuarios
    //   {name: "Ed", message: "Hello there", numberLikes: 500},     // informacion por parametros
    //   {name: "John", message: "I am snow", numberLikes: 652},     // objeto
    //   {name: "traversy", message: "I awesome", numberLikes: 120} 
    // ]);

      // const [user, setUser] = useState({ // dato de tipo objeto
    //   name: 'Ed',
    //   age: 25,
    //   posts: ['my first post', 'my lovely summer'],
    // });

    const increment = () => {
      setCount(count + 1);
      setRed(!isRed);
      isRed2 = !isRed2;
    };
    
    const sayHello = () => {    //aqui se codifica la funcion/metodo de sayHello:
      // console.log(hello App)
    };


    return (

      <body>

          <div className = "hello App">
            <h1> Hello App0 </h1>
            <button onClick = {sayHello}>un botón</button> 
          </div>

          {/* <div className = "app">  */}
              {/* // division que es una clase llamada app */}

              {/* {users.map(user => ( // busca todos los usuarios
                <Tweet name = {user.name} message = {user.message} numberLikes = {user.numberLikes}/> 
                // busca en la clase Tweet el nombre y el mensaje de manera 
                // que obtenga todos los datos con props               
              ))}     
            
            < Tweet name= "Dev Ed" message= "This Random tweet" /> */}
              {/* // usa la clase Tweet para poner un name y message que se muestran en pantalla */}
                {/* < Tweet name= "John Snow" message= "King"/>
                < Tweet name= "Traversy Media" message= "700k"/>
                < Tweet name= "Mosh" message= "New course"/> */}
          {/* </div> */}

          {/* <div className = "redBackground">
                <h1 className = { isRed ? "red" : "" }>Change my color!</h1>
                <button onClick = {increment}>Cambio de color</button>
                <h1>{count}</h1>  
          </div>  */}

          <div>

                <Test name = " " message = " " numberofLikes = " "/>

                {/* <Test message = {"  "}/> */}             
                {/* <Test name /> */} 
                
          </div>

      </body>   

    )

}


export default App; // aqui se exporta App para que funcione 