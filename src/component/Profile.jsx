"use client";
import React, { useContext } from "react";
import UserContext from "@/context/UserContext";

export default function Profile() {
  const { user } = useContext(UserContext);

  return (
    <div className="flex-1 flex justify-center items-center h-96 max-w-sm bg-white p-10 rounded-r-2xl border-l-4 border-gray-500">
      <h1 className="text-2xl font-bold text-center mb-6">
        Hello {user ? user.username : ""}!
      </h1>
    </div>
  );
}
