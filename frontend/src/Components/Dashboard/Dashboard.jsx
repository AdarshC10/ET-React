import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import Chart from "../Chart/Chart";
import { rupee } from "../../utils/Icons";
import { useGlobalContext } from "../../context/globalContext";
import History from "../../History/History";


function Dashboard() {
  const { totalExpense,incomes,expenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext()

  //render
  useEffect(() => {
    getIncomes();
    getExpenses();
  }, []);

  return (
    <DashboardStyled>
      <InnerLayout>
        <h1>All Transactions</h1>
        <div className="stats-con">
          <div className="chart-con">
            <Chart />
            <div className="amount-container">
              <div className="income">
                <h2>Total Income</h2>
                <p>
                  {rupee} {totalIncome()}
                </p>
              </div>
              <div className="expense">
                <h2>Total Expenses</h2>
                <p>
                  {rupee} {totalExpense()}
                </p>
              </div>
              <div className="balance">
                <h2 >Balance</h2>
                <p>
                  {rupee} {totalBalance()}
                </p>
              </div>
            </div>
          </div>
          <div className="history-con">
          
           <h2 className="salary-title">Min <span>Salary</span>Max</h2>
           <div className="salary-item">
            <p>
             {rupee} {Math.min(...incomes.map(item=> item.amount))}
              
            </p>
            <p>
            {rupee}  {Math.max(...incomes.map(item=>item.amount))}
            </p>
           </div>
           <h2 className="salary-title">Min <span>Expense</span>Max</h2>
           <div className="salary-item">
            <p>
            {rupee}  {Math.min(...expenses.map(item=> item.amount))}
              
            </p>
            <p>
            {rupee}  {Math.max(...expenses.map(item=>item.amount))}
            </p>
           </div>
          </div>
        </div>
      </InnerLayout>
    </DashboardStyled>
  );
}

const DashboardStyled = styled.div`
.stats-con{
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
  .chart-con{
    grid-column: 1 / 4;
    height: 400px;
    .amount-container{
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
      margin-top: 2rem;
      .income, .expense{
        grid-column: span 2;
    }
    .income, .expense, .balance{
      background: black;
      color:rgb(91, 155, 228);
      border: 2px solid #FFFFFF;
      box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
      border-radius: 20px;
      padding: 1rem;
      p{
        font-size: 2.3rem;
        font-weight: 700;
      }
      h2{
        color:red;
      }
    }
    .balance{
      grid-column: 2 / 4;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      
      p{
        color: var(--color-green);
        // opacity: 0.6;
        font-size: 3.1rem;
      }
     
    }
     
  }
}
.history-con{
  grid-column: 4 / -1;
  h2{
    margin: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.salary-title{
  font-size: 1.2rem;
  color:rgba(34, 34, 96, 1);
  span{
    font-size: 1.8rem;
  }
 

}
.salary-item{
  background: #FCF6F9;
  color:black;
  border: 2px solid #FFFFFF;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
  padding: 1rem;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p{
    font-weight: 600;
    font-size: 1.3rem;
}

}


}


`;
export default Dashboard;
