import React from 'react'
import { useForm } from '@inertiajs/react'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/Components/ui/dialog'
import { PencilSquareIcon } from '@heroicons/react/24/outline'
import { toast } from 'sonner'

const Field = ({ label, error, defaultValue, value, onChange, type = 'text' }) => (
  <div>
    <label className='block text-sm font-medium mb-1'>{label}</label>
    <input type={type} defaultValue={defaultValue} value={value} onChange={onChange} className='w-full border rounded p-2' />
    {error && <p className='text-red-600 text-sm mt-1'>{error}</p>}
  </div>
)

const FileField = ({ label, error, onChange }) => (
  <div>
    <label className='block text-sm font-medium mb-1'>{label}</label>
    <input type='file' accept='image/*' onChange={onChange} className='w-full border rounded p-2 bg-white' />
    {error && <p className='text-red-600 text-sm mt-1'>{error}</p>}
  </div>
)

const EditDialog = ({ trustee }) => {
  const form = useForm({ name: trustee.name, position: trustee.position, email: trustee.email, image: null, order: trustee.order, is_active: trustee?.is_active ?? true })
  const submit = (e) => { 
    e.preventDefault(); 
    form.post(`/admin/trustees/${trustee.id}`, {
        onSuccess: () => {
            toast.success('Trustee updated successfully')
        },
        onError: () => {
            toast.error('Failed to update trustee')
        }
    }) 
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className='px-3 py-1 border rounded flex items-center gap-1'><PencilSquareIcon className='h-4 w-4'/> Edit</button>
      </DialogTrigger>
      <DialogContent className='max-w-xl'>
        <DialogHeader>
          <DialogTitle>Edit Trustee</DialogTitle>
        </DialogHeader>
        <form onSubmit={submit} className='space-y-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Field label='Name' value={form.data.name ?? ''} onChange={(e)=>form.setData('name', e.target.value)} error={form.errors.name} />
            <Field label='Position' value={form.data.position ?? ''} onChange={(e)=>form.setData('position', e.target.value)} error={form.errors.position} />
            <Field label='Email' type='email' value={form.data.email ?? ''} onChange={(e)=>form.setData('email', e.target.value)} error={form.errors.email} />
            <FileField label='Image' onChange={(e)=>form.setData('image', e.target.files[0])} error={form.errors.image} />
            <Field label='Order' type='number' value={form.data.order ?? ''} onChange={(e)=>form.setData('order', e.target.value)} error={form.errors.order} />
            <div className='flex items-center gap-2'>
              <input id={`active-${trustee.id}`} type='checkbox' checked={!!form.data.is_active} onChange={(e)=>form.setData('is_active', e.target.checked)} />
              <label htmlFor={`active-${trustee.id}`} className='text-sm'>Active</label>
            </div>
          </div>
          <DialogFooter>
            <button type='submit' className='bg-[#800000] text-white px-5 py-2 rounded-lg'>Save</button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default EditDialog


