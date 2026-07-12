// components/AuthGuard.tsx
'use client';

import { useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated, user, _hasHydrated } = useAuthStore();
  const hasRedirected = useRef(false);

  useEffect(() => {
    // Skip check if already redirected
    if (hasRedirected.current) return;
    
    if (_hasHydrated) {
      // Check if current page is login or account-suspended
      if (pathname === '/login' || pathname === '/account-suspended') {
        return;
      }

      if (!isAuthenticated) {
        hasRedirected.current = true;
        router.push('/login');
        return;
      }

      // Check if any account is suspended
      const hasSuspendedAccount = user?.accounts?.some(account => account.isSuspended === true);
      
      if (hasSuspendedAccount) {
        hasRedirected.current = true;
        router.push('/account-suspended');
      }
    }
  }, [isAuthenticated, user, _hasHydrated, router, pathname]);

  // Don't render children on login or account-suspended pages
  if (pathname === '/login' || pathname === '/account-suspended') {
    return <>{children}</>;
  }

  if (!_hasHydrated || !isAuthenticated) {
    return null;
  }

  return <>{children}</>;
}