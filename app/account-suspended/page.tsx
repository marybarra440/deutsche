"use client"

import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'next/navigation';
import { Shield, AlertCircle } from 'lucide-react';

export default function AccountSuspendedPage() {
  const router = useRouter();
  const { user, logout } = useAuthStore();

  const suspendedAccount = user?.accounts?.find(account => account.isSuspended === true);
  const suspensionReason = suspendedAccount?.suspensionReason || 'Your account has been suspended due to suspicious activity. Please contact customer support.';

  const handleLogout = async () => {
    await logout();
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6">
            <Shield className="w-10 h-10 text-red-600" />
          </div>

          <h1 className="text-2xl font-bold text-[#22262A] mb-2">Account Suspended</h1>
          <p className="text-gray-500 mb-6 text-sm">Your account has been temporarily suspended</p>

          <div className="w-full border-t border-gray-200 mb-6"></div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 w-full text-left">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-red-800 mb-1">Reason</p>
                <p className="text-sm text-red-700">{suspensionReason}</p>
              </div>
            </div>
          </div>

          {/* {suspendedAccount && (
            <div className="w-full bg-gray-50 rounded-lg p-4 mb-6">
              <p className="text-xs text-gray-500 mb-1">Affected Account</p>
              <p className="text-sm font-medium text-[#22262A]">{suspendedAccount.name}</p>
              <p className="text-xs text-gray-400">••••{suspendedAccount.accountNumber.slice(-4)}</p>
            </div>
          )} */}

          <button onClick={handleLogout} className="w-full py-3 rounded-lg bg-[#223e99] text-white font-semibold text-sm transition-opacity hover:opacity-90 active:scale-[0.98]">
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
