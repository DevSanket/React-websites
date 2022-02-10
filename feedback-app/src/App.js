import React, { useState } from "react";
import FeedBackForm from "./Components/FeedbackForm";
import FeedbackList from "./Components/FeedbackList";
import FeedbackStats from "./Components/FeedbackStats";
import Header from "./Components/Header";
import FeedBackData from "./data/FeedbackData";

// function App(){
//     return React.createElement('div',{className:'container'},
//     React.createElement('h1',{},'My App'))
// }

const App = () => {
  const [feedback,setFeedback] = useState(FeedBackData);
  const feedbackDelete = (id) => {
    if(window.confirm('Are you shure?')){
      setFeedback(feedback.filter(item => item.id !== id))
    }
  }
  return (
    <>
      <Header/>
      <div className="container">
        <FeedBackForm />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={feedbackDelete}/>
      </div>
    </>
  );
};

export default App;
