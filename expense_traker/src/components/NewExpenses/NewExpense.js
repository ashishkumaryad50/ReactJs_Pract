import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

    const newExpenseDataHandler = (expenses) => {
        const newExpenseData = {
            ...expenses, id: Math.random().toString()
        };
        props.onAddNewExpense(newExpenseData);
        // console.log(newExpenseData);
    }

    return (
        <>
            <div className='new-expense'>
                <ExpenseForm onNewExpenseData={ newExpenseDataHandler}/>
            </div>
        </>
    )
}
export default NewExpense;