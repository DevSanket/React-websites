import React from 'react';
import './AddData.scss';
import ExpenseCard from '../../Components/Expense_Card/expense_card';
import IncomeCard from '../../Components/Income_Card/income_card';

const AddData = () => {
    return ( 
        <div className="addData">
            <ExpenseCard />
            <IncomeCard />
        </div>
     );
}
 
export default AddData;