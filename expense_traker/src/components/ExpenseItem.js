import './ExpenseItem.css'

const ExpenseItem = () => {
  const expenseDate = new Date(2020, 3, 12);
  const expenseTitle = 'Room Rent ';
  const expenseAmount = 300.00;
    return (
        <>
            <div  className="expense-item">
              <div>{expenseDate.toISOString()}</div>
              <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">${expenseAmount}</div>
              </div>
            </div>
        </>
    );
}

export default ExpenseItem;