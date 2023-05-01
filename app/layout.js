import { getServerSession } from "next-auth";
import "./globals.css";
import { Inter } from "next/font/google";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Pc from "./pc/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Note Pad",
  description: "bea",
};

export default async function RootLayout({ children }) {
  let session = await getServerSession(authOptions);
  return (
    <html lang="ko">
      <body>
        {session ? (
          <div className="pcnav">
            <Pc session={session} />
          </div>
        ) : null}
        {children}
      </body>
    </html>
  );
}
