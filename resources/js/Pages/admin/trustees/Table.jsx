import React from 'react'
import EditDialog from './EditDialog'

const TrusteesTable = ({ trustees = [], onDelete }) => {
  return (
    <div className='bg-white/80 rounded-xl border shadow-sm'>
      <div className='grid grid-cols-5 gap-3 px-4 py-3 border-b text-sm font-semibold'>
        <div>Name</div>
        <div>Position</div>
        <div>Email</div>
        <div>Status</div>
        <div className='text-right'>Actions</div>
      </div>
      {trustees.map(tr => (
        <div key={tr.id} className='grid grid-cols-5 gap-3 px-4 py-3 border-b text-sm items-center'>
          <div className='truncate'>{tr.name}</div>
          <div className='truncate'>{tr.position}</div>
          <div className='truncate'>{tr.email || '-'}</div>
          <div>{tr.is_active ? 'Active' : 'Hidden'}</div>
          <div className='flex justify-end gap-2'>
            <EditDialog trustee={tr} />
            <button onClick={()=>onDelete(tr.id)} className='px-3 py-1 border rounded text-red-600'>Delete</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TrusteesTable


