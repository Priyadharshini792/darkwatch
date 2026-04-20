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
    <div className='min-h-screen'>
      <NavBar currentStep='transactions' />
      <div className='max-w-6xl mx-auto p-8'>
        <div className='bg-white p-6 rounded-lg shadow'>
          <h1 className='text-2xl font-bold mb-4'>Transaction Analysis for '{keyword}'</h1>
          {txGroups.length === 0 ? (
            <p className='text-gray-600'>No transactions found.</p>
          ) : (
            txGroups.map(({ wallet, txs }) => (
              <div key={wallet} className='mb-8'>
                <h2 className='text-xl font-semibold mb-4'>{wallet}</h2>
                <Table
                  headers={['Hash', 'Amount', 'Date', 'Type', 'Graph View']}
                  rows={txs.map(tx => [
                    tx.hash,
                    tx.amount,
                    tx.date,
                    tx.type,
                    <Link key={tx.hash} href={`/graph/${wallet}`}> 
                      <button className='bg-purple-600 text-white px-3 py-1 rounded text-sm hover:bg-purple-700 transition'>
                        View Graph
                      </button>
                    </Link>,
                  ])}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
