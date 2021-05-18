import React from 'react';
import './Result.css';

const CIRCLE = 'CIRCLE';
const CROSS = 'CROSS';

const Result = ({winner,reset}) => {
    return ( 
        <div className="result">
            {winner === CIRCLE && 'Circle won The Game'}
            {winner === CROSS && 'CROSS won The Game'}
            {winner === 'It is a tie' && 'It is a Tie'}
            <button onClick={reset}>Reset</button>
        </div>
     );
}
 
export default Result;