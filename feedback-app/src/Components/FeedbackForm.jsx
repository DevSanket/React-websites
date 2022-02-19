import { useState } from "react";
import Button from "./shared/Button";
import Card from "./shared/Card";

const FeedBackForm = () => {
    const [text,setText] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message,setMessage] = useState('');

    const handleTextChange = (e) => {
        if(text === ''){
            setBtnDisabled(true);
            setMessage(null);
        }else if(text !== '' && text.trim().length <= 10){
            setBtnDisabled(true);
            setMessage('You need atleast 10 characters');
        }else{
            setBtnDisabled(false);
            setMessage(null);
        }
        setText(e.target.value);
    }
    return ( 
        <Card>
            <form>
                <h2>How would you rate your service with us?</h2>
                {/* todo rating select component  */}
                <div className="input-group">
                    <input 
                    onChange={handleTextChange}
                    value={text}
                    type="text" placeholder="Write a review" />
                    <Button type="submit" isDisabled={btnDisabled}>Send</Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
        </Card>
     );
}
 
export default FeedBackForm;