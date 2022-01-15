import React, {  useState } from 'react';
import './App.css';
import InputField from './Components/InputField';
import { Todo } from './Components/Model';
import TodoList from './Components/TodoList';

 // function App() {
//   return (
//     <div className="App"> 
//      Hi
//     </div>
//   );
// }

const App : React.FC = () =>  {



  const [todo,setTodo] = useState<string | number>('');

  const [todos,setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if(todo)
    {
      setTodos([...todos,{id:Date.now(),todo:todo,isDone:false}])
    }
    setTodo('');

    
  };
  console.log(todos);
  

  return (

    <div className="App">
      <span className="heading">
        Taskify
      </span>
      <InputField todo={todo} setTodo={setTodo}
      handleAdd={handleAdd}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>

  )
}

export default App;
