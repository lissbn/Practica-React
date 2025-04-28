import './App.css'; 

function Person(props){

    // const [persons] = useState([
    //     {name: "Juan", lastName: "Santos", age: 28, weight: 140 },
    //     {name: "Pedro", lastName: "Valdez", age: 45, weight: 168 }
    // ])

    return (

        <div className= "app"> 

            <div className = "tweet"> 

                <h2> { props.name } </h2> 
                {/* // los props aqui reciben la informacion desde App2 */}
                <h2> { props.lastName } </h2>
                <h2> { props.age } </h2>
                <h2> { props.weight } </h2> 
                <h2> { props.address } </h2>

            </div>

        </div>

    )

}

export default Person;