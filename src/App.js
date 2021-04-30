import React from "react";


let count =1;

const IncNum = () => {
  count++;
  console.log("clicked");
};

const App = () => {
  return (
    <>
      <h1> {count} </h1>
      <button onClick={IncNum}> Click Me </button>
    </>
  );
};
export default App;
