import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count:0,
    };
    
    render() { 
        
        // React.createElement('h1');
        return ( 
            
            <React.Fragment>
                <span>{this.formateCount()}</span>
                <button onClick={() => this.setState({count: this.state.count + 1})}>Increment</button>
            </React.Fragment>
         );
    }
    formateCount(){
        const {count} = this.state;
        return count === 0 ? 'Zero': count;
    }
}
 
export default Counter;