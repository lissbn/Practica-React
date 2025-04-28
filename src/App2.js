import './App.css'; 
import Person from "./Person";
import Anime from "./Anime"
import Animal from './Animal';


  function App2(){   

      return (

        <div>

            <Animal nombre = {Animal.nombre} />

            <div>

                {/* <Person name = "Laura" lastName = "Valdex" age = {45} weight = {4000} address = "CALLE 8, ESQ" /> ,
                <Person name =  "Juan" lastName = "Santos" age = {28} weight = {140} />,
                <Person name = "Pedro" lastName = "Rodriguez" age = {45} weight =  {168} />, */}
                {/* // llama al componente Person y le envia los parametros */}

            </div>
{/* 
            <div>

              <h1> hola App2</h1>

              < Anime name = "One Piece" cantCaps = {1590} genre = "Aventura"  rating = {2} score = {9.5}  />

            </div> */}
            
        </div>
        
    //    
  )

}

export default App2; 

// Crear un componente que reciba 
// 4 parametros/props, 
// nombre, apellido, edad, peso, 
// llamarlo dentro de App2
// <h3> {person.name} </h3> <h3>{person.lastName}</h3> <h3>{person.age}</h3> <h3> {person.weight} </h3></></>
// mandar los parametros desde App2

// hacer otro componente anime que retorne un objeto con las caracteriscticas de un anime, 
// 5 parametros, que se visualice igual que persona con el cuadro

////// Hacer otro componente llamado animal,
//  varias caracteristics de un animal en un objeto que tenga una funcion 
// que  hacer un boton que a hacer click 
// imprime en consola el sonido que hace los animales