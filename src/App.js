import React ,{useState} from "react";



const App = () => {
  const state = useState();
// console.log(state);

const [count , setCount] = useState(0);


// let count =1;

const IncNum = () => {
  setCount(count+1);
  // count++;
  // console.log("clicked " + count++);
};
  return (
    <>
      <h1> {count} </h1>
      <button onClick={IncNum}> Click Me </button>
    </>
  );
};
export default App;
