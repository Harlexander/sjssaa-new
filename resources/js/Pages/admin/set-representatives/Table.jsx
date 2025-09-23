import React from 'react'
import EditDialog from './EditDialog'

const SetRepsTable = ({ reps = [], onDelete }) => {
  return (
    <div className='bg-white/80 rounded-xl border shadow-sm'>
      <div className='grid grid-cols-6 gap-3 px-4 py-3 border-b text-sm font-semibold'>
        <div>Set</div>
        <div>Name</div>
        <div>Position</div>
        <div>Email</div>
        <div>Status</div>
        <div className='text-right'>Actions</div>
      </div>
      {reps.map(item => (
        <div key={item.id} className='grid grid-cols-6 gap-3 px-4 py-3 border-b text-sm items-center'>
          <div className='truncate'>{item.set}</div>
          <div className='truncate'>{item.name}</div>
          <div className='truncate'>{item.position}</div>
          <div className='truncate'>{item.email || '-'}</div>
          <div>{item.is_active ? 'Active' : 'Hidden'}</div>
          <div className='flex justify-end gap-2'>
            <EditDialog rep={item} />
            <button onClick={()=>onDelete(item.id)} className='px-3 py-1 border rounded text-red-600'>Delete</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SetRepsTable


