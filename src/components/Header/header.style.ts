"use client";

import { styled } from "styled-components";


export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content:center;
  height:80px;
  padding: 0;
  margin: 0;
  background-color: #ffff00;

  form{
    width:15rem;
    left:9px;
    word-spacing: 5px;
  }
  ul {
    align-content:stretch;
    display: flex;
    align-items: center;
    word-spacing: 100%;
    justify-content:flex-end;
    list-style: none;
    width: 70%;
    height: 100%;
    font-size: x-large;
    margin-right:100px;
    word-spacing: 5px;
    
  }

   img {
    width:100px;
    height:100; 
    position: fixed;
    top:-3px;
    left:-10px;
    padding:0;
    
  }

  text{
  color:black;
  align-items: center;
  justify-content: center;
  position: absolute;
  font-size:3rem;
  font-family:'Times New Roman', Times, serif;
  }

  `;

  export const Button = styled.button`
    
    left:9px;
    transform: scale(1.1);
    cursor: pointer;
    transition: all 0.3s ease-in-out; 
    &:hover {background-color:#00FF00;}

  `;

export const Li = styled.li` 
   justify-items: end;
   font-size:1.2rem;
  
`;









 
