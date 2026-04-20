interface TableProps {
  headers: string[];
  rows: (string | number | JSX.Element)[][];
}

export default function Table({ headers, rows }: TableProps) {
  return (
    <table className='w-full border-collapse border border-gray-300'>
      <thead>
        <tr className='bg-gray-100'>
          {headers.map((header, i) => (
            <th key={i} className='border border-gray-300 p-2 text-left'>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className='hover:bg-gray-50'>
            {row.map((cell, j) => (
              <td key={j} className='border border-gray-300 p-2'>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}