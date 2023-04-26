import Link from "next/link";
import LoginBtn from "../../components/LoginBtn";

export default function LogOutPage() {
  return (
    <div>
      <div>
        <LoginBtn />
        <button>
          <Link href="/register">회원가입</Link>
        </button>
      </div>
    </div>
  );
}
