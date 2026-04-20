'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import NavBar from '../../components/NavBar';
import { getWallets } from '../../data/wallets';

export default function WalletsPage() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword') || '';
  const walletData = getWallets(keyword);
  const entries = Object.entries(walletData);

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'>
      <NavBar currentStep='wallets' />
      <div className='max-w-5xl mx-auto p-8'>
        <div className='mb-8'>
          <h1 className='text-4xl font-bold text-white mb-2'>💼 Wallet Extraction</h1>
          <p className='text-blue-200'>Keyword: <span className='font-semibold text-blue-300'>{keyword}</span></p>
        </div>

        {entries.length === 0 ? (
          <div className='bg-white/10 backdrop-blur-md p-12 rounded-2xl shadow-2xl border border-white/20 text-center'>
            <p className='text-blue-200 text-lg'>No wallets found.</p>
          </div>
        ) : (
          <div className='space-y-4 mb-8'>
            {entries.map(([url, wals]) => (
              <div key={url} className='bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:border-blue-400/50 transition-all'>
                <div className='mb-4'>
                  <div className='flex items-center gap-2 mb-2'>
                    <span className='text-xl'>🌐</span>
                    <h2 className='font-semibold text-lg text-white'>{url}</h2>
                  </div>
                  <p className='text-sm text-blue-300'>{wals.length} wallet(s) found</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                  {wals.map((wal, i) => (
                    <div key={i} className='bg-black/20 p-3 rounded-lg border border-white/10'>
                      <p className='text-xs text-blue-400 mb-1'>Wallet {i + 1}</p>
                      <p className='text-xs text-blue-100 font-mono break-all'>{wal}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <Link href={`/transactions?keyword=${encodeURIComponent(keyword)}`} className='w-full'>
            <button className='w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg'>
              <span className='flex items-center justify-center gap-2'>
                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
                Analyse Transactions
              </span>
            </button>
          </Link>
          <Link href={`/results?keyword=${encodeURIComponent(keyword)}`} className='w-full'>
            <button className='w-full bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold py-3 rounded-lg hover:from-green-700 hover:to-green-800 transition-all transform hover:scale-105 shadow-lg'>
              <span className='flex items-center justify-center gap-2'>
                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' />
                </svg>
                View Results
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
