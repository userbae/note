import { Wrap } from "./component";
import BackBtn from "@/components/BackBtn";

export default function Write() {
  return (
    <Wrap>
      <h4>글 작성</h4>
      <form action="/api/post/new" method="POST">
        <input name="title" placeholder="글제목" />
        <textarea name="content" placeholder="글내용" />

        <button type="submit">버튼</button>
        <BackBtn />
      </form>
    </Wrap>
  );
}
