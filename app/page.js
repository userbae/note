import LogOutPage from "@/app/LogOutPage/LogOutPage";
import LoginPage from "@/app/LoginPage/page";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function Home() {
  let session = await getServerSession(authOptions);
  return (
    <div>
      {session ? (
        <div>
          <LoginPage session={session} />
        </div>
      ) : (
        <LogOutPage />
      )}
    </div>
  );
}
