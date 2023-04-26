"use client";

import styled from "styled-components";

export default function Ad() {
  return (
    <Wrap>
      <div>광고</div>
    </Wrap>
  );
}

const Wrap = styled.div`
  position: absolute;
  bottom: 0;
  left: 10px;
  width: 95%;
  height: 80px;
  background: pink;
`;
