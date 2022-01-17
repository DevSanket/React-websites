import React from 'react';
import './Input.scss';


interface Props {
    label:string;
    value : string;
    setValue :React.Dispatch<React.SetStateAction<string>>;
}


const Input : React.FC<Props> = ({label,value,setValue}) => {
    return (
        <div className='form__group'>
            <input type={label === "Password" ? "password" : "text"} className="form__field" placeholder="Name" name="name" id='name'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required />
            <label  className="form__label">{label}</label>
        </div>
    );
}

export default Input;