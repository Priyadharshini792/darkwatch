'use client';

import React, { useState } from 'react';
import NavBar from '../../../components/NavBar';
import { getGraphData } from '../../../data/graphData';

interface GraphPageProps {
  params: Promise<{ wallet: string }>;
}

interface NodeData {
  id: string;
  label: string;
  x: number;
  y: number;
  color: string;
  radius: number;
}

export default function GraphPage({ params }: GraphPageProps) {
  const { wallet } = React.use(params);
  const decodedWallet = decodeURIComponent(wallet);
  const data = getGraphData(decodedWallet);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const nodePositions: NodeData[] = data.nodes.map((node, i) => {
    const angle = (i / data.nodes.length) * Math.PI * 2;
    const radius = 120;
    const centerX = 350;
    const centerY = 250;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    
    const isWallet = node.label === 'Wallet';
    return {
      ...node,
      x,
      y,
      color: isWallet ? '#0ea5e9' : '#8b5cf6',
      radius: isWallet ? 35 : 25,
    };
  });

  const getNodeColor = (nodeId: string, isWallet: boolean) => {
    if (hoveredNode === nodeId) return isWallet ? '#0284c7' : '#7c3aed';
    return isWallet ? '#0ea5e9' : '#8b5cf6';
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'>
      <NavBar currentStep='' />
      <div className='max-w-6xl mx-auto p-8'>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
          <div className='lg:col-span-3'>
            <div className='bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/20'>
              <h1 className='text-3xl font-bold text-white mb-2'>Transaction Graph</h1>
              <p className='text-blue-200 text-sm mb-6'>Wallet: <span className='font-mono text-blue-300'>{decodedWallet.substring(0, 16)}...</span></p>
              
              {data.nodes.length === 0 ? (
                <div className='h-96 flex items-center justify-center'>
                  <p className='text-blue-200'>No graph data available.</p>
                </div>
              ) : (
                <div className='overflow-x-auto'>
                  <svg width='100%' height='500' viewBox='0 0 700 500' className='bg-gradient-to-b from-slate-800/50 to-purple-900/20 rounded-xl'>
                    <defs>
                      <linearGradient id='linkGradient' x1='0%' y1='0%' x2='100%' y2='100%'>
                        <stop offset='0%' style={{ stopColor: '#3b82f6', stopOpacity: 0.6 }} />
                        <stop offset='100%' style={{ stopColor: '#8b5cf6', stopOpacity: 0.6 }} />
                      </linearGradient>
                      <filter id='glow'>
                        <feGaussianBlur stdDeviation='3' result='coloredBlur' />
                        <feMerge>
                          <feMergeNode in='coloredBlur' />
                          <feMergeNode in='SourceGraphic' />
                        </feMerge>
                      </filter>
                    </defs>

                    {data.links.map((link, i) => {
                      const source = nodePositions.find(n => n.id === link.source);
                      const target = nodePositions.find(n => n.id === link.target);
                      if (source && target) {
                        const isHovered = hoveredNode === source.id || hoveredNode === target.id;
                        return (
                          <line
                            key={i}
                            x1={source.x}
                            y1={source.y}
                            x2={target.x}
                            y2={target.y}
                            stroke='url(#linkGradient)'
                            strokeWidth={isHovered ? 4 : 2}
                            opacity={isHovered ? 1 : 0.5}
                          />
                        );
                      }
                      return null;
                    })}

                    {nodePositions.map((node, i) => {
                      const isWallet = node.label === 'Wallet';
                      return (
                        <g key={i}
                          onMouseEnter={() => setHoveredNode(node.id)}
                          onMouseLeave={() => setHoveredNode(null)}
                        >
                          <circle
                            cx={node.x}
                            cy={node.y}
                            r={node.radius + 8}
                            fill={node.color}
                            opacity='0.2'
                          />
                          
                          <circle
                            cx={node.x}
                            cy={node.y}
                            r={node.radius}
                            fill={getNodeColor(node.id, isWallet)}
                            filter='url(#glow)'
                          />
                          
                          <circle
                            cx={node.x}
                            cy={node.y}
                            r={node.radius}
                            fill='none'
                            stroke='rgba(255,255,255,0.3)'
                            strokeWidth='2'
                          />
                          
                          <text
                            x={node.x}
                            y={node.y - 5}
                            textAnchor='middle'
                            fontSize='16'
                            fontWeight='bold'
                            fill='white'
                          >
                            {isWallet ? '💼' : '🔗'}
                          </text>
                          
                          <text
                            x={node.x}
                            y={node.y + 15}
                            textAnchor='middle'
                            fontSize='12'
                            fontWeight='bold'
                            fill='white'
                          >
                            {node.label}
                          </text>
                        </g>
                      );
                    })}
                  </svg>
                </div>
              )}
            </div>
          </div>

          <div className='space-y-4'>
            <div className='bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/20'>
              <h3 className='text-lg font-bold text-white mb-4'>📊 Graph Info</h3>
              <div className='space-y-3'>
                <div>
                  <p className='text-blue-200 text-sm'>Nodes</p>
                  <p className='text-2xl font-bold text-white'>{data.nodes.length}</p>
                </div>
                <div>
                  <p className='text-blue-200 text-sm'>Links</p>
                  <p className='text-2xl font-bold text-white'>{data.links.length}</p>
                </div>
                <div className='pt-3 border-t border-white/10'>
                  <p className='text-blue-300 text-xs mb-2'>Legend:</p>
                  <div className='space-y-1'>
                    <div className='flex items-center gap-2'>
                      <div className='w-4 h-4 rounded-full bg-sky-400'></div>
                      <span className='text-xs text-blue-100'>Wallet</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <div className='w-4 h-4 rounded-full bg-purple-400'></div>
                      <span className='text-xs text-blue-100'>Transaction</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/20'>
              <h3 className='text-lg font-bold text-white mb-4'>🔐 Wallet Address</h3>
              <div className='bg-black/30 p-3 rounded-lg'>
                <p className='text-xs text-blue-300 font-mono break-all'>{decodedWallet}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}