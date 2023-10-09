"use client";

import { styled } from "styled-components";

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content:center;
  width: auto;
  height:60px;
  padding: 0;
  margin: 0;
  background-color: #ffff00;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    list-style: none;
    width: 80%;
    height: 100%;
    font-size: x-large;
    margin-right:10px;
  }

  img {
    position: absolute;
    top:-10px;
    left:-10px;
    transition: transform 0.2s;
  }

  &:hover img {
    transform: scale(1.1);
  }
  .flex{
    
  }
  
  `;



 
