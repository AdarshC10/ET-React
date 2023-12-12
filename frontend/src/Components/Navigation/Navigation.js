import React, { useState } from 'react'
import styled from 'styled-components'

import { menuItems } from '../../utils/menuItems'


import { signout } from '../../utils/Icons'


import user_avatar from '../../img/user_avatar.png'
import Signup from '../Signup/Signup'





function Navigation({active,setActive}) {
    

   
  

    
  return (
    <NavStyled>
        <div className="user-con">
            <img src={user_avatar} alt="" />
            <div className="text">
                <h2>Adarsh</h2>
                <p>Your Money</p>
            </div>
        </div>
        <ul className="menu-items">
                    {
                        menuItems.map((item)=>{
                            return <li key ={item.id}
                                    onClick={()=>setActive(item.id)}
                                    className={active === item.id ? 'active' : ''}
                            >
                                {item.icon}
                                <span>{item.title}</span>
                            </li>
                        })
                    }
                    
        </ul>
       
        <div className="bottom-nav">
          <a href='./login' className='signout'>  {signout} Sign Out</a>
        
        
         
       
           
        
           
        </div>
        
    </NavStyled>
  )
}

const NavStyled = styled.nav`
    padding: 2rem 1.5rem;
    width: 344px;
    height:750px;
    padding:2rem;
    float:left;
    margin-right:20px;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    gap: 2rem;
    .user-con{
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;
        img{
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            background: #fcf6f9;
            border: 2px solid #FFFFFF;
            padding: .2rem;
            box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
        }
        h2{
            color: rgba(34, 34, 96, 1);
        }
        p{
            color: rgba(34, 34, 96, .6);
        }
    }

    .menu-items{
        flex: 1;
        display: flex;
        flex-direction: column;
        li{
            display: grid;
            grid-template-columns: 40px auto;
            align-items: center;
            margin: .6rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all .4s ease-in-out;
            color: rgba(34, 34, 96, .6);
            padding-left: 1rem;
            position: relative;
            i{
                color: rgba(34, 34, 96, 0.6);
                font-size: 1.4rem;
                transition: all .4s ease-in-out;
            }
        }
    }

    .active{
        color: rgba(34, 34, 96, 1) !important;
        i{
            color: rgba(34, 34, 96, 1) !important;
        }
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: #222260;
            border-radius: 0 10px 10px 0;
        }
    }
    .bottom-nav{
        cursor: pointer;
       
        .signout{
            text-decoration:none;
            color:gray;
            transition: all .4s ease-in-out;
        }
    }
    .signout:hover{
       color: #222260;
    }
`;

export default Navigation