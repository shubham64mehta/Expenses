import React from 'react';
//import UserInput from './UserInput';
import './form.css';
import FormButton from '../component/FormButton';


function Form(props) {
  return (
    <div className='form_desgin'>
      <FormButton add={props.add}/>
        
    </div>
  );
}

export default Form;
