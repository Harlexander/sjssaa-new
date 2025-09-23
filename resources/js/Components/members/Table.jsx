import React from 'react'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/Components/ui/table'
import RowActions from './RowActions'

const MembersDataTable = ({ rows = [] }) => {
  return (
    <div className='p-4'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Mobile</TableHead>
            <TableHead>Set</TableHead>
            <TableHead>Country</TableHead>
            <TableHead>Profession</TableHead>
            <TableHead>City</TableHead>
            <TableHead>State</TableHead>
            <TableHead className='text-right'>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((m) => (
            <TableRow key={m.id || `${m.email}-${m.mobile}`}>
              <TableCell className='font-medium'>{[m.firstName, m.lastName].filter(Boolean).join(' ')}</TableCell>
              <TableCell>{m.email}</TableCell>
              <TableCell>{m.mobile}</TableCell>
              <TableCell>{m.set}</TableCell>
              <TableCell>{m.country || '-'}</TableCell>
              <TableCell>{m.profession || '-'}</TableCell>
              <TableCell>{m.city || '-'}</TableCell>
              <TableCell>{m.state || '-'}</TableCell>
              <TableCell>
                <div className='flex justify-end'>
                  <RowActions member={m} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default MembersDataTable


