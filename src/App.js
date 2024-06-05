import logo from './logo.svg';
import './App.css';

function App() {
  //let str = "hello"
  //let str2 = "world"
  //if (str === "hello" && str2 === "world")
  //{
  //  console.log("hello world")
 // } 
 /*const student1 ={
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
 const arr1 =[1,2,3,4,5,6];
 for(let item of arr1){
  console.log(item);
 }*/
 //const people =[
 // {name : "Ansh", age :19},
  //{name : "Disha", age :18},
  //{name : "Sweety", age :20} 
 //];
 //for( let person of people ){
  //console.log(`Name: ${person.name}, Age: ${person.age}`);
// }
//people.forEach((person) => {
//  console.log(`Name: ${person.name}, Age: ${person.age}`);
//});
/*const employees = [
  {name : "Raj", Age: 22, Salary : 800},
  {name: "Ansh", Age: 50, Salary : 900},
  {name: "Khushi", Age: 20, Salary : 1200},
  {name: "Disha", Age: 55, Salary : 1400},
];
const mappedEmployees = employees.map((item) => {
  return {
    ...item,
    Salary: item.Salary+100,
  };
},[]);*/
//console.log("Employees", employees);
//console.log("mappedEmployees", mappedEmployees);

//console.log(employee.name);
//for(const key in employee){
 // if(employee.hasOwnProperty(key)) {
 // console.log(`${key}: ${employee[key]}`);
//}
//}
const products =[
  {id: 1001 , name: "Laptop", price:1500, category: "Electronics"},
  {id: 1002 , name: "Shirt", price:800, category: "clothing"},
  {id: 1003 , name: "Coffee Maker", price:100, category: "Home Appliance"},
  {id:1004 , name: "Shirts", price:600, category: "Clothing"},
];
const filteredProducts = products.filter((item) => {
  return item.category === "clothing";
});
console.log("filteredProducts", filteredProducts);
const foundProducts = products.find((item) => {
  return item.id === 1002;
});

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
