import Link from "next/link";
import LogOutBtn from "../../components/LogOutBtn";
import { Nav, Wrap, Main } from "./LoginPageComponent";
import NoteList from "./NoteList";
import { connectDB } from "@/util/database";
import Ad from "@/components/Ad";

export default async function LoginPage({ session }) {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <Wrap>
      <Nav>
        <div>
          {session.user.name}님의 메모장
          <LogOutBtn />
        </div>

        <Link href="/write">
          <button>메모장 추가하기</button>
        </Link>
      </Nav>
      <Main>
        <NoteList />
      </Main>
      <Ad />
    </Wrap>
  );
}
