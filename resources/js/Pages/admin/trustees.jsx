import React from 'react'
import Admin from '@/Layouts/AdminLayout'
import DashboardTitle from '@/Components/Header/DashboardTitle'
import { useForm } from '@inertiajs/react'
import CreateDialog from './trustees/CreateDialog'
import TrusteesTable from './trustees/Table'

const AdminTrustees = ({ trustees }) => {
  const editForm = useForm({})
  const remove = (id) => { if (confirm('Delete trustee?')) editForm.delete(`/admin/trustees/${id}`) }

  return (
    <Admin>
      <main className='p-5 sm:p-10 space-y-8'>
        <div className='flex items-center justify-between'>
          <DashboardTitle title={'Board of Trustees'} subtitle={'Manage trustees'} />
          <CreateDialog />
        </div>

        <TrusteesTable trustees={trustees} onDelete={remove} />
      </main>
    </Admin>
  )
}

export default AdminTrustees


