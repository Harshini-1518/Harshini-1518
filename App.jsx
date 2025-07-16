/*import React from "react";
import Student from "./student.jsx";
import Greeting from "./rendering.jsx";
import RenderList from "./renderlist.jsx";

function App() {
  return (
    <div>
      <Student name="John" age={20} isStudent={true} /><hr />
      <Student name="Smith" age={22} isStudent={false} /><hr />
      <Student name="Alice" age={19} isStudent={true} /><hr />
    </div>
  );
}
export default App;*/
/*function App() {
    const students = [
        {name: "John", age: 20, isStudent: true},
        {name: "Smith", age: 22, isStudent: false},
        {name: "Johnson", age: 19, isStudent: true},
        {name: "Bob", age: 21, isStudent: true},
        {name: "Charlie", age: 23, isStudent: false},
    ];
}*/
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
