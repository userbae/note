import Link from "next/link";
import LoginBtn from "../../components/LoginBtn";
import styled from "./LogOut.module.css";

export default function LogOutPage() {
  return (
    <div className={styled.wrap}>
      <div>
        <h1>MY Note</h1>
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <LoginBtn />
        <button>
          <Link href="/register">회원가입</Link>
        </button>
      </div>
    </div>
  );
}
