import React, { useState } from "react";
import FeedbackList from "./Components/FeedbackList";
import Header from "./Components/Header";
import FeedBackData from "./data/FeedbackData";

// function App(){
//     return React.createElement('div',{className:'container'},
//     React.createElement('h1',{},'My App'))
// }

const App = () => {
  const [feedback,setFeedback] = useState(FeedBackData);
  return (
    <>
      <Header/>
      <div className="container">
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
};

export default App;
