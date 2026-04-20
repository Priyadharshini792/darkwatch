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
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'>
      <NavBar currentStep='results' />
      <div className='max-w-6xl mx-auto p-8'>
        <div className='mb-8'>
          <h1 className='text-4xl font-bold text-white mb-2'>📈 Analysis Results</h1>
          <p className='text-blue-200'>Keyword: <span className='font-semibold text-blue-300'>{keyword}</span></p>
        </div>

        {sortedEntries.length === 0 ? (
          <div className='bg-white/10 backdrop-blur-md p-12 rounded-2xl shadow-2xl border border-white/20 text-center'>
            <p className='text-blue-200 text-lg'>No analysis data available.</p>
          </div>
        ) : (
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8'>
            {sortedEntries.slice(0, 3).map(([url, data], idx) => (
              <div key={url} className='bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:border-blue-400/50 transition-all'>
                <div className='mb-4'>
                  <div className='flex items-center justify-between mb-2'>
                    <span className='text-2xl font-bold text-yellow-400'>#{idx + 1}</span>
                    <span className={`text-xs font-bold px-2 py-1 rounded ${
                      data.risk === 'Low' ? 'bg-green-500/20 text-green-300' :
                      data.risk === 'Medium' ? 'bg-yellow-500/20 text-yellow-300' :
                      'bg-red-500/20 text-red-300'
                    }`}>
                      {data.risk.toUpperCase()}
                    </span>
                  </div>
                  <p className='text-sm text-blue-300 break-all'>{url}</p>
                </div>
                <div className='space-y-2'>
                  <div>
                    <p className='text-xs text-blue-300'>Score</p>
                    <p className='text-2xl font-bold text-white'>{data.score}/100</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className='bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/20'>
          <h2 className='text-2xl font-bold text-white mb-6'>Detailed Analysis</h2>
          {sortedEntries.length === 0 ? (
            <p className='text-blue-200'>No analysis data available.</p>
          ) : (
            <Table
              headers={['Website', 'Score', 'Ranking', 'Risk Level']}
              rows={sortedEntries.map(([url, data]) => [
                <span className='font-mono text-sm text-blue-300'>{url}</span>,
                <div className='flex items-center gap-2'>
                  <div className='w-16 h-2 bg-white/10 rounded-full overflow-hidden'>
                    <div 
                      className='h-full bg-gradient-to-r from-green-400 to-blue-500' 
                      style={{ width: `${data.score}%` }}
                    />
                  </div>
                  <span className='font-bold text-lg text-white'>{data.score}</span>
                </div>,
                <span className='font-semibold text-lg text-blue-300'>#{data.ranking}</span>,
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold ${
                    data.risk === 'Low' ? 'bg-green-500/30 text-green-300' :
                    data.risk === 'Medium' ? 'bg-yellow-500/30 text-yellow-300' :
                    'bg-red-500/30 text-red-300'
                  }`}
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
