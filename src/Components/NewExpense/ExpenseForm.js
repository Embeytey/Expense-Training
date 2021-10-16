import React,{useState} from "react";
import './ExpenseForm.css'

const ExpenseForm=()=>{
   
    const [enteredTitle,setEnteredTitle]=useState('');
    const [enetredAmount, setEnteredAmount]=useState('');
    const [enteredDate, setEnteredDate]=useState('');

    const changeTitleHandler=(event)=>{
        setEnteredTitle(event.target.value);
    }
    const changeAmountHandler=(event)=>{
        setEnteredAmount(event.target.value);
    }

    const changeDateHandler=(event)=>{
        setEnteredDate(event.target.value);
    }

    const submitHanler=(event)=>{
        event.preventDefault();

        const expenseData={
            title:enteredTitle,
            Amount:enetredAmount,
            date: new Date(enteredDate)
        }
        console.log(expenseData);
    }


    return(
        <form onChange={submitHanler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" onChange={changeTitleHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='Number' min="0.01" step="0.01" onChange={changeAmountHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min="2019-01-01"  max="2022-12-30" onChange={changeDateHandler} />
                </div>
            </div>
            <div className="new-expense__action">
             <button type="submit">Add Expense</button>
            </div>    
        </form>
    );

}

export default ExpenseForm;