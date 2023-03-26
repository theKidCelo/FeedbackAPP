import {useState} from 'react'
import Header from "./commponents/Header"
import Feedbacklist from "./commponents/Feedbacklist"
import FeedbackStats from "./commponents/FeedbackStats"
import FeedbackData from "./data/Feedbackdata"
import FeedbackForm from "./commponents/FeedbackForm"

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id => {
        if(window.confirm('Are you sure you want to delete')){
        setFeedback(feedback.filter((item) => item.id !== id
        ))
        }
    })
  return (
    <>
    <Header />
    <div className="container">
        <FeedbackForm />
        <FeedbackStats feedback={feedback}/>
        <Feedbacklist feedback = {feedback} handleDelete={deleteFeedback}/>
    </div>
    </>
  )
}

export default App
