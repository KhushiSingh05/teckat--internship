import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState<number>(0);
  const [numberData, setNumberData] = useState<number>(0);

  const numberArray = [1,2,3,4,5,6,7,8];
  const people =[
    {name : "Dishh", Age : 150,status:"active"},
    {name : "Puja", Age :250,status:"inactive"},
    {name : "Sam", Age : 80,status:"active"}
  ];
  useEffect(() => {
    addData();
  }, [numberData]);
    
  const addData = () => {
    const oldData = data;
    const newData = oldData+1;
    setData(newData);
    console.log(newData);
  };
  const decrementData = () =>{
    setNumberData (numberData - 1);
  };

  return (
    <>
    <button title = "title" onClick={addData} className={`number ${data}`}>
      add Data
    </button>
    <div>Incremented Data: {data}</div>
      <br/>
      <button onClick={decrementData} className={`decrement ${numberData}`}>
        decrement
      </button>
      <div>decremented Data: {numberData}</div>
      {numberArray.map((item ,i ) => {
        return <div key= {i}>{item}</div>
       })}
       {/*map with object array*/}
       {people.map((item,i) => {
        return(
          <div key={i}>
            {item.status === "active" &&(
             <>
             <div>name: {item.name}</div>
             <div>Age: {item.Age}</div>
             <br />
             </>
            )}
            </div>
        );
      })}
      <hr />


       {people.map((item,i) => {
        return(
          <div key={i}>
            {item.status === "active" ?(
            <>
            <div>name: {item.name}</div>
            <div>Age: {item.Age}</div>
            <br />
            </>
            ) : (
            <>
            <div>inactive</div>
            <br />
            </>
            )}
          </div>
        );
       })}
    </>
  );
}

export default App
