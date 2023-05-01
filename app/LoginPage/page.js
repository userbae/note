import Link from "next/link";
import LogOutBtn from "../../components/LogOutBtn";
import NoteList from "./NoteList";
import { connectDB } from "@/util/database";

import styled from "./LoginPage.module.css";

export default async function LoginPage({ session }) {
  const db = (await connectDB).db("note");
  let result = await db.collection("post").find().toArray();

  return (
    <div className={styled.wrap}>
      <div className={styled.nav}>
        <div>
          {session.user.name}님의 메모장
          <LogOutBtn />
        </div>

        <Link href="/write">
          <button>메모장 추가하기</button>
        </Link>
      </div>
      <div className={styled.main}>
        <NoteList />
      </div>
    </div>
  );
}
