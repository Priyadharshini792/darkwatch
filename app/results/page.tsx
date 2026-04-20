'use client';

import { useSearchParams } from 'next/navigation';
import NavBar from '../../components/NavBar';
import Table from '../../components/Table';
import { getAnalysis } from '../../data/analysis';

export default function ResultsPage() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword') || '';
  const analysisData = getAnalysis(keyword);
  const sortedEntries = Object.entries(analysisData).sort(([, a], [, b]) => b.score - a.score);

  return (
    <div className='min-h-screen'>
      <NavBar currentStep='results' />
      <div className='max-w-4xl mx-auto p-8'>
        <div className='bg-white p-6 rounded-lg shadow'>
          <h1 className='text-2xl font-bold mb-4'>Analysis Results for '{keyword}'</h1>
          {sortedEntries.length === 0 ? (
            <p className='text-gray-600'>No analysis data available.</p>
          ) : (
            <Table
              headers={['Website', 'Score', 'Ranking', 'Risk']}
              rows={sortedEntries.map(([url, data]) => [
                url,
                data.score,
                data.ranking,
                <span
                  key={url}
                  className={`px-2 py-1 rounded text-sm ${data.risk === 'Low' ? 'bg-green-100 text-green-800' : data.risk === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}
                >
                  {data.risk}
                </span>,
              ])}
            />
          )}
        </div>
      </div>
    </div>
  );
}
