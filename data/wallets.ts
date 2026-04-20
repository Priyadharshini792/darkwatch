export const wallets: Record<string, Record<string, string[]>> = {
  'bitcoin': {
    'https://bitcoin.org': ['1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', '3CMNFxN1oHBc4BgEhL4r7N7JAoS5FXk'],
    'https://coindesk.com/bitcoin': ['bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh'],
    'https://bitcoinmagazine.com': ['1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2'],
  },
  'ethereum': {
    'https://ethereum.org': ['0x742d35Cc6634C0532925a3b844Bc454e4438f44e', '0x8ba1f109551bD432803012645ac136ddd64DBA72'],
    'https://etherscan.io': ['0xA0b86a33E6441e88C5F2712C3E9b74E39b6F2F5'],
    'https://ethgasstation.info': ['0x1234567890123456789012345678901234567890'],
  },
  'solana': {
    'https://solana.com': ['So11111111111111111111111111111112', 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'],
    'https://solscan.io': ['11111111111111111111111111111112'],
    'https://solanatracker.io': ['9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM'],
  },
};

export function getWallets(keyword: string): Record<string, string[]> {
  return wallets[keyword] || {};
}