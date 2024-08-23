import React from 'react';
import { Table as MUITable, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TableFooter,TextField } from '@mui/material';
import Config from '@services/Config.json';
const Table = ({ columns, dataList, action, actionshow,size, subAction2Show}) => {
  return (
    <TableContainer component={Paper} className="overflow-x-auto">
      <MUITable size={size}>
        <TableHead sx={{ backgroundColor: Config.bg_primary }}>
          <TableRow >
            {columns.map((column, index) => (
              <TableCell className="small-header" sx={{ color: "white",fontSize:12 }} key={index} align={column.align}>{column.description}</TableCell>
            ))}
            {actionshow && <TableCell  sx={{ color: "white" }} align="left">ACTION</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {dataList?.length ? (
            dataList.map((row) => {
              try {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{ color: parseFloat(value) < 0 ? "#C83232" : "inherit" }}
                          sx={{fontSize:12}}
                        >
                          {column.format ? column.format(value) : value}
                        </TableCell>
                      );
                    })}
                      {actionshow && (
                      <TableCell  sx={{fontSize:12}}>
                        {subAction2Show ? action(row) : action(row)}
                      </TableCell>
                    )}
                  </TableRow>
                );
              } catch (error) {
                console.error(error);
                return null; // Ensure to return null in case of an error
              }
            })
          ) : (
            <TableRow>
              <TableCell  sx={{fontSize:13}} colSpan={actionshow ? columns.length + 1 : columns.length} align="center">
                NO DATA AVAILABLE
              </TableCell>
            </TableRow>
          )}
        </TableBody>
       
      </MUITable>
    </TableContainer>
  );
};

export default Table;
