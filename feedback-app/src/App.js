import {useState} from 'react'
import Header from "./commponents/Header"
import Feedbacklist from "./commponents/Feedbacklist"
import FeedbackData from "./data/Feedbackdata"

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
        <Feedbacklist feedback = {feedback} handleDelete={deleteFeedback}/>
    </div>
    </>
  )
}

export default App
