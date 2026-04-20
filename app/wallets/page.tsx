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
    <div className='min-h-screen'>
      <NavBar currentStep='wallets' />
      <div className='max-w-4xl mx-auto p-8'>
        <div className='bg-white p-6 rounded-lg shadow'>
          <h1 className='text-2xl font-bold mb-4'>Wallet Extraction for '{keyword}'</h1>
          {entries.length === 0 ? (
            <p className='text-gray-600'>No wallets found.</p>
          ) : (
            <div className='mb-6 space-y-4'>
              {entries.map(([url, wals]) => (
                <div key={url} className='border rounded p-4'>
                  <h2 className='font-semibold text-lg mb-2'>{url}</h2>
                  <ul className='space-y-1'>
                    {wals.map((wal, i) => (
                      <li key={i} className='text-sm bg-gray-100 p-2 rounded'>{wal}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
          <div className='flex gap-4'>
            <Link href={`/transactions?keyword=${encodeURIComponent(keyword)}`}>
              <button className='bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition'>
                Analyse Transaction
              </button>
            </Link>
            <Link href={`/results?keyword=${encodeURIComponent(keyword)}`}>
              <button className='bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition'>
                Analysis Result
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
