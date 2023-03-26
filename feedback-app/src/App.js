import {v4 as uuidv4} from 'uuid'
import {useState} from 'react'
import Header from "./commponents/Header"
import Feedbacklist from "./commponents/Feedbacklist"
import FeedbackStats from "./commponents/FeedbackStats"
import FeedbackData from "./data/Feedbackdata"
import FeedbackForm from "./commponents/FeedbackForm"

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

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
        <FeedbackForm handleAdd={addFeedback}/>
        <FeedbackStats feedback={feedback}/>
        <Feedbacklist feedback = {feedback} handleDelete={deleteFeedback}/>
    </div>
    </>
  )
}

export default App
