import logo from './logo.svg';
import './App.css';

function App() {
  //let str = "hello"
  //let str2 = "world"
  //if (str === "hello" && str2 === "world")
  //{
  //  console.log("hello world")
 // } 
 const student1 ={
  name:"Ansh",
  address:"Patna",
  roll:"05"
 };
 const student2 ={
  name:"Ansh",
  address:"Ranchi",
  Age:"05"
 };
 const fun1 =()=>{
  const num1=5;
  const num2=20;
  const sum = num1+num2;
  console.log(sum);
 };
 if(student1.roll === student2.Age){
  fun1();
 }
 else{
  console.log("hello");
 }
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
