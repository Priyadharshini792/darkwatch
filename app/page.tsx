'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import NavBar from '../components/NavBar';

export default function Home() {
  const [keyword, setKeyword] = useState('');
  const router = useRouter();

  const handleStart = () => {
    if (keyword.trim()) {
      router.push(`/crawl?keyword=${encodeURIComponent(keyword.trim())}`);
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900'>
      <NavBar currentStep='home' />
      <div className='flex items-center justify-center min-h-[calc(100vh-64px)] p-8'>
        <div className='max-w-md w-full'>
          <div className='text-center mb-8'>
            <div className='inline-block bg-blue-500 bg-opacity-20 p-4 rounded-full mb-4'>
              <svg className='w-12 h-12 text-blue-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' />
              </svg>
            </div>
            <h1 className='text-4xl font-bold text-white mb-2'>Darkwatch</h1>
            <p className='text-blue-200 text-sm'>Blockchain Investigation Dashboard</p>
          </div>
          
          <div className='bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/20'>
            <h2 className='text-2xl font-bold text-white mb-2'>Start Investigation</h2>
            <p className='text-blue-100 text-sm mb-6'>Enter a keyword to begin analyzing blockchain data</p>
            
            <div className='space-y-4'>
              <div className='relative'>
                <input
                  type='text'
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleStart()}
                  placeholder='e.g., bitcoin, ethereum, solana'
                  className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition backdrop-blur-sm'
                />
                <svg className='absolute right-3 top-3.5 w-5 h-5 text-blue-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
                </svg>
              </div>
              
              <button
                onClick={handleStart}
                disabled={!keyword.trim()}
                className='w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg'
              >
                <span className='flex items-center justify-center gap-2'>
                  <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
                  </svg>
                  Start Crawling
                </span>
              </button>
            </div>
            
            <div className='mt-6 pt-6 border-t border-white/10'>
              <p className='text-xs text-blue-200 text-center'>Supported keywords: bitcoin, ethereum, solana</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
