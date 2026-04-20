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
    <div className='min-h-screen'>
      <NavBar currentStep='home' />
      <div className='flex items-center justify-center min-h-[calc(100vh-64px)] p-8'>
        <div className='bg-white p-8 rounded-lg shadow-lg max-w-md w-full'>
          <h1 className='text-3xl font-bold text-center mb-6 text-gray-800'>Start Investigation</h1>
          <input
            type='text'
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder='Enter keyword (e.g., bitcoin)'
            className='w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <button
            onClick={handleStart}
            className='w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition'
          >
            Start Crawling
          </button>
        </div>
      </div>
    </div>
  );
}
