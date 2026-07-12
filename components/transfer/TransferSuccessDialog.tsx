// TransferSuccessDialog.tsx
'use client';

import { CheckCircle2 } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import Link from 'next/link';

interface TransferSuccessDialogProps {
  open: boolean;
  onClose: () => void;
  reason?: string;
}

const TransferSuccessDialog = ({ open, onClose, reason }: TransferSuccessDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-sm mx-auto bg-white">
        <DialogHeader className="text-center items-center">
          <div className="p-4 rounded-full bg-green-500/10 mb-4">
            <CheckCircle2 className="w-12 h-12 text-green-500" />
          </div>
          <DialogTitle className="text-xl font-bold text-foreground">Transfer Successful</DialogTitle>
          <DialogDescription className="text-gray-500 mt-2">{reason}</DialogDescription>
        </DialogHeader>

        <Link href="/">
          <button className="w-full mt-6 py-3 rounded-2xl bg-[#223e99] text-white font-semibold text-base transition-opacity hover:opacity-90 active:scale-[0.98]">Done</button>
        </Link>
      </DialogContent>
    </Dialog>
  );
};

export default TransferSuccessDialog;
