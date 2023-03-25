import {useState} from 'react'
import Header from "./commponents/Header"
import Feedbacklist from "./commponents/Feedbacklist"
import FeedbackData from "./data/Feedbackdata"

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

  return (
    <>
    <Header />
    <div className="container">
        <Feedbacklist feedback = {feedback} />
    </div>
    </>
  )
}

export default App
