"use client";
import React, { useContext, useState } from "react";
import UserContext from "@/context/UserContext";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  const handleReset = (e) => {
    e.preventDefault();
    setPassword("");
    setUsername("");
    setUser({});
  };
  return (
    <div className="w-full flex-1 flex flex-col gap-y-5 h-96 max-w-sm bg-white p-10 rounded-l-2xl border-r-4 border-gray-500 ">
      <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
      {/* Username Field */}
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="username"
        required
      />
      {/* Password Field */}
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="password"
        required
      />
      {/* Submit Button */}
      <div className="flex flex-row gap-x-2">
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full bg-gray-600 text-white py-2 rounded-lg active:bg-gray-700 transition duration-200"
        >
          Submit
        </button>
        <button
          type="submit"
          onClick={handleReset}
          className="w-full bg-gray-600 text-white py-2 rounded-lg active:bg-gray-700 transition duration-200"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
