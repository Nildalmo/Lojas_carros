 "use client"

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500;600&display=swap');

* {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    text-decoration: none;
  }

body{
    display:flex;
    flex-direction:column;
    justify-content:space-between;
     text-align: center;
     position: relative;
     background-color:#D3D3D3;
     border-color: #f0f0f0;
     min-height:100vh;   

    }

.header Img {
    align-items:center;
    }
 
.container{
     
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      padding: 0;
      margin: 0;
      list-style: none;
      width: 100%;
      color: white;
      font-family: 'Poppins', sans-serif;
      font-size: 20px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 2px;
      text-decoration: none;
      transition: all 0.3s ease-in-out;
      cursor: pointer;
    }

.container div{
      border: 1;
     
    }

label {
  display: inline-block;
  margin-bottom: 20px;
  font-weight: bold;
  width: 80%;
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 5px;
     
}

ul span {
  margin-bottom: 20px;
  font-weight: bold;
  padding: 8px;
  margin-top: 50px;
  border-radius: 5px;
  position: fixed;
  top: 10px;
  right: 10px;
  
}
   
`;


 export default GlobalStyles;