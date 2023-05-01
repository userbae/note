"use client";

import styled from "./write.module.css";
import BackBtn from "@/components/BackBtn";
import Preview from "../preview/page";
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
          <textarea
            name="content"
            placeholder="글내용"
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />

          <button type="submit">추가하기</button>
          <BackBtn />
        </form>
      </div>

      <div>{title}</div>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
      <Preview title={title} />
    </div>
  );
}
