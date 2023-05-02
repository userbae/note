"use client";

import styled from "./write.module.css";
import BackBtn from "@/components/BackBtn";
import Preview from "@/components/Preview";
import { useState } from "react";

export default function Write() {
  let [title, setTitle] = useState("");
  let [content, setContent] = useState("");
  return (
    <div className={styled.wrap}>
      <div className={styled.write}>
        <h4>글 작성</h4>
        <form action="/api/post/new" method="POST">
          <input
            name="title"
            placeholder="글제목"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <div className={styled.content}>
            <textarea
              name="content"
              placeholder="글내용"
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />

            <Preview content={content} />
          </div>
          <button type="submit">추가하기</button>
          <BackBtn />
        </form>
      </div>
    </div>
  );
}
