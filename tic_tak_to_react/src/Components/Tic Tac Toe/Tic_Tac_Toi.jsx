import React from 'react';
import Result from '../Result/Result';
import Square from '../Square/Square';
import './Tic.css';

const EMPTY = 'EMPTY';
const CIRCLE = 'CIRCLE';
const CROSS = 'CROSS';

const TicTocToe = () => {
  const [state,setState ] = React.useState({
    player : CROSS,
    position : [
      EMPTY,EMPTY,EMPTY,
      EMPTY,EMPTY,EMPTY,
      EMPTY,EMPTY,EMPTY
    ]
  });

  function reset(){
    setState({
      player:CIRCLE,
      position : [
        EMPTY,EMPTY,EMPTY,
        EMPTY,EMPTY,EMPTY,
        EMPTY,EMPTY,EMPTY
      ]

    })
  }

  const takeTurn = (position) => {
    const positions = [...state.position];
    positions[position] = state.player;

    setState({
      player:state.player === CIRCLE ? CROSS : CIRCLE,
      position : positions
    })
  }

 

  const detectWinner= (p) => {
    if(p[0] === CIRCLE && p[1] === CIRCLE && p[2] === CIRCLE) return CIRCLE;
    if(p[3] === CIRCLE && p[4] === CIRCLE && p[5] === CIRCLE) return CIRCLE;
    if(p[6] === CIRCLE && p[7] === CIRCLE && p[8] === CIRCLE) return  CIRCLE;
    if(p[0] === CIRCLE && p[3] === CIRCLE && p[6] === CIRCLE) return CIRCLE;
    if(p[1] === CIRCLE && p[4] === CIRCLE && p[7] === CIRCLE) return CIRCLE;
    if(p[2] === CIRCLE && p[5] === CIRCLE && p[8] === CIRCLE) return CIRCLE;
    if(p[0] === CIRCLE && p[4] === CIRCLE && p[8] === CIRCLE) return CIRCLE;
    if(p[2] === CIRCLE && p[4] === CIRCLE && p[6] === CIRCLE) return CIRCLE;
    if(p[0] === CROSS && p[1] === CROSS && p[2] === CROSS) return CROSS;
    if(p[3] === CROSS && p[4] === CROSS && p[5] === CROSS) return CROSS;
    if(p[6] === CROSS && p[7] === CROSS && p[8] === CROSS) return  CROSS;
    if(p[0] === CROSS && p[3] === CROSS && p[6] === CROSS) return CROSS;
    if(p[1] === CROSS && p[4] === CROSS && p[7] === CROSS) return CROSS;
    if(p[2] === CROSS && p[5] === CROSS && p[8] === CROSS) return CROSS;
    if(p[0] === CROSS && p[4] === CROSS && p[8] === CROSS) return CROSS;
    if(p[2] === CROSS && p[4] === CROSS && p[6] === CROSS) return CROSS;
    if(p.every(p => p !== EMPTY)) return 'It is a tie';
  }

  const winner = detectWinner(state.position);

    return (
    <div className="tic">
      <div className="tic_tac_toe">
        <Square position={0} value={state.position[0]} takeTurn = {takeTurn} />
        <Square position={1} value={state.position[1]} takeTurn = {takeTurn} />
        <Square position={2} value={state.position[2]} takeTurn = {takeTurn} />
        <Square position={3} value={state.position[3]} takeTurn = {takeTurn} />
        <Square position={4} value={state.position[4]} takeTurn = {takeTurn} />
        <Square position={5} value={state.position[5]} takeTurn = {takeTurn} />
        <Square position={6} value={state.position[6]} takeTurn = {takeTurn} />
        <Square position={7} value={state.position[7]} takeTurn = {takeTurn} />
        <Square position={8} value={state.position[8]} takeTurn = {takeTurn} />
    </div>
    {winner && <Result winner={winner} reset={reset}/>}
    </div>
    );
}

export default TicTocToe;
