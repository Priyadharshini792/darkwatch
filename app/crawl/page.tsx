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
    <div className='min-h-screen'>
      <NavBar currentStep='crawl' />
      <div className='max-w-4xl mx-auto p-8'>
        <div className='bg-white p-6 rounded-lg shadow'>
          <h1 className='text-2xl font-bold mb-4'>Crawled URLs for '{keyword}'</h1>
          {urls.length === 0 ? (
            <p className='text-gray-600'>No URLs found for this keyword.</p>
          ) : (
            <ul className='mb-6 space-y-2'>
              {urls.map((url, i) => (
                <li key={i} className='p-3 bg-gray-50 rounded border'>{url}</li>
              ))}
            </ul>
          )}
          <Link href={`/wallets?keyword=${encodeURIComponent(keyword)}`}>
            <button className='bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition'>
              Scrape Websites
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
