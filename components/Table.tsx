interface TableProps {
  headers: string[];
  rows: (string | number | JSX.Element)[][];
}

export default function Table({ headers, rows }: TableProps) {
  return (
    <div className='w-full overflow-x-auto'>
      <table className='w-full'>
        <thead>
          <tr className='bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-b border-white/20'>
            {headers.map((header, i) => (
              <th key={i} className='px-6 py-3 text-left text-sm font-semibold text-blue-200'>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className='border-b border-white/10 hover:bg-white/5 transition-colors'>
              {row.map((cell, j) => (
                <td key={j} className='px-6 py-4 text-sm text-blue-100'>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}