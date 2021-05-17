import React, { Component } from 'react';
import Movies from './Components/Movies';

class Vidly extends Component {
    state = {  }
    render() { 
        return ( 
            <main className="container">
                <Movies/>
            </main>
         );
    }
}
 
export default Vidly;
