// Login.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuthStore } from '@/store/authStore';
import { LoginSchema } from '@/lib/schemas';
import { toast } from 'sonner';
import LoginHeader from '@/components/LoginHeader';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // ✅ field-level errors
  const [errors, setErrors] = useState<{
    username?: string;
    password?: string;
  }>({});

  const router = useRouter();
  const { login, isLoading, error, isAuthenticated, clearError, user } = useAuthStore();

  useEffect(() => {
    if (isAuthenticated) {
      // Check if any account is suspended
      const hasSuspendedAccount = user?.accounts?.some(account => account.isSuspended === true);

      if (hasSuspendedAccount) {
        router.push('/account-suspended');
      } else {
        router.push('/');
      }
    }
  }, [isAuthenticated, router, user]);

  // ✅ show toast but DON'T clear immediately
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // reset field errors
    setErrors({});

    // ✅ Zod validation
    const result = LoginSchema.safeParse({ username, password });

    if (!result.success) {
      const fieldErrors: typeof errors = {};

      result.error.issues.forEach(issue => {
        const field = issue.path[0] as keyof typeof fieldErrors;
        fieldErrors[field] = issue.message;
      });

      setErrors(fieldErrors);
      return;
    }

    const success = await login(username, password);

    if (success) {
      toast.success('Welcome back!');
    }
  };

  return (
    <div className="min-h-screen bg-[#0C2340] flex flex-col">
      <LoginHeader />

      {/* Login Form */}
      <main className="flex-1 px-6 pb-8 mt-10">
        <div className="w-full mx-auto">
          <div className="bg-white rounded-sm p-6">
            <form onSubmit={handleSubmit} className="space-y-5 mt-3">
              {/* Email */}
              <div className="space-y-3">
                <Label htmlFor="username" className="text-[#5c5c5c] font-semibold">
                  Username
                </Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={e => {
                    setUsername(e.target.value);
                    setErrors(prev => ({ ...prev, username: '' }));
                    clearError();
                  }}
                  className={`h-12 sm:h-9 rounded-[10px] text-[#5c5c5c] bg-transparent border ${errors.username ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.username && <p className="text-sm text-[#ef4343]">{errors.username}</p>}
              </div>

              {/* Password */}
              <div className="space-y-3">
                <Label htmlFor="password" className="text-[#5c5c5c] font-semibold">
                  Password
                </Label>

                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={e => {
                      setPassword(e.target.value);
                      setErrors(prev => ({ ...prev, password: '' }));
                      clearError(); // clear auth error on typing
                    }}
                    className={`h-12 sm:h-9 rounded-[10px] text-[#5c5c5c] bg-transparent border ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                  />

                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors">
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.password && <p className="text-sm text-[#ef4343]">{errors.password}</p>}
              </div>

              {/* Remember Me */}
              <div className="flex flex-col gap-3 text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-200 accent-primary" />
                  <span className="text-gray-500">Remember me</span>
                </label>

                <p className="text-xs text-gray-600">To help keep your account secure, save your username only on devices that aren't used by other people.</p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="p-4 py-3 bg-[#0018A8] w-full text-white font-semibold rounded-md transition-opacity hover:opacity-90 active:scale-[0.98] disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Loggining in...
                  </>
                ) : (
                  'Log-in'
                )}
              </button>
            </form>
          </div>

          {/* Security Notice */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">🔒 Your connection is secure and encrypted</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-6 bg-white">
        <p className="text-sm text-gray-700 text-center">Copyright © 2025 Deutsche Bank AG, Frankfurt am Main</p>
      </footer>
    </div>
  );
}
