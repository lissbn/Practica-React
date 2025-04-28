////// Hacer otro componente llamado animal,
//  varias caracteristics de un animal en un objeto que tenga una funcion 
// que  hacer un boton que a hacer click 
// imprime en consola el sonido que hace los animales
import {useState} from "react";
import './App.css'; 


function Animal(props){

    const perro = {
        nombre: "perro",
        tipo: "mamifero",
        familia: "canino",
        sonido: "jau"
    }

    const gato = {
        nombre: "gato",
        tipo: "mamifero",
        familia: "felino",
        sonido: "miau"
    }

    const vaca = {
        nombre: "vaca",
        tipo: "mamifero",
        familia: "taurus",
        sonido: "muuu"
    }

    // let [count, setCount] = useState(0);
    const [isPushed1, setPush1] = useState(false);
    const [isPushed2, setPush2] = useState(false);
    const [isPushed3, setPush3] = useState(false);


    const sonido1 = () => {
        // setCount(count + 1);
        setPush1(!isPushed1); // darle valores a los estados mediante set
        // count >= 3 ? setCount = (count + 1): setCount = (count + 1);
        {console.log(perro.sonido)}

    }
    const sonido2 = () => {
        setPush2(!isPushed2);
        {console.log(gato.sonido)}
       
    }
    const sonido3 = () => {
        setPush3(!isPushed3);
        {console.log(vaca.sonido)}
        
    }

        return (
        
            <div className="app">

                {/* <h1>{count}</h1> */}
                <button onClick={sonido1}>Perro</button>
                <h1>{isPushed1 ? perro.sonido : "" } </h1>

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                {/* <h1>{count}</h1> */}
                <button onClick={sonido2}>Gato</button>
                <h1>{isPushed2 ? gato.sonido : ""}  </h1>

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                {/* <h1>{count}</h1> */}
                <button onClick={sonido3}>Vaca</button>
                <h1>{isPushed3 ? vaca.sonido : ""}  </h1>

            </div>
            
        );

}
export default Animal;


