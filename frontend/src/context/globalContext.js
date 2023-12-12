import axios from "axios"
import React, { createContext, useContext, useState } from "react"

const BASE_URL = "http://localhost:3001/api/v1/";

const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) =>{
    const [incomes ,setIncomes] = useState([])
    const [expenses ,setExpense] = useState([])
    const [error ,setError]= useState(null)
   

    const addIncome = async(income) =>{
        const response =await axios.post(`${BASE_URL}add-income`,income)
        .catch((err)=>{
            setError(err.response.data.message)
        })
        getIncomes()
    }

    const getIncomes =async()=>{
        const response =await axios.get(`${BASE_URL}get-incomes`)
        setIncomes(response.data)
        console.log(response.data);
    }

//delete income
const deleteIncome = async (id) => {
    const res  = await axios.delete(`${BASE_URL}delete-income/${id}`)
    getIncomes()
};

//total income
const totalIncome = () => {
    let totalIncome = 0;
    incomes.forEach((income) =>{
        totalIncome = totalIncome + income.amount
    })

    return totalIncome;
}
console.log('total', totalIncome());

//add expense
const addExpense = async (income) => {
    const response  = await axios.post(`${BASE_URL}add-expense`,income)
    .catch((err)=>{
        setError(err.response.data.message)
    })
    getExpenses()
}
//get all expenses
const getExpenses = async () => {
    const response  = await axios.get(`${BASE_URL}get-expenses`)
    setExpense(response.data)
    console.log(response.data);
}
//delete expense
const deleteExpense = async (id) => {
    const res  = await axios.delete(`${BASE_URL}delete-expense/${id}`)
    getExpenses()
}
//total Expense
const totalExpense = () => {
    let totalIncome = 0;
    expenses.forEach((income) =>{
        totalIncome = totalIncome + income.amount
    })

    return totalIncome;


}
//total Balance
const totalBalance = () => {
    return totalIncome() - totalExpense()
    }

//transaction history
const transactionHistory = () => {
    let history = []
    incomes.forEach((income) =>{
        history.push({
            type: 'income',
            title:income.title,
            amount: income.amount,
            description:income.description,
            date: income.date
        })
    });
    expenses.forEach((expense) =>{
        history.push({
            type: 'expense',
            title:expense.title,
            amount: expense.amount,
            description:expense.description,
            date: expense.date
        })
    });
    
    return history.slice(0,4);
}








    return(
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            totalIncome,
            expenses,
            addExpense ,
            getExpenses,
            deleteExpense ,
            totalExpense,
            totalBalance,
            transactionHistory,
            error,
            setError,
           
        }} >
                {children}
        </GlobalContext.Provider>
    )

}

export const useGlobalContext =()=>{
    return useContext(GlobalContext);

}