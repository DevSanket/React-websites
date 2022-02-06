import React from 'react';


// function App(){
//     return React.createElement('div',{className:'container'},
//     React.createElement('h1',{},'My App'))
// }

const App = () => {
    const title = 'Blog Post';
    const body = 'This is my blog Post';
    const comments = [
        {id:1,text: 'Comment one'},
        {id:2,text: 'Comment two'},
        {id:3,text: 'Comment three'}
    ]

    return ( 
        <div className="container">
            <h1>{title}</h1>
            <p>{body}</p>
            <div className="comments">
                <h3>Comments ({
                    
                    comments.length
                    })</h3>

                    <ul>
                        {comments.map((comment,index) => (
                            <li key={comment.id}>{comment.text}</li>
                        ))}
                    </ul>
            </div>
        </div>
     );
}
 
export default App;

