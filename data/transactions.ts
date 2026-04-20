export const transactions: Record<string, { hash: string; amount: number; date: string; type: string }[]> = {
  '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa': [
    { hash: 'a1b2c3d4', amount: 0.5, date: '2023-01-01', type: 'send' },
    { hash: 'e5f6g7h8', amount: 1.2, date: '2023-02-01', type: 'receive' },
  ],
  '3CMNFxN1oHBc4BgEhL4r7N7JAoS5FXk': [
    { hash: 'i9j0k1l2', amount: 0.8, date: '2023-03-01', type: 'send' },
  ],
  'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh': [
    { hash: 'm3n4o5p6', amount: 2.0, date: '2023-04-01', type: 'receive' },
  ],
  '1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2': [
    { hash: 'q7r8s9t0', amount: 0.3, date: '2023-05-01', type: 'send' },
  ],
  '0x742d35Cc6634C0532925a3b844Bc454e4438f44e': [
    { hash: 'u1v2w3x4', amount: 0.1, date: '2023-06-01', type: 'send' },
  ],
  '0x8ba1f109551bD432803012645ac136ddd64DBA72': [
    { hash: 'y5z6a7b8', amount: 0.4, date: '2023-07-01', type: 'receive' },
  ],
  '0xA0b86a33E6441e88C5F2712C3E9b74E39b6F2F5': [
    { hash: 'c9d0e1f2', amount: 0.6, date: '2023-08-01', type: 'send' },
  ],
  '0x1234567890123456789012345678901234567890': [
    { hash: 'g3h4i5j6', amount: 0.9, date: '2023-09-01', type: 'receive' },
  ],
  'So11111111111111111111111111111112': [
    { hash: 'k7l8m9n0', amount: 10, date: '2023-10-01', type: 'send' },
  ],
  'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v': [
    { hash: 'o1p2q3r4', amount: 5, date: '2023-11-01', type: 'receive' },
  ],
  '11111111111111111111111111111112': [
    { hash: 's5t6u7v8', amount: 15, date: '2023-12-01', type: 'send' },
  ],
  '9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM': [
    { hash: 'w9x0y1z2', amount: 20, date: '2024-01-01', type: 'receive' },
  ],
};

export function getTransactions(wallet: string): { hash: string; amount: number; date: string; type: string }[] {
  return transactions[wallet] || [];
}