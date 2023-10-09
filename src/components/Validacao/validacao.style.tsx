"use client";

import { styled } from "styled-components";

export const Div = styled.div`
  width: 550px;
  margin: 0 auto;
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #ffff00;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  margin-top: 150px;
`;

export const body = styled.body`
  display: flex;
  justify-content: center;
  padding: 10rem;
  margin: 150px;
  list-style: none;
  width: 100%;
  height: 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 6px;
  font-weight: bold;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: red;
  }
`;
export const Form = styled.form`
  display: inline-block;
  margin: 20px;
  padding: 10px;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Small = styled.small`
  display: block;
  margin-top: 10px;
  text-align: center;
  color: #007bff;
  text-decoration: none;
`;
