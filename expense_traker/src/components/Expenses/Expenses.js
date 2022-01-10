import React, {useState} from 'react'
// import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter.js'
import ExpensesList from './ExpensesList'

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = (selectedYear) => {
    // console.log(selectedYear)
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <>  
      <div>
        <Card className='expenses'>
          <ExpenseFilter
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}
          />
          <ExpensesList item={filteredExpenses} />
        </Card>
      </div>
    </>
  );
}

export default Expenses;
