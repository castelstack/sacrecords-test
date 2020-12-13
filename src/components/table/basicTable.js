import React from 'react';
import { useTable } from 'react-table';
import DATAA  from '../DATAA.json';
import { COLUMNS } from './column';
import { useMemo } from 'react';
import axios from "axios";

const Table = () => {
    
       
          
            async function fetchRecords() {
              const response = await axios(
                "https://jsonplaceholder.typicode.com/users"
              );
              const record = response.data;
              console.log(record);
            
            }
            fetchRecords();
            
            
            
            
            const columns = useMemo(() => COLUMNS, [])
            const data = useMemo(()  => record, [])
            
            const tableInstance = useTable({
                columns,
                record
            })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance
    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroups) => (
                    <tr {...headerGroups.getFooterGroupProps()}>
                        {headerGroups.headers.map((column) => (
                        
                        <th {...column.getHeaderProps()}>
                        {column.render('Header')}</th>
                        ))}
                    </tr>

                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row) 
                    return (

                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                
                            })}
                </tr>
                    )
                })}
            </tbody>
        </table>
    );
};

export default Table ;