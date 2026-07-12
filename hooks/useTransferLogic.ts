// useTransferLogic.ts
import { useState } from 'react';
import { banks } from '@/lib/bankList';
import type { Account, Transaction } from '@/types/userTypes';

// Define the type for accounts with required fields
type AccountWithRequiredFields = Omit<Account, 'routingNumber' | 'transactions'> & {
  id: string;
  routingNumber: string;
  transactions: NonNullable<Account['transactions']>;
};

interface TransferState {
  amount: string;
  fromAccount: string;
  selectedBank: string;
  accountNumber: string;
  routingNumber: string;
  memo: string;
  isProcessing: boolean;
  showFailedDialog: boolean;
  insufficientFundsError: boolean;
}

interface TransferHandlers {
  setAmount: (val: string) => void;
  setFromAccount: (val: string) => void;
  setSelectedBank: (val: string) => void;
  setAccountNumber: (val: string) => void;
  setRoutingNumber: (val: string) => void;
  setMemo: (val: string) => void;
  setIsProcessing: (val: boolean) => void;
  setShowFailedDialog: (val: boolean) => void;
  setInsufficientFundsError: (val: boolean) => void;
}

interface TransferValidation {
  isFormValid: boolean;
  hasInsufficientFunds: boolean;
}

export const useTransferLogic = (userAccounts: AccountWithRequiredFields[]) => {
  const defaultAccountId = userAccounts[0]?.id || '';

  const [amount, setAmount] = useState('');
  const [fromAccount, setFromAccount] = useState(defaultAccountId);
  const [selectedBank, setSelectedBank] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [routingNumber, setRoutingNumber] = useState('');
  const [memo, setMemo] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showFailedDialog, setShowFailedDialog] = useState(false);
  const [insufficientFundsError, setInsufficientFundsError] = useState(false);

  const state: TransferState = {
    amount,
    fromAccount,
    selectedBank,
    accountNumber,
    routingNumber,
    memo,
    isProcessing,
    showFailedDialog,
    insufficientFundsError,
  };

  const handlers: TransferHandlers = {
    setAmount: (val) => {
      const cleaned = val.replace(/[^0-9.]/g, '');
      if (cleaned.split('.').length <= 2) setAmount(cleaned);
    },
    setFromAccount,
    setSelectedBank,
    setAccountNumber: (val) => {
      const cleaned = val.replace(/[^0-9]/g, '').slice(0, 17);
      setAccountNumber(cleaned);
    },
    setRoutingNumber: (val) => {
      const cleaned = val.replace(/[^0-9]/g, '').slice(0, 17);
      setRoutingNumber(cleaned);
    },
    setMemo,
    setIsProcessing,
    setShowFailedDialog,
    setInsufficientFundsError,
  };

  const selectedFromAccount = userAccounts.find((acc) => acc.id === fromAccount);
  const selectedBankInfo = banks.find((bank) => bank.id === selectedBank);

  const transferAmount = parseFloat(amount) || 0;
  const hasInsufficientFunds =
    transferAmount > 0 && selectedFromAccount
      ? transferAmount > selectedFromAccount.balance
      : false;

  const isFormValid: boolean =
    !!amount &&
    transferAmount > 0 &&
    !!selectedBank &&
    accountNumber.length >= 8 &&
    routingNumber.length >= 5 &&
    !hasInsufficientFunds;

  const validation: TransferValidation = {
    isFormValid,
    hasInsufficientFunds,
  };

  return {
    state,
    handlers,
    validation,
    displayAccounts: userAccounts,
    selectedFromAccount,
    selectedBankInfo,
  };
};