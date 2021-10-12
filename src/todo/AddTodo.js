import React, {useState} from 'react';
import PropTypes from 'prop-types';



function AddTodo({onCreate}) {
    const [value, setValue] = useState('');
    
    
    function submitHandler(event){
        event.preventDefault();
        
        if (value.trim()){
            onCreate(value);
        }
    }
    
    
    return (
        
        <form style={{marginBottom: '1rem'}} onSumbit={submitHandler} >
        
            <input value={value} onChange={event => setValue(event.target.value)} type="text" />    
            <button type="sumbit" onClick={submitHandler}> Add Todo </button>
        
        </form>
    )
}


AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}


export default AddTodo