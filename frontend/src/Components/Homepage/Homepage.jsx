import React, { useState } from "react";
import styled from "styled-components";
import { MainLayout } from "../../styles/Layouts";
import Blink from "../Blink/Blink";
import Navigation from "../Navigation/Navigation";
import Dashboard from "../Dashboard/Dashboard";
import Incomes from "../Incomes/Incomes"
import Expenses from "../Expenses/Expenses";
import backbg from "../../img/backbg.png"
import Transactions from "../Transactions/Transactions";

function Homepage() {
  const [active, setActive] = useState(1);

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Transactions />;
      case 3:
        return <Incomes />;
      case 4:
        return <Expenses />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <AppStyled bg={backbg} className="App">
      <Blink />
      <MainLayout>
        <Navigation active={active} setActive={setActive} />

        <main>{displayData()}</main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    margin: 2px;
    height: 750px;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default Homepage;
