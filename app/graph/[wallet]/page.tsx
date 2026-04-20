'use client';

import React from 'react';
import NavBar from '../../../components/NavBar';
import { getGraphData } from '../../../data/graphData';

interface GraphPageProps {
  params: Promise<{ wallet: string }>;
}

export default function GraphPage({ params }: GraphPageProps) {
  const { wallet } = React.use(params);
  const decodedWallet = decodeURIComponent(wallet);
  const data = getGraphData(decodedWallet);
  const nodePositions = data.nodes.map((node, i) => ({
    ...node,
    x: 100 + (i % 3) * 150,
    y: 100 + Math.floor(i / 3) * 100,
  }));

  return (
    <div className='min-h-screen'>
      <NavBar currentStep='' />
      <div className='max-w-4xl mx-auto p-8'>
        <div className='bg-white p-6 rounded-lg shadow'>
          <h1 className='text-2xl font-bold mb-4'>Transaction Graph for {decodedWallet}</h1>
          {data.nodes.length === 0 ? (
            <p className='text-gray-600'>No graph data available.</p>
          ) : (
            <svg width='600' height='400' className='border border-gray-300 rounded'>
              {data.links.map((link, i) => {
                const source = nodePositions.find(n => n.id === link.source);
                const target = nodePositions.find(n => n.id === link.target);
                if (source && target) {
                  return (
                    <line
                      key={i}
                      x1={source.x}
                      y1={source.y}
                      x2={target.x}
                      y2={target.y}
                      stroke='#374151'
                      strokeWidth='2'
                    />
                  );
                }
                return null;
              })}
              {nodePositions.map((node, i) => (
                <g key={i}>
                  <circle cx={node.x} cy={node.y} r='25' fill='#3B82F6' />
                  <text
                    x={node.x}
                    y={node.y + 5}
                    textAnchor='middle'
                    fill='white'
                    fontSize='12'
                    fontWeight='bold'
                  >
                    {node.label}
                  </text>
                </g>
              ))}
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}