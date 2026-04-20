'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface NavBarProps {
  currentStep: string;
}

export default function NavBar({ currentStep }: NavBarProps) {
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword') || '';

  const steps = [
    { name: 'Home', icon: '🏠', href: '/', active: currentStep === 'home' },
    { name: 'Crawl', icon: '🕷️', href: `/crawl?keyword=${encodeURIComponent(keyword)}`, active: currentStep === 'crawl' },
    { name: 'Wallets', icon: '💼', href: `/wallets?keyword=${encodeURIComponent(keyword)}`, active: currentStep === 'wallets' },
    { name: 'Transactions', icon: '📊', href: `/transactions?keyword=${encodeURIComponent(keyword)}`, active: currentStep === 'transactions' },
    { name: 'Results', icon: '📈', href: `/results?keyword=${encodeURIComponent(keyword)}`, active: currentStep === 'results' },
  ];

  return (
    <nav className='bg-gradient-to-r from-slate-900 to-blue-900 text-white p-4 shadow-lg border-b border-blue-800'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex items-center gap-2 mb-4'>
          <span className='text-lg font-bold'>🔍 Darkwatch</span>
        </div>
        <div className='flex gap-2 overflow-x-auto'>
          {steps.map((step, idx) => (
            <div key={step.name} className='flex items-center'>
              <Link href={step.href}>
                <button className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 whitespace-nowrap ${
                  step.active
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-blue-200 hover:bg-blue-800/50 hover:text-white'
                }`}>
                  <span>{step.icon}</span>
                  <span>{step.name}</span>
                </button>
              </Link>
              {idx < steps.length - 1 && <span className='text-blue-700 mx-1'>→</span>}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
