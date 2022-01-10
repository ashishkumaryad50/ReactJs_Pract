import React ,{useState}from 'react'
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

function ExpenseItem(props) {
  // console.log(props)
  const [title, setTitle] = useState(props.title);

  const clickHandler = (e) => {
    setTitle('Clicked');
    console.log('Clicked!!');
  }
  
  return (
    <>
      <li>
        <Card className='expense-item'>
          <ExpenseDate date={props.date} />
          <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
          </div>
          <button onClick={clickHandler}>Click!!</button>
        </Card>
      </li>
    </>
  );
}

export default ExpenseItem;
