import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: [],
  };

  //Bind Methods

//   constructor(){
//     super();
//     this.HandleIncrement = this.HandleIncrement.bind(this);
//   }

//   HandleIncrement(){
//     this.setState({count : this.state.count + 1})
// }

//Another way
// Create function to arrow function
HandleIncrement = (product) => {
    console.log(product);
    this.setState({count : this.state.count + 1})
}

doHandleIncrement = () => {
    this.HandleIncrement({id:1})
}

  // styles = {
  //     fontSize:25,
  //     fontWeight:'bold'
  // }

  render() {
    // React.createElement('h1');
    return (
      <div>
        <span style={{ fontSize: 16 }} className={this.getBadgeClasses()}>
          {this.formateCount()}
        </span>
        <button
          className="btn btn-secondary btn-sm"
        //   onClick={this.doHandleIncrement}
        onClick={ () => this.HandleIncrement({id:1})}
        >
          Increment
        </button>
        <br></br>
        {/* Understanding Rendering List  */}
        {/* <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
        {/* {
            this.state.tags.length === 0 && "Please Create a New Tag"
        }
        {
            this.renderTags()
        } */}

        

      </div>
    );
  }

//   renderTags(){
//       if(this.state.tags.length === 0) return <p>There are no tags</p>;
//       return <ul>
//       {this.state.tags.map((tag) => (
//         <li key={tag}>{tag}</li>
//       ))}
//     </ul>
//   }

  getBadgeClasses() {
    let classes = "badge m-4 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

 

  formateCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
