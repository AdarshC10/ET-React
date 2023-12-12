import React from 'react'
import styled from 'styled-components'

function PageNotFound() {
  return (
    <PageNotFoundStyle>
        
        <div class="container">
             <div class="row">
                  <div class="col-3">

                 </div>
             <div class="col-6">
                <img src="https://1.bp.blogspot.com/-W_8l-L7BARo/Xs0wlcD8GcI/AAAAAAAAJhQ/H5ztSXUAVYIKy2cEynjAOMd1M9qicizcgCLcBGAsYHQ/s1600/404.png" width="600px" height="500px" alt="" />
                 <br/><br/>
                  <button class="btn" routerLink="">Back to Home</button>
                  <br/><br/><br/><br/><br/><br/>
              </div>
        <div class="col-3">

        </div>
    </div>

</div>


    </PageNotFoundStyle>
  )
}
const PageNotFoundStyle =styled.div`
.btn{
  background-color: rgb(6, 44, 98);
  color: white;
  margin-left:200px;
}



`;

export default PageNotFound