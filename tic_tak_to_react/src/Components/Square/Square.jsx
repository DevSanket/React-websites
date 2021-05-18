import React from 'react';
import Circle from '../Circle/Circle';
import Cross from '../Cross/Cross';
import './Square.css';


const EMPTY = 'EMPTY';
const CIRCLE = 'CIRCLE';
const CROSS = 'CROSS';

const Square = ({position,value,takeTurn}) => {
    // const { position } = this.props;
    const handleClick = () => {
        if(value === EMPTY) takeTurn(position)
    }
    return (
        <div className="square" onClick={handleClick}>
            {value === CIRCLE && <Circle />}
            {value === CROSS && <Cross />}
        </div>
     );
}

export default Square;
