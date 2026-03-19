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
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // simulate API delay
    setTimeout(() => {
      const userAccount = mockAccounts.find(
        account => account.holder.username === username
      );

      if (!userAccount) {
        setError('User not found');
        setLoading(false);
        return;
      }

      if (userAccount.holder.password !== password) {
        setError('Invalid password');
        setLoading(false);
        return;
      }

      localStorage.setItem('loggedInUser', JSON.stringify(userAccount));
      router.push('/dashboard');
    }, 3000); // 2 seconds delay
  };

  return (
    <div className="bg-[#0018A8] h-screen relative">
      <Header />
      <div className="p-4 px-6">
        <div className="mx-auto bg-[#ffffffb3] rounded-sm w-full p-7 mt-10">
          <div className="mb-5">
            {error && (
              <p className="text-[20px] text-center mx-auto max-w-[200px] rounded-md flex items-center justify-center text-red-600">
                {error}
              </p>
            )}
          </div>

          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-3">
              <input
                type="text"
                value={username}
                placeholder="Username"
                disabled={loading}
                className="p-4 py-3 rounded-[8px] border border-gray-500 outline-none"
                onChange={e => setUsername(e.target.value)}
              />

              <input
                type="password"
                value={password}
                placeholder="Password"
                disabled={loading}
                className="p-4 py-3 rounded-[8px] border border-gray-500 outline-none"
                onChange={e => setPassword(e.target.value)}
              />
            </div>

            <div className="flex flex-col items-center justify-between gap-2 mt-6">
              <button
                type="submit"
                disabled={loading}
                className="p-4 py-3 bg-[#007db8] w-full text-white font-semibold disabled:opacity-50"
              >
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </div>

            <p className="text-xs text-[#22262A] text-center mt-7">
              Copyright © 2025 Deutsche Bank AG, Frankfurt am Main
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}