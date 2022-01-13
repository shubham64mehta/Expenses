import React from 'react';
import{useState} from 'react';
import UserInput from '../userinput/UserInput';
import './FormButton.css';
function FormButton(props){

    const[buttonstate,setbuttonstate]=useState(false);

    function buttonHandler(){
        setbuttonstate(true);
    }

    function oncancelHandler(){
        setbuttonstate(false);
    }
    function adddata(data){//passing data from child to parent
        const formdata={
          title:data.title,
          amount:data.amount,
          date:data.date,
          id:Math.random().toString()
        }
        //console.log(formdata);
        props.add(formdata);
    
      }
    if(buttonstate===false)
    {
        return(
            <div className='button_position1'>
            <button className='action1' onClick={buttonHandler}>
                Add Expenses
            </button>
        </div>
        );
    }

    return(
        <UserInput onSavedForm={adddata} oncancelHandler={oncancelHandler}/>
    );

}

export default FormButton;