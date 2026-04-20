export const graphData: Record<string, { nodes: { id: string; label: string }[]; links: { source: string; target: string }[] }> = {
  '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa': {
    nodes: [
      { id: 'wallet', label: 'Wallet' },
      { id: 'tx1', label: 'Tx1' },
      { id: 'tx2', label: 'Tx2' },
    ],
    links: [
      { source: 'wallet', target: 'tx1' },
      { source: 'wallet', target: 'tx2' },
    ],
  },
  '3CMNFxN1oHBc4BgEhL4r7N7JAoS5FXk': {
    nodes: [
      { id: 'wallet', label: 'Wallet' },
      { id: 'tx1', label: 'Tx1' },
    ],
    links: [{ source: 'wallet', target: 'tx1' }],
  },
  'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh': {
    nodes: [
      { id: 'wallet', label: 'Wallet' },
      { id: 'tx1', label: 'Tx1' },
    ],
    links: [{ source: 'wallet', target: 'tx1' }],
  },
  '1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2': {
    nodes: [
      { id: 'wallet', label: 'Wallet' },
      { id: 'tx1', label: 'Tx1' },
    ],
    links: [{ source: 'wallet', target: 'tx1' }],
  },
  '0x742d35Cc6634C0532925a3b844Bc454e4438f44e': {
    nodes: [
      { id: 'wallet', label: 'Wallet' },
      { id: 'tx1', label: 'Tx1' },
    ],
    links: [{ source: 'wallet', target: 'tx1' }],
  },
  '0x8ba1f109551bD432803012645ac136ddd64DBA72': {
    nodes: [
      { id: 'wallet', label: 'Wallet' },
      { id: 'tx1', label: 'Tx1' },
    ],
    links: [{ source: 'wallet', target: 'tx1' }],
  },
  '0xA0b86a33E6441e88C5F2712C3E9b74E39b6F2F5': {
    nodes: [
      { id: 'wallet', label: 'Wallet' },
      { id: 'tx1', label: 'Tx1' },
    ],
    links: [{ source: 'wallet', target: 'tx1' }],
  },
  '0x1234567890123456789012345678901234567890': {
    nodes: [
      { id: 'wallet', label: 'Wallet' },
      { id: 'tx1', label: 'Tx1' },
    ],
    links: [{ source: 'wallet', target: 'tx1' }],
  },
  'So11111111111111111111111111111112': {
    nodes: [
      { id: 'wallet', label: 'Wallet' },
      { id: 'tx1', label: 'Tx1' },
    ],
    links: [{ source: 'wallet', target: 'tx1' }],
  },
  'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v': {
    nodes: [
      { id: 'wallet', label: 'Wallet' },
      { id: 'tx1', label: 'Tx1' },
    ],
    links: [{ source: 'wallet', target: 'tx1' }],
  },
  '11111111111111111111111111111112': {
    nodes: [
      { id: 'wallet', label: 'Wallet' },
      { id: 'tx1', label: 'Tx1' },
    ],
    links: [{ source: 'wallet', target: 'tx1' }],
  },
  '9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM': {
    nodes: [
      { id: 'wallet', label: 'Wallet' },
      { id: 'tx1', label: 'Tx1' },
    ],
    links: [{ source: 'wallet', target: 'tx1' }],
  },
};

export function getGraphData(wallet: string): { nodes: { id: string; label: string }[]; links: { source: string; target: string }[] } {
  return graphData[wallet] || { nodes: [], links: [] };
}