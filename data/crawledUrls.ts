export const crawledUrls: Record<string, string[]> = {
  'bitcoin': ['https://bitcoin.org', 'https://coindesk.com/bitcoin', 'https://bitcoinmagazine.com'],
  'ethereum': ['https://ethereum.org', 'https://etherscan.io', 'https://ethgasstation.info'],
  'solana': ['https://solana.com', 'https://solscan.io', 'https://solanatracker.io'],
};

export function getCrawledUrls(keyword: string): string[] {
  return crawledUrls[keyword] || [];
}