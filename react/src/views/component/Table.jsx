import React from 'react';
import Input from './Input'; // Import the Input component if used within the table

const Table = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>
                  {cell.type === 'input' ? (
                    <Input
                      value={cell.value}
                      placeholder={cell.placeholder}
                      readOnly={cell.readOnly}
                      className={cell.className}
                    />
                  ) : (
                    cell
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
