import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import { useGlobalContext } from "../../context/globalContext";

import IncomeItem from "../IncomeItem/IncomeItem";
import { expenses, rupee } from "../../utils/Icons";
import ExpenseForm from "./ExpenseForm";

function Expenses() {
  //destructure
  const { addExpense, expenses, getExpenses, deleteExpense, totalExpense } = useGlobalContext();

  useEffect(() => {
    getExpenses();
  }, []);
  return (
    <ExpenseStyled>
      <InnerLayout>
        <h2>Expenses</h2>
        <h2 className="total-income">
          Total Expense:  <span>{rupee} {totalExpense()}</span>
        </h2>
        <div className="income-content">
          <div className="form-container">
            <ExpenseForm />
          </div>
          <div className="incomes">
            {expenses.map((income) => {
              const { _id, title, amount, date, category, description,type } =
                income;
              return (
                <IncomeItem
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount}
                  date={date}
                  type={type}
                  category={category}
                  indicatorColor="var(--color-green)"
                  deleteItem={deleteExpense}
                />
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </ExpenseStyled>
  );
}
const ExpenseStyled = styled.div`
  display: flex;
  overflow: auto;
  .total-income{
    font-size: 2rem;
    color: red;
    margin-bottom: 10px;
    text-align: center;
    padding:20px;
    background:black;
    border:2px solid #FFFFFF;
    border-radius:20px;
  }
  span{
    color:var(--color-green);
    
  }

  .income-content {
    display: flex;
    gap: 2rem;
    .incomes {
      //for remaining space
      flex: 1;
    }
  }
`;
export default Expenses;
