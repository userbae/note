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
    width: 100%;
    margin-bottom: 15px;
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
    margin-bottom: 10px;
  }
`;
export { Wrap, Nav, Main };
