import React,{useState} from"react";

function Mycomponent(){
    const [name,setName] = useState("your name");
    const [age,setAge] = useState(19);
    const[isEmployed,setisEmployed]=useState(false);
    const changeName = () => {
        setName("Harshini");
    }
    const changeAge=()=>{
        setAge(age+1);
    }
    const Employedstatus=()=>{
        setisEmployed(!isEmployed);
    }
    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={changeName}>Click Me!</button>
            <p>Age: {age}</p>
            <button onClick={changeAge}>myAge</button>
            <p>isEmployed: {isEmployed ? "yes":"no"}</p>
            <button onClick={Employedstatus}>Yes/no</button>
            </div>
    );
}
export default Mycomponent;