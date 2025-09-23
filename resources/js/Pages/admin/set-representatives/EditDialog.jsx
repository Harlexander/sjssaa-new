import React from 'react'
import { useForm } from '@inertiajs/react'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/Components/ui/dialog'
import { PencilSquareIcon } from '@heroicons/react/24/outline'
import { set as setOptions } from '@/lib/set'
import { toast } from 'sonner'

const Grid = ({ children }) => (
  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>{children}</div>
)

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

const SelectField = ({ label, error, defaultValue, value, onChange, options = [], placeholder = 'Select' }) => (
  <div>
    <label className='block text-sm font-medium mb-1'>{label}</label>
    <select defaultValue={defaultValue} value={value} onChange={onChange} className='w-full border rounded p-2 bg-white'>
      <option value=''>{placeholder}</option>
      {options.map((opt) => (<option key={opt} value={opt}>{opt}</option>))}
    </select>
    {error && <p className='text-red-600 text-sm mt-1'>{error}</p>}
  </div>
)

const EditDialog = ({ rep }) => {
  const form = useForm({ set: rep.set, name: rep.name, position: rep.position, email: rep.email, image: null, order: rep.order, is_active: rep?.is_active ?? true })
  const submit = (e) => {
    e.preventDefault();
    form.post(`/admin/set-representatives/${rep.id}`, {
      onSuccess: () => toast.success('Representative updated'),
      onError: () => toast.error('Update failed')
    })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className='px-3 py-1 border rounded flex items-center gap-1'><PencilSquareIcon className='h-4 w-4'/> Edit</button>
      </DialogTrigger>
      <DialogContent className='max-w-xl'>
        <DialogHeader>
          <DialogTitle>Edit Representative</DialogTitle>
        </DialogHeader>
        <form onSubmit={submit} className='space-y-4'>
          <Grid>
            <SelectField label='Set' value={form.data.set} onChange={(e)=>form.setData('set', e.target.value)} error={form.errors.set} options={setOptions} placeholder='Select a set' />
            <Field label='Name' value={form.data.name ?? ''} onChange={(e)=>form.setData('name', e.target.value)} error={form.errors.name} />
            <Field label='Position' value={form.data.position ?? ''} onChange={(e)=>form.setData('position', e.target.value)} error={form.errors.position} />
            <Field label='Email' type='email' value={form.data.email ?? ''} onChange={(e)=>form.setData('email', e.target.value)} error={form.errors.email} />
            <FileField label='Image' onChange={(e)=>form.setData('image', e.target.files[0])} error={form.errors.image} />
            <Field label='Order' type='number' value={form.data.order ?? ''} onChange={(e)=>form.setData('order', e.target.value)} error={form.errors.order} />
            <div className='flex items-center gap-2'>
              <input id={`active-${rep.id}`} type='checkbox' checked={!!form.data.is_active} onChange={(e)=>form.setData('is_active', e.target.checked)} />
              <label htmlFor={`active-${rep.id}`} className='text-sm'>Active</label>
            </div>
          </Grid>
          <DialogFooter>
            <button type='submit' className='bg-[#800000] text-white px-5 py-2 rounded-lg'>Save</button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default EditDialog


