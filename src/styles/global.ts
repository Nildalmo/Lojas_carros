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
     text-align: center;
     position: relative;
     background-color:#D3D3D3;
     border-color: #f0f0f0;
   
    }
    .header Img {
    align-items: center;
     
     
    }

   
   
     /* nav {
   
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      padding: 0;
      margin: 0;
      list-style: none;
      width: 100%;
      height: 15vh;
      background-color: #ffff00;

    } 


   /* li{
      display: inline-block;
      margin: 0 10px;
      padding: 10px;

    

    }*/ 

    section h2{
      font-family:'Helvetica',sans-serif;
      text-align: center;
      font-weight: bold;
      font-size: 40px;
      font-weight: 200;
      color: #000000;
      margin-bottom: 20px;
      text-decoration:underline;
       
    } 

    /*a{
      text-decoration: none;
      color: #000000;
      font-size: 15px;
      font-weight: 200;
      margin-right:30px;

    }*/

    button input{
      display: flex;
      margin: 0 auto;
      padding: 10px;
      border-radius: 2px;
      transition: all 0.3s ease-in-out;
      cursor: pointer;
      width: 60%;
      height: 60%;
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
      height: 15vh;
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
   /*forms {
      
      max-width: 600px;
      margin:0 auto;
      padding: 53px;
      border-radius: 10px;
      background-color: #ffff00;
      margin-top: 309px;

}*/
/*{
  background-image: url('baixados.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  margin: 0; 
  padding: 0;
  display: flex; 
  justify-content: center;
  align-items: center; 
  height: 100vh; 
}*/
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