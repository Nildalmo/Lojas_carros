"use client";

import { styled } from "styled-components";

export const Div = styled.div`
  height: 80vh;
  padding-top: 1rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
    font-size: large;
    font-family: Arial, Helvetica, sans-serif;
    span {
      padding-top: 2px;
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
    }
  }
  form {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  label {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    font-weight: 400;
    font-size: 16px;
    line-height: 13px;
    margin-bottom: 8px;
    font-family: "Times New Roman", Times, serif;
  }
  input {
    display: flex;
    width: 400px;
    height: 30px;
    border-radius: 12px;
    border: 1px solid #5c73db;
    margin-bottom: 10px;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: none;
    gap: 15px;
    width: 150px;
    height: 42px;
    background: #4763e4;
    border-radius: 12px;
    cursor: pointer;
    color: #f3ecec;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: #2bc12b;
    }
  }
`;
