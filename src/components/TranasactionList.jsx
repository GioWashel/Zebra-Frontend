import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import "./TransactionList.css"
import { Button } from '@mui/material';
const columns = [
  { field: 'id', headerName:'id', width: 100},
  { field: 'date', headerName: 'date', width: 100 },
  { field: 'description', headerName: 'description', width: 100 },
  { field: 'amount', headerName: 'amount', type: 'number', width: 100},
  { field: 'category', headerName: 'category',width: 100,}
];

const rows = [
  { id: 1, date: "4/22/23", description: 'mcdonalds', amount: 29, category: "food" },
  { id: 2, date: "4/23/24", description: 'tacboell', amount: 5, category: "food" },
  { id: 3, date: "4/23/25", description: 'arbys', amount: 6, category: "food" },
];

export default function TransactionList() {
  return (
    <div  className='transaction-container'>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}