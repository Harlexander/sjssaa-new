import React from 'react'
import Admin from '@/Layouts/AdminLayout'
import DashboardTitle from '@/Components/Header/DashboardTitle'
import { useForm } from '@inertiajs/react'
import CreateDialog from './executives/CreateDialog'
import ExecTable from './executives/Table'

const AdminExecutives = ({ executives }) => {
  const editForm = useForm({})
  const remove = (id) => { if (confirm('Delete executive?')) editForm.delete(`/admin/executives/${id}`) }

  return (
    <Admin>
      <main className='p-5 sm:p-10 space-y-8'>
        <div className='flex items-center justify-between'>
          <DashboardTitle title={'Executives'} subtitle={'Manage national executives'} />
          <CreateDialog />
        </div>

        <ExecTable executives={executives} onDelete={remove} />
      </main>
    </Admin>
  )
}

export default AdminExecutives


