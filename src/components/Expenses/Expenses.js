import React, { useState } from 'react';
import ExpenseChart from './ExpensesChart';
import ExpenseFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import Card from "../UI/Card";
import './Expenses.css';

function Expenses(props){
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear =>{
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense =>{
        return expense.date.getFullYear().toString() === filteredYear;
    });

    

    return(
        <Card className="expenses">        
         <ExpenseFilter selected={filteredYear} onChangeFilter ={filterChangeHandler}/>
         <ExpenseChart expenses = {filteredExpenses}/>
         <ExpensesList items ={filteredExpenses}/>
        </Card>
    );
        
    
};

export default Expenses;