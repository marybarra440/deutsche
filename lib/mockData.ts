import { User } from '@/types/userTypes';

// Mock Users with all related data nested
export const users: User[] = [
  {
    id: '0001',
    firstName: 'Sarah',
    lastName: 'Johnson',
    username: 'sample',
    password: 'sample',
    email: 'sarah.johnson@email.com',
    phone: '(555) 123-4567',
    transactionCode: '6363',
    transactionMsg: "The recipient's bank account could not be verified. Please double-check the account number and routing number, then try again.",
    createdAt: '2023-01-15',
    accounts: [
      {
        type: 'checking',
        name: 'Everyday Checking',
        accountNumber: '1234567890',
        balance: 8547.32,
        isPrimary: true,
        transactions: [
          {
            merchant: 'Starbucks',
            category: 'Food & Drink',
            date: 'Dec 12, 2024',
            amount: 1500.0,
            status: 'success'
          },
          {
            merchant: 'Payroll Deposit',
            category: 'Income',
            date: 'Dec 5, 2024',
            amount: 3250.0,
            status: 'success'
          },
          {
            merchant: 'Chipotle',
            category: 'Food & Drink',
            date: 'Dec 4, 2024',
            amount: -14.32,
            status: 'success'
          },
          {
            merchant: 'Shell Gas Station',
            category: 'Transportation',
            date: 'Dec 3, 2024',
            amount: -52.18,
            status: 'success'
          },
          {
            merchant: 'Electric Company',
            category: 'Utilities',
            date: 'Dec 2, 2024',
            amount: -124.5,
            status: 'failed'
          },
          {
            merchant: 'Rent Payment',
            category: 'Housing',
            date: 'Dec 1, 2024',
            amount: -1850.0,
            status: 'success'
          },
          {
            merchant: 'Netflix',
            category: 'Entertainment',
            date: 'Nov 30, 2024',
            amount: -15.99,
            status: 'success'
          },
          {
            merchant: 'Uber',
            category: 'Transportation',
            date: 'Nov 28, 2024',
            amount: -23.45,
            status: 'success'
          },
          {
            merchant: 'Interest Payment',
            category: 'Income',
            date: 'Nov 30, 2024',
            amount: 24.5,
            status: 'success'
          },
          {
            merchant: 'Amazon',
            category: 'Shopping',
            date: 'Dec 4, 2024',
            amount: -89.99,
            status: 'processing'
          }
        ]
      },
      {
        type: 'savings',
        name: 'High Yield Savings',
        accountNumber: '0987654321',
        balance: 24892.5,
        isPrimary: false,
        transactions: [
          {
            merchant: 'Salary Bonus',
            category: 'Income',
            date: 'Dec 10, 2024',
            amount: 500.0,
            status: 'success'
          },
          {
            merchant: 'Monthly Savings Transfer',
            category: 'Transfer',
            date: 'Dec 1, 2024',
            amount: 1000.0,
            status: 'success'
          }
        ]
      }
    ],
    cards: [
      {
        id: 'card_001',
        cardNumber: '4111111111111111',
        cardHolder: 'SARAH JOHNSON',
        expiryDate: '12/26',
        cvv: '123',
        cardType: 'debit',
        cardName: 'Everyday Checking Card',
        balance: 8547.32,
        issuer: 'Visa',
        isPrimary: true,
        createdAt: '2022-06-15'
      }
    ]
  },
  {
    id: '0002',
    firstName: 'Adele',
    lastName: 'Emilia',
    email: 'sparka***24@gmail.com',
    username: 'Sparkaseberliner41',
    password: 'Kaseber2810',
    transactionCode: '7984',
    createdAt: '2026-7-12', // y-m-d
    transactionMsg: 'Your account is currently on hold, and you are unable to make transactions at this time. Please contact our customer service team on deutschepl3@gmail.com for assistance.',
    accounts: [
      {
        type: 'checking',
        name: 'Everyday Checking',
        accountNumber: '9876542457',
        balance: 33000000.0,
        isPrimary: true,
        transactions: [
          {
            merchant: 'Transfer from Goldline Resources Ltd.',
            category: '****7012',
            date: 'Jun 30, 2026',
            amount: 2079000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Redwood Logistics',
            category: '****6894',
            date: 'May 18, 2026',
            amount: 6105000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Aurora Gold Corp.',
            category: '****5521',
            date: 'Apr 02, 2026',
            amount: 99000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Summit Gold Holdings',
            category: '****4187',
            date: 'Feb 15, 2026',
            amount: 660000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer to Atlas Services',
            category: '****3066',
            date: 'Jan 04, 2026',
            amount: -2200000,
            status: 'success'
          },
          {
            merchant: 'Transfer from Keystone Gold Group',
            category: '****1943',
            date: 'Nov 20, 2025',
            amount: 825000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Royal Crest Gold Ltd.',
            category: '****4721',
            date: 'Oct 30, 2025',
            amount: 825000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer to Keks Amazon store',
            category: '****3859',
            date: 'Aug 21, 2025',
            amount: -500000,
            status: 'success'
          },
          {
            merchant: 'Fort Lauderdale (FLL)',
            category: '****9184',
            date: 'Jul 28, 2025',
            amount: -3500,
            status: 'success'
          },
          {
            merchant: 'Transfer from Sovereign Gold Finance',
            category: '****7605',
            date: 'Jul 14, 2025',
            amount: 2442000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer to Mark Gilleson',
            category: '****6317',
            date: 'Jul 10, 2025',
            amount: -6000000,
            status: 'success'
          },
          {
            merchant: 'Transfer from Horizon Gold Trust',
            category: '****8423',
            date: 'Jun 19, 2025',
            amount: 1254000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Vanguard Gold Assets',
            category: '****5198',
            date: 'Jun 02, 2025',
            amount: 1023000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer to Benson John',
            category: '****2746',
            date: 'May 23, 2025',
            amount: -125000,
            status: 'success'
          },
          {
            merchant: 'Transfer from Alpine Gold Partners',
            category: '****9302',
            date: 'May 07, 2025',
            amount: 1221000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer to Sarah Williams',
            category: '****1857',
            date: 'Apr 09, 2025',
            amount: -5007000,
            status: 'success'
          },
          {
            merchant: 'Transfer to Daniel Thompson',
            category: '****7640',
            date: 'Mar 20, 2025',
            amount: -3000000,
            status: 'success'
          },
          {
            merchant: 'Transfer from Meridian Gold Corp.',
            category: '****4923',
            date: 'Feb 21, 2025',
            amount: 2211000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Golden Ridge Investments',
            category: '****6185',
            date: 'Jan 23, 2025',
            amount: 2970000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer to Emily Johnson',
            category: '****3072',
            date: 'Dec 30, 2024',
            amount: -3560000,
            status: 'success'
          },
          {
            merchant: 'Transfer from Noble Gold Holdings',
            category: '****8391',
            date: 'Dec 02, 2024',
            amount: 495000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer to Linda Garcia',
            category: '****1406',
            date: 'Nov 15, 2024',
            amount: -950000,
            status: 'success'
          },
          {
            merchant: 'Transfer to Christopher Wilson',
            category: '****9217',
            date: 'Oct 20, 2024',
            amount: -8500000,
            status: 'success'
          },
          {
            merchant: 'Transfer to Patricia Martinez',
            category: '****5648',
            date: 'Oct 06, 2024',
            amount: -7000000,
            status: 'success'
          },
          {
            merchant: 'Transfer from Apex Gold Resources',
            category: '****7830',
            date: 'Sep 21, 2024',
            amount: 1584000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer to Anthony Moore',
            category: '****4095',
            date: 'Sep 11, 2024',
            amount: -1800000,
            status: 'success'
          },
          {
            merchant: 'Transfer from Imperial Gold Assets',
            category: '****4464',
            date: 'Sep 03, 2024',
            amount: 792000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Keystone Gold International',
            category: '****8392',
            date: 'Aug 14, 2024',
            amount: 462000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Aurora Gold Networks',
            category: '****4721',
            date: 'Jun 29, 2024',
            amount: 693000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Fjordline Gold Corp.',
            category: '****6154',
            date: 'May 12, 2024',
            amount: 2343000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Atlas Gold Industries',
            category: '****9083',
            date: 'Feb 19, 2024',
            amount: 3993000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Evergreen Gold Systems',
            category: '****2476',
            date: 'Dec 28, 2023',
            amount: 99000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from NorthRidge Gold Mining',
            category: '****7319',
            date: 'Nov 05, 2023',
            amount: 363000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Solstice Gold Finance',
            category: '****5642',
            date: 'Aug 17, 2023',
            amount: 462000.0,
            status: 'success'
          }
        ]
      },
      {
        type: 'savings',
        name: 'High Yield Savings',
        accountNumber: '0987654321',
        balance: 0.0,
        isPrimary: false
      }
    ],
    cards: [
      {
        id: 'card_003',
        cardNumber: '4532123456783458',
        expiryDate: '08/27',
        cvv: '789',
        cardType: 'debit',
        cardName: 'Premier Checking Card',
        issuer: 'Visa',
        isPrimary: true,
        createdAt: '2021-09-10'
      }
    ]
  }
];
