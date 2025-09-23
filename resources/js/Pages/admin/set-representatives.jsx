import React from 'react'
import Admin from '@/Layouts/AdminLayout'
import DashboardTitle from '@/Components/Header/DashboardTitle'
import { useForm } from '@inertiajs/react'
import CreateDialog from './set-representatives/CreateDialog'
import SetRepsTable from './set-representatives/Table'

const AdminSetReps = ({ sets = [], reps = [] }) => {
  const editForm = useForm({})
  const remove = (id) => { if (confirm('Delete representative?')) editForm.delete(`/admin/set-representatives/${id}`) }

  return (
    <Admin>
      <main className='p-5 sm:p-10 space-y-8'>
        <div className='flex items-center justify-between'>
          <DashboardTitle title={'Set Representatives'} subtitle={'Manage representatives by set'} />
          <CreateDialog />
        </div>

        <SetRepsTable reps={reps} onDelete={remove} />
      </main>
    </Admin>
  )
}

export default AdminSetReps


