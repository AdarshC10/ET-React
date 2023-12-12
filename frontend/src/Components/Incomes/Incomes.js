import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import { useGlobalContext } from "../../context/globalContext";
import Form from "../Form/Form";
import IncomeItem from "../IncomeItem/IncomeItem";
import { rupee } from "../../utils/Icons";

function Incomes() {
  //destructure
  const { addIncome, incomes, getIncomes, deleteIncome, totalIncome } = useGlobalContext();

  useEffect(() => {
    getIncomes();
  }, []);
  return (
    <IncomeStyled>
      <InnerLayout>
        <h2>Incomes</h2>
        <h2 className="total-income">
          Total Income:  <span>{rupee} {totalIncome()}</span>
        </h2>
        <div className="income-content">
          <div className="form-container">
            <Form />
          </div>
          <div className="incomes">
            {incomes.map((income) => {
              const { _id, title, amount, date, category, description } =
                income;
              return (
                <IncomeItem
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount}
                  date={date}
                 
                  category={category}
                  indicatorColor="var(--color-green)"
                  deleteItem={deleteIncome}
                />
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </IncomeStyled>
  );
}
const IncomeStyled = styled.div`
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
export default Incomes;
