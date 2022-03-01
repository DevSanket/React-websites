import React, { useState } from "react";
import FeedBackForm from "./Components/FeedbackForm";
import FeedbackList from "./Components/FeedbackList";
import FeedbackStats from "./Components/FeedbackStats";
import Header from "./Components/Header";
import FeedBackData from "./data/FeedbackData";
import {v4 as uuidv4} from 'uuid';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import AboutPage from "./Pages/AboutPage";

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
    
     <BrowserRouter>
      <Header/>
      <div className="container">
        <Routes>
        <Route path='/' element={

          <>
          <FeedBackForm handleAdd={handleAdd}/>
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={feedbackDelete}/>
          </>

        } />
        <Route path="/about" element={<AboutPage/>} />
        </Routes>
      </div>
     </BrowserRouter>
 
  );
};

export default App;
