import React from 'react';
import Input from './Input'; // Import the Input component if used within the table

const Table = ({ columns, dataList, action, actionshow, subAction2Show }) => {
  console.log(dataList); // This helps in debugging if data is being received

  return (
    <div className="overflow-x-auto">
      <table className="table w-full table-sm">
        <thead className='border bg-gray-200'>
          <tr>
            {actionshow ? <th align={'left'}>Action</th> : ''}
            {columns.map((column, index) => (
              <th key={index} align={column.align}>{column.description}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataList?.map((row) => {
            try {
              return (
                <tr className='hover' role="checkbox" tabIndex={-1} key={row.id}>
                  {actionshow ? (
                    <td>
                      {/* {subAction2Show ? action(row) : null} */}
                      {action(row)}
                    </td>
                  ) : null}
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <td
                        key={column.id}
                        align={column.align}
                        style={{
                          color:
                            parseFloat(value) < 0 ? "#C83232" : "inherit",
                        }}
                      >
                        {column?.format ? column.format(value) : value}
                      </td>
                    );
                  })}
                </tr>
              );
            } catch (error) {
              console.log(error);
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
