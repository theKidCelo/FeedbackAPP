import {FaTimes} from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from "./share/Card"


function FeedbackItem({item, handleDelete}) {
  return (
    <Card reverse={true}>
        <div className="num-display">{item.rating}</div>
        <button onClick={() => handleDelete(item.id)} className="close">
            <FaTimes color="purlple" />
        </button>
        <div className="text-display">{item.text}</div>
      
    </Card>
  )
}

export default FeedbackItem
