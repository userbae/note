import LogOutPage from "@/app/LogOutPage/LogOutPage";
import LoginPage from "@/app/LoginPage/LoginPage";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function Home() {
  let session = await getServerSession(authOptions);
  return (
    <div>{session ? <LoginPage session={session} /> : <LogOutPage />}</div>
  );
}
