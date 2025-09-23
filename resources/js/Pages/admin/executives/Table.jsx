import React from 'react'
import EditDialog from './EditDialog'

const ExecTable = ({ executives = [], onDelete }) => {
  return (
    <div className='bg-white/80 rounded-xl border shadow-sm'>
      <div className='grid grid-cols-6 gap-3 px-4 py-3 border-b text-sm font-semibold'>
        <div>Name</div>
        <div>Position</div>
        <div>Email</div>
        <div>Order</div>
        <div>Status</div>
        <div className='text-right'>Actions</div>
      </div>
      {executives.map(ex => (
        <div key={ex.id} className='grid grid-cols-6 gap-3 px-4 py-3 border-b text-sm items-center'>
          <div className='truncate'>{ex.name}</div>
          <div className='truncate'>{ex.position}</div>
          <div className='truncate'>{ex.email}</div>
          <div>{ex.order}</div>
          <div>{ex.is_active ? 'Active' : 'Hidden'}</div>
          <div className='flex justify-end gap-2'>
            <EditDialog executive={ex} />
            <button onClick={()=>onDelete(ex.id)} className='px-3 py-1 border rounded text-red-600'>Delete</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ExecTable


