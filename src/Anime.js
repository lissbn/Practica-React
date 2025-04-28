import './App.css'; 

function Anime(props){

    const ghibli = "Studio Ghibli es un estudio japonés de animación​ algunas peliculas son: Mi vecino Totoro. La princesa Mononoke.";
    const algo =  {name: "Juana", message: "He adoptado un cachorro", numberLikes: 456 };

    const raza = {
        name: "hola",
        cantCaps: 48,
        genre: "azul",
        rating: 5,
        score: 5
    } 

    const anime = {
        name: "Dragon Ball",
        cantCaps: 900,
        genre: "Accion",
        rating: 95,
        score: 6.35
    }

    const computadora = {
        periferico: "monitor",
        os: "Ubuntu",
        propietario: "universidad",
        cantidad: 12
    }

    const facebook = {
        funcion: "comunicacion",
        cantUsuarios: 20000000009,
        juegos: "farmville"
    }
    // < name = "Gintama" cantCaps = {120} genre = "Comedia"  rating = {48} score = {8.7} />

        // return(

        //     <div className = 'app' >

        //         <div className = 'tweet' >

        //             {/* <h2> { props.name }     </h2>
        //             <h2> { props.cantCaps}  </h2>
        //             <h2> { props.genre}     </h2>
        //             <h2> { props.rating}    </h2>
        //             <h2> { props.score }    </h2>
        //             <h2> { ghibli } </h2> */}
        //             {/* <h2> {ghibli.info} </h2> // funciona cuando es un objeto como : ghibli = "info: "*/}


        //             <h2> {facebook.cantUsuarios}  </h2>

        //             <div>

        //                 {/* </> */}


        //             </div>

        //         </div>

        //     </div>

        // )

}
// <Tweet name = {user.name} message = {user.message} numberLikes = {user.numberLikes}/> 

export default Anime;

// Mostrar datos de un estudio de animacion sin nada de afuera 
// guadar variable de una casa y que luego se muestre debajo de score...
// hacer objeto con los mismos campos 5, llenar con info dentro del componente 