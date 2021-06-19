import React from 'react';
import './ShowGoals.scss';

const SeeGoals = () => {
    return ( 
        <div className="user-goals gradient-border">
            <div className="title">Goals</div>
            <span className="line"></span>
            <div className="list-goals">
                <div className="goal">
                    <div className="goal-amount">₹ 20,000</div>
                    <p className="goals-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam adipisci sit hic voluptatem ab harum! Earum id vel quis minima veritatis qui illo ab mollitia molestiae nemo, reprehenderit laboriosam obcaecati illum harum facilis dolores aperiam ex porro, maiores itaque omnis quibusdam recusandae repellat. Temporibus incidunt quis aut nisi itaque voluptatum perferendis, blanditiis nobis praesentium dolor. Eos molestiae vero enim, inventore quod nostrum quae in nulla expedita laudantium
                    </p>
                    <div className="due-date">Before - 24 Jul 2021</div>
                </div>
            </div>
        </div>
     );
}
 
export default SeeGoals;