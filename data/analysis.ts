export const analysis: Record<string, Record<string, { score: number; ranking: number; risk: string }>> = {
  'bitcoin': {
    'https://bitcoin.org': { score: 95, ranking: 1, risk: 'Low' },
    'https://coindesk.com/bitcoin': { score: 85, ranking: 2, risk: 'Medium' },
    'https://bitcoinmagazine.com': { score: 75, ranking: 3, risk: 'High' },
  },
  'ethereum': {
    'https://ethereum.org': { score: 90, ranking: 1, risk: 'Low' },
    'https://etherscan.io': { score: 80, ranking: 2, risk: 'Medium' },
    'https://ethgasstation.info': { score: 70, ranking: 3, risk: 'High' },
  },
  'solana': {
    'https://solana.com': { score: 88, ranking: 1, risk: 'Low' },
    'https://solscan.io': { score: 78, ranking: 2, risk: 'Medium' },
    'https://solanatracker.io': { score: 68, ranking: 3, risk: 'High' },
  },
};

export function getAnalysis(keyword: string): Record<string, { score: number; ranking: number; risk: string }> {
  return analysis[keyword] || {};
}