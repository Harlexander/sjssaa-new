import React from 'react'
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from '@/Components/ui/menubar'
import { router } from '@inertiajs/react'
import { toast } from 'react-toastify'
import { Bars2Icon } from '@heroicons/react/24/outline'
import { Ellipsis } from 'lucide-react'

const RowActions = ({ member }) => {
  const grantAdmin = () => {
    router.post('/admin/members/grant-admin', { id: member.id }, {
      onSuccess: () => toast.success('Granted admin rights'),
      onError: () => toast.error('Failed to grant admin rights'),
      preserveScroll: true,
    })
  }
  const userStatus = (id, status) => {
    router.put(route("user.status"), { id, status }, {
      onSuccess: () => toast.success("User status updated!")
    })
  }

  const deleteUser = (id) => {
    router.delete(route("user.delete"), { data : { id } }, {
      onSuccess: () => toast.success("User deleted successfully!")
    })
  }
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger className=''><Ellipsis className='w-4 h-4' /></MenubarTrigger>
        <MenubarContent className='bg-white'>
          <MenubarItem onClick={() => userStatus(member.id, member.status === 'active' ? 'suspended' : 'active')}>{member.status === 'active' ? 'Deactivate account' : 'Activate account'}</MenubarItem>
          <MenubarItem onClick={grantAdmin}>Grant admin right</MenubarItem>
          <MenubarItem onClick={() => deleteUser(member.id)} className='text-red-600'>Delete</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

export default RowActions


