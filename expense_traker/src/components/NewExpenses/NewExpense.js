import React,{useState} from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);
    const newExpenseDataHandler = (expenses) => {
        const newExpenseData = {
            id: Math.random().toString(),...expenses
        };
        props.onAddNewExpense(newExpenseData);
        setIsEditing(false);
        // console.log(newExpenseData);
    }
    const startEditingHandler = () => {
        setIsEditing(true);
    }
    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    return (
        <>
            <div className='new-expense'>
                {!isEditing && <button onClick={startEditingHandler}>Add Expenses</button>}
                {isEditing && <ExpenseForm onNewExpenseData={newExpenseDataHandler} onCancel={stopEditingHandler}/>}
            </div>
        </>
    )
}
export default NewExpense;