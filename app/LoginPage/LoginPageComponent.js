"use client";

import styled from "styled-components";

const Wrap = styled.div`
  height: 100vh;
`;
const Nav = styled.div`
  margin: 10px;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
  }
  a button {
    font-size: 18px;
    width: 100%;
    padding: 10px;
    height: 50px;
    margin-bottom: 10px;
  }
`;
const Main = styled.div`
  margin: 10px;
  div {
    font-size: 20px;
  }
  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 20px;
  }
`;
export { Wrap, Nav, Main };
