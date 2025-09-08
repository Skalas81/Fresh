import React from "react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Dashboardpage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    redirect("/");
  }

  const user = session.user;
  return (
    <div className="flex w-full h-screen text-black flex-col">
      <h1>Hallo, {user.name}</h1>
      <span>{user.email}</span>
    </div>
  );
}
