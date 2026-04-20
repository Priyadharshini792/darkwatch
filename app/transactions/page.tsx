'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import NavBar from '../../components/NavBar';
import Table from '../../components/Table';
import { getWallets } from '../../data/wallets';
import { getTransactions } from '../../data/transactions';

export default function TransactionsPage() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword') || '';
  const walletData = getWallets(keyword);
  const allWallets = Object.values(walletData).flat();
  const txGroups = allWallets.map(wallet => ({
    wallet,
    txs: getTransactions(wallet),
  })).filter(group => group.txs.length > 0);

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'>
      <NavBar currentStep='transactions' />
      <div className='max-w-6xl mx-auto p-8'>
        <div className='mb-8'>
          <h1 className='text-4xl font-bold text-white mb-2'>📊 Transaction Analysis</h1>
          <p className='text-blue-200'>Keyword: <span className='font-semibold text-blue-300'>{keyword}</span></p>
        </div>

        {txGroups.length === 0 ? (
          <div className='bg-white/10 backdrop-blur-md p-12 rounded-2xl shadow-2xl border border-white/20 text-center'>
            <p className='text-blue-200 text-lg'>No transactions found.</p>
          </div>
        ) : (
          <div className='space-y-6'>
            {txGroups.map(({ wallet, txs }) => (
              <div key={wallet} className='bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/20'>
                <div className='mb-6'>
                  <div className='flex items-center justify-between mb-2'>
                    <h2 className='text-xl font-semibold text-white flex items-center gap-2'>
                      <span>🔐</span> Wallet
                    </h2>
                    <span className='text-sm text-blue-300'>{txs.length} transaction(s)</span>
                  </div>
                  <p className='text-sm text-blue-300 font-mono break-all'>{wallet}</p>
                </div>
                <div className='mb-4'>
                  <Table
                    headers={['Hash', 'Amount', 'Date', 'Type', 'Action']}
                    rows={txs.map(tx => [
                      <span className='font-mono text-blue-300'>{tx.hash}</span>,
                      <span className='font-semibold text-green-400'>{tx.amount} BTC</span>,
                      <span className='text-blue-300'>{tx.date}</span>,
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        tx.type === 'send' 
                          ? 'bg-red-500/20 text-red-300' 
                          : 'bg-green-500/20 text-green-300'
                      }`}>
                        {tx.type.toUpperCase()}
                      </span>,
                      <Link key={tx.hash} href={`/graph/${wallet}`}>
                        <button className='bg-gradient-to-r from-purple-600 to-purple-700 text-white px-3 py-1 rounded text-xs hover:from-purple-700 hover:to-purple-800 transition-all transform hover:scale-105 shadow'>
                          📈 View Graph
                        </button>
                      </Link>,
                    ])}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
