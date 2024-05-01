import './App.css';

const changeText=(event)=>{ 
    console.log(event.target) 
    event.target.innerText = event.target.innerText + "被點了" 
}

const HelloCGU=()=>{
    return <h1 onClick={changeText}>hello CGU!!</h1>
}

export default HelloCGU;