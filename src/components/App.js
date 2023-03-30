import React,{useState} from 'react'
import '../styles/App.css';
const App = () => {
const [input1,setInpu1]=useState("");
const [input2,setInput2]=useState("");

const handleChangeA=(e)=>{
  setInpu1(Number(e.target.value));
}
const handleChangeB=(e)=>{
  setInput2(Number(e.target.value))
}
const sum = input1+input2;

  return (
    <div id="main">
      <input id="input1" onChange={handleChangeA}/>
       +
      <input id="input2" onChange={handleChangeB}/> 
      
      <p id="result" >{sum}</p>
    </div>
  )
}


export default App;
