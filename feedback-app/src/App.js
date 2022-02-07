import React from "react";
import Header from "./Components/Header";

// function App(){
//     return React.createElement('div',{className:'container'},
//     React.createElement('h1',{},'My App'))
// }

const App = () => {
  return (
    <>
      <Header text="Hello World" />
      <div className="container">
        <h1>My App</h1>
      </div>
    </>
  );
};

export default App;
