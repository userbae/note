import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import Link from "next/link";
import styled from "./detail.module.css";

export default async function Detail(props) {
  const db = (await connectDB).db("note");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div className={styled.wrap}>
      <div className={styled.nav}>
        <h3>{result.title}</h3>
      </div>
      <hr />
      <pre
        style={{
          wordBreak: "break-all",
          whiteSpace: "pre-wrap",
        }}
      >
        {result.content}
      </pre>
      <div className={styled.bot}>
        <button>수정하기</button>
        <Link href="/">
          <button>홈</button>
        </Link>
      </div>
    </div>
  );
}
