'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import NavBar from '../../components/NavBar';
import { getCrawledUrls } from '../../data/crawledUrls';

export default function CrawlPage() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword') || '';
  const urls = getCrawledUrls(keyword);

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'>
      <NavBar currentStep='crawl' />
      <div className='max-w-5xl mx-auto p-8'>
        <div className='mb-8'>
          <h1 className='text-4xl font-bold text-white mb-2'>🕷️ Crawled URLs</h1>
          <p className='text-blue-200'>Keyword: <span className='font-semibold text-blue-300'>{keyword}</span></p>
        </div>

        {urls.length === 0 ? (
          <div className='bg-white/10 backdrop-blur-md p-12 rounded-2xl shadow-2xl border border-white/20 text-center'>
            <p className='text-blue-200 text-lg'>No URLs found for this keyword.</p>
          </div>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-8'>
            {urls.map((url, i) => (
              <div key={i} className='bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/20 hover:border-blue-400/50 hover:bg-white/20 transition-all'>
                <div className='flex items-start gap-3'>
                  <div className='text-2xl'>🔗</div>
                  <div className='flex-1 min-w-0'>
                    <p className='text-sm text-blue-300 mb-1'>URL {i + 1}</p>
                    <p className='text-white font-mono text-sm break-all'>{url}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <Link href={`/wallets?keyword=${encodeURIComponent(keyword)}`}>
          <button className='w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold py-3 rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all transform hover:scale-105 shadow-lg'>
            <span className='flex items-center justify-center gap-2'>
              <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' />
              </svg>
              Scrape Websites
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}
