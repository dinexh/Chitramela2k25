"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from 'react-hot-toast';
import "./login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        // Show error toast
        toast.error(data.message || 'Login failed');
        return;
      }

      // Show success toast
      toast.success('Login successful');
      router.push("/admin/Dashboard");
      
    } catch (error) {
      toast.error('Something went wrong');
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <Toaster position="top-center" />
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}