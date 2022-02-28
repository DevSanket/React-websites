import React, { useState } from "react";
import FeedBackForm from "./Components/FeedbackForm";
import FeedbackList from "./Components/FeedbackList";
import FeedbackStats from "./Components/FeedbackStats";
import Header from "./Components/Header";
import FeedBackData from "./data/FeedbackData";
import {v4 as uuidv4} from 'uuid';

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

  const handleAdd = (newFeedback) => {
    newFeedback.id= uuidv4();
      setFeedback([newFeedback,...feedback]);
  }
  return (
    <>
      <Header/>
      <div className="container">
        <FeedBackForm handleAdd={handleAdd}/>
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={feedbackDelete}/>
      </div>
    </>
  );
};

export default App;
