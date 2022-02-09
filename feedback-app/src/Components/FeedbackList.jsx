import FeedbackItem from "./FeedbackItem";
import PropTypes from 'prop-types';

const FeedbackList = ({feedback}) => {
    if(!feedback || feedback.length === 0)
    {
        return <div>No Feedback Yet</div>
    }
    return ( 
        <div className="feedback-list">
           {
               feedback.map((item) => (
                   <FeedbackItem key={item.id} item={item} />
               ))
           }
        </div>
     );
}

FeedbackList.propTypes = {
    feedback : PropTypes.arrayOf({
        id:PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        rating : PropTypes.number.isRequired
    })
}
 
export default FeedbackList;