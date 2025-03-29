'use client';

import { useState } from "react";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Use the username and password for authentication
    const res = await signIn("credentials", {
      redirect: false,
      username,  // Passing the username here
      password,  // Passing the password here
    });

    if (res?.error) {
      alert("Invalid credentials");
    } else {
      redirect('/pokemon');
    }
  };

  return (
    <div className="login h-screen my-auto">
      <div className="contact flex items-center justify-center flex-col p-4 md:py-8">
        <h1 className="text-2xl md:text-3xl font-semibold mb-6">Login</h1>
        <form
          className="space-y-4 font-[sans-serif] max-w-md mx-auto"
          onSubmit={handleSubmit} // Use handleSubmit for form submission
        >
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Update username state
            className="px-4 py-3 bg-gray-100 w-full text-sm outline-none border-b-2 focus:border-orange-500 rounded"
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update password state
            className="px-4 py-3 bg-gray-100 w-full text-sm outline-none border-b-2 border-transparent focus:border-yellow-500 rounded"
          />

          <button
            type="submit"
            className="!mt-8 w-full px-4 py-2.5 mx-auto block text-sm bg-yellow-500 text-white rounded hover:bg-yellow-600"
          >
            Submit
          </button>
        </form>
        <div className="flex justify-center items-center mt-6 w-full">
        </div>
      </div>
    </div>
  );
}