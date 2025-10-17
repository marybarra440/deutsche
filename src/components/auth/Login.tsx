'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { mockAccounts } from '../mockData/MockData';
import Header from '../header/Header';

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userAccount = mockAccounts.find(account => account.holder.username === username);
    if (!userAccount) {
      setError('User not found');
      return;
    }
    if (userAccount.holder.password !== password) {
      setError('Invalid password');
      return;
    }
    // Store user data in localStorage
    localStorage.setItem('loggedInUser', JSON.stringify(userAccount));
    router.push('/dashboard');
  };

  return (
    <div className="bg-[#0018A8] h-screen relative">
      <Header />
      <div className="p-4 px-6">
        <div className="mx-auto bg-[#ffffffb3] rounded-sm w-full p-7 mt-10">
          <div className="mb-5">{error && <p className="text-[20px] text-center mx-auto max-w-[200px] rounded-md flex items-center justify-center text-red-600">{error}</p>}</div>
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  value={username}
                  placeholder="Username"
                  className="p-4 py-3 rounded-[8px] bg-white text-[#5c5c5c] placeholder:text-gray-600 bg-transparent border border-gray-500 outline-none"
                  onChange={e => setUsername(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-3">
                <input
                  type="password"
                  value={password}
                  placeholder="Password"
                  className="p-4 py-3 rounded-[8px] bg-white text-[#5c5c5c] placeholder:text-gray-600 bg-transparent border border-gray-500 outline-none"
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col items-center justify-between gap-2 mt-6">
              <button type="submit" className="p-4 py-3 bg-[#0197DB] w-full text-white font-semibold">
                Login
              </button>
            </div>

            <p className="text-xs text-[#22262A] flex flex-col gap-1 text-center mt-7">
              <span>Copyright © 2025 Deutsche Bank AG, Frankfurt am Main</span>
            </p>
          </form>
        </div>
      </div>
      <div className="w-full min-h-[70px] absolute bottom-0 z-50 flex items-center justify-center px-6 p-[20px]">
        <p className="text-base text-white flex flex-col gap-1 text-center">
          <span>Copyright © 2025 Deutsche Bank AG, Frankfurt am Main</span>
        </p>
      </div>
    </div>
  );
}
