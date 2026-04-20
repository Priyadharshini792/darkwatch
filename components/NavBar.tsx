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
    { name: 'Home', href: '/', active: currentStep === 'home' },
    { name: 'Crawl', href: `/crawl?keyword=${encodeURIComponent(keyword)}`, active: currentStep === 'crawl' },
    { name: 'Wallets', href: `/wallets?keyword=${encodeURIComponent(keyword)}`, active: currentStep === 'wallets' },
    { name: 'Transactions', href: `/transactions?keyword=${encodeURIComponent(keyword)}`, active: currentStep === 'transactions' },
    { name: 'Results', href: `/results?keyword=${encodeURIComponent(keyword)}`, active: currentStep === 'results' },
  ];

  return (
    <nav className='bg-blue-600 text-white p-4'>
      <div className='max-w-4xl mx-auto flex gap-4'>
        {steps.map((step) => (
          <Link key={step.name} href={step.href}>
            <span className={`px-3 py-1 rounded ${step.active ? 'bg-blue-800' : 'hover:bg-blue-700'}`}> 
              {step.name}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
