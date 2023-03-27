import { FaTimes } from "react-icons/fa";
import { useContext } from "react";
import Card from "./share/Card";
import FeedbackContext from "../context/FeedbackContext";


function FeedbackItem({ item }) {
    const {deleteFeedback} = useContext(FeedbackContext)
  return (
    <Card reverse={true}>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="purlple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
