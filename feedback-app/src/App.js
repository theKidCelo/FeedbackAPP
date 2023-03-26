import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./commponents/Header";
import Feedbacklist from "./commponents/Feedbacklist";
import FeedbackStats from "./commponents/FeedbackStats";
import FeedbackData from "./data/Feedbackdata";
import FeedbackForm from "./commponents/FeedbackForm";
import About from "./pages/About";
import AboutIcounLink from "./commponents/AboutIcounLink";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
        <Route exact path='/' element={
        <>
          <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <Feedbacklist feedback={feedback} handleDelete={deleteFeedback} />
        <AboutIcounLink />
        </>
    
    }>
      
        </Route>

        <Route path="/about" element={<About />} /> 

        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
