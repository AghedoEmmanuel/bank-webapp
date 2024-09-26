import MobileNav from "@/components/MobileNav";
import SideBar from "@/components/SideBar";
import { getLoggedInUser } from "@/lib/actions/user.action";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  const loggedIn = await getLoggedInUser();

  if (!loggedIn) {
   redirect("/sign-in");
  }

  return (
    <main className="flex h-screen w-full font-inter">
      <SideBar user={loggedIn} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src={"/icons/logo.svg"} alt="logo" width={30} height={30} />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
