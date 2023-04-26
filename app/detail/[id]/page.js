import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import Link from "next/link";

export default async function Detail(props) {
  const db = (await connectDB).db("note");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div>
      <Link href="/">홈으로 가기</Link>
      <h4>상세페이지</h4>
      <h4>{result.title}</h4>
      <hr />
      <p>{result.content}</p>
    </div>
  );
}
