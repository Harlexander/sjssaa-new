import React from 'react'
import { useForm } from '@inertiajs/react'
import { PlusIcon } from '@heroicons/react/24/outline'
import { set as setOptions } from '@/lib/set'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/Components/ui/dialog'
import { toast } from 'react-toastify'

const CreateDialog = () => {
  const form = useForm({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    set: '',
    country: '',
    profession: '',
    city: '',
    state: '',
    password: '',
  })

  const submit = (e) => {
    e.preventDefault()
    form.post('/admin/members/create', {
      onSuccess: () => { toast.success('Member created successfully! 🎉'); form.reset() },
      onError: () => toast.error('Failed to create member. Please check the form.'),
    })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-all duration-200 flex items-center gap-2 font-medium shadow-md hover:shadow-lg">
          <PlusIcon className='h-5 w-5' />
          <span>Add Member</span>
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <PlusIcon className="h-6 w-6 text-green-600" />
            Create New Member
          </DialogTitle>
          <DialogDescription>
            Add a new member to the association. Fill in all required fields.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={submit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Field label="First Name *" value={form.data.firstName} onChange={(e)=>form.setData('firstName', e.target.value)} error={form.errors.firstName} placeholder="Enter first name" />
            <Field label="Last Name *" value={form.data.lastName} onChange={(e)=>form.setData('lastName', e.target.value)} error={form.errors.lastName} placeholder="Enter last name" />
            <Field type="email" label="Email *" value={form.data.email} onChange={(e)=>form.setData('email', e.target.value)} error={form.errors.email} placeholder="Enter email address" />
            <Field type="tel" label="Mobile *" value={form.data.mobile} onChange={(e)=>form.setData('mobile', e.target.value)} error={form.errors.mobile} placeholder="Enter mobile number" />
            <Select label="Set *" value={form.data.set} onChange={(e)=>form.setData('set', e.target.value)} error={form.errors.set} options={setOptions} />
            <Field label="Country" value={form.data.country} onChange={(e)=>form.setData('country', e.target.value)} error={form.errors.country} placeholder="Enter country" />
            <Field label="Profession" value={form.data.profession} onChange={(e)=>form.setData('profession', e.target.value)} error={form.errors.profession} placeholder="Enter profession" />
            <Field label="City" value={form.data.city} onChange={(e)=>form.setData('city', e.target.value)} error={form.errors.city} placeholder="Enter city" />
            <Field label="State" value={form.data.state} onChange={(e)=>form.setData('state', e.target.value)} error={form.errors.state} placeholder="Enter state" />
            <Field type="password" label="Password *" value={form.data.password} onChange={(e)=>form.setData('password', e.target.value)} error={form.errors.password} placeholder="Enter password (min 8 characters)" />
          </div>

          <DialogFooter>
            <button type="submit" disabled={form.processing} className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl transition-all duration-200 font-semibold shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2">
              {form.processing ? (<><Spinner/> Creating...</>) : (<><PlusIcon className="h-5 w-5" /> Create Member</>)}
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

const Field = ({ label, error, value, onChange, type = 'text', placeholder }) => (
  <div className="space-y-2">
    <label className="block text-sm font-semibold text-gray-700">{label}</label>
    <input type={type} value={value} onChange={onChange} placeholder={placeholder} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200" required={label.includes('*')} />
    {error && <p className="text-sm text-red-500">{error}</p>}
  </div>
)

const Select = ({ label, error, value, onChange, options }) => (
  <div className="space-y-2">
    <label className="block text-sm font-semibold text-gray-700">{label}</label>
    <select value={value} onChange={onChange} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200" required>
      <option value="">Select a set</option>
      {options.map((opt)=> (<option key={opt} value={opt}>{opt}</option>))}
    </select>
    {error && <p className="text-sm text-red-500">{error}</p>}
  </div>
)

const Spinner = () => (
  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
)

export default CreateDialog


