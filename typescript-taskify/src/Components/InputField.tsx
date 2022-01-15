import React, { useRef } from 'react';
import './InputStyle.css';

type Props ={
    todo:string | number;
    setTodo : React.Dispatch<React.SetStateAction<string | number>>;
    handleAdd: (e : React.SyntheticEvent) => void;
}

const InputField: React.FC<Props> = ({todo,setTodo,handleAdd}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <form className='input' onSubmit={(e) => {
            handleAdd(e);
            inputRef.current?.blur()
        }}>
            <input type='text' value={todo}
            ref={inputRef}
            onChange={(e) => setTodo(e.target.value)}
            placeholder='Enter a task' className='input_box' />
            <button className='input_submit'>Go</button>
        </form>
    );
}

export default InputField;