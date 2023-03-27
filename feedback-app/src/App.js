
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FeedbackProvider } from "./context/FeedbackContext";
import Header from "./commponents/Header";
import Feedbacklist from "./commponents/Feedbacklist";
import FeedbackStats from "./commponents/FeedbackStats";
import FeedbackForm from "./commponents/FeedbackForm";
import About from "./pages/About";
import AboutIcounLink from "./commponents/AboutIcounLink";

function App() {
  return (
    <FeedbackProvider>
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm />
                <FeedbackStats />
                <Feedbacklist />
                <AboutIcounLink />
                
              </>
            }
          ></Route>

          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
    </FeedbackProvider>
  );
}

export default App;
