import React from 'react'
import History from "../../History/History";
import styled from 'styled-components';
function Transactions() {
  return (
    <TransactionStyled  >
      <div className='history-con'>
      <History/>
      </div>
    
     
    </TransactionStyled>
  )
}
const TransactionStyled = styled.div `
.history-con{
  
 padding:20px;

}

`;


export default Transactions