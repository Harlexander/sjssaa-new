import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import Admin from '@/Layouts/AdminLayout';
import { ArrowLeftIcon, ArrowRightIcon, MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline';
import { AdminPaymentsTable } from '../../components/Tables/PaymentsTable';
import DashboardTitle from '../../components/Header/DashboardTitle';
import { set } from '../../lib/set';
import { searchByName } from '../../lib/searchFunction';
import MyModal from '../../components/Modal/Modal';
import BadgeSuccess from '../../components/Badge/BadgeSuccess';
import { ScaleLoader } from 'react-spinners';
import ActivePaymentCard from '../../components/Cards/ActivePaymentCard';
import { toast } from 'react-toastify';

const Index = ({ auth: { user }, data, activePayments }) => {
    const [current, setCurrent] = useState(1);
    const [filter, setFilter] = useState({ status: '', search: [] });
    const [isOpen, setIsOpen] = useState(false);

    // Initialize useForm
    const { data: formValues, setData, post, processing, reset, errors } = useForm({
        amount: '',
        title: '',
        description: '',
        set: 'all set',
        close_date: '',
    });

    const handleTextChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('ticket.create'), {
            onSuccess: () => {
                reset();
                closeModal();
                toast.success("Payment ticket created successfully! 🎉")
            },
            onError: () => {
                toast.error("Error creating payment ticket");
                console.log('Submission error:', errors);
            }
        });
    };

    const handleChange = (e) => {
        setCurrent(1);
        setFilter(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSearch = (e) => {
        const result = searchByName(e.target.value, data.data.map(item => ({
            ...item,
            firstName: item.member.firstName,
            lastName: item.member.lastName
        })));
        setFilter(prev => ({ ...prev, search: result }));
    };

    const closeModal = () => setIsOpen(!isOpen);

    return (
        <Admin>
            <MyModal
                isOpen={isOpen}
                title={"Create Payment Ticket"}
                body={<TicketForm
                    handleChange={handleTextChange}
                    formValues={formValues}
                    isSuccess={formValues.success}
                    errors={errors}
                />}
                button={<TicketButton
                    handleSubmit={handleSubmit}
                    isLoading={processing}
                />}
                closeModal={closeModal}
            />
            <main className='p-5 sm:p-10 space-y-8'>
                <div className='flex items-center justify-between'>
                    <DashboardTitle
                        title={"Payment Management"}
                        subtitle={"Manage payment records and create payment tickets"}
                    />
                    <button
                        onClick={closeModal}
                        className="bg-[#800000] hover:bg-[#700000] text-white px-6 py-3 rounded-lg transition-all duration-200 flex items-center gap-2 font-medium shadow-md hover:shadow-lg"
                    >
                        <span>💳</span>
                        Create Payment Ticket
                    </button>
                </div>

                <ActivePaymentCard admin={true} data={activePayments || []} loading={processing} />

                {/* Enhanced Search and Filter Section */}
                <div className='bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100'>
                    <div className='flex flex-col lg:flex-row gap-4'>
                        {/* Search Bar */}
                        <div className='flex-1 relative'>
                            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                                <MagnifyingGlassIcon className='h-5 w-5 text-gray-400' />
                            </div>
                            <input
                                onChange={handleSearch}
                                placeholder='Search payments by member name...'
                                name='search'
                                className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800000] focus:border-transparent transition-all duration-200 font-figtree'
                            />
                        </div>

                        {/* Status Filter */}
                        <div className='lg:w-48'>
                            <div className='relative'>
                                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                                    <FunnelIcon className='h-5 w-5 text-gray-400' />
                                </div>
                                <select
                                    name='status'
                                    onChange={handleChange}
                                    className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800000] focus:border-transparent transition-all duration-200 font-figtree appearance-none bg-white'
                                >
                                    <option value="">All Status</option>
                                    <option value="success">✅ Success</option>
                                    <option value="pending">⏳ Pending</option>
                                    <option value="failed">❌ Failed</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                {filter.search.length > 0 && (
                    <div className='bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100'>
                        <div className='flex items-center gap-2 mb-4'>
                            <span className='text-lg'>🔍</span>
                            <h3 className='text-lg font-semibold text-gray-800'>Search Results</h3>
                            <span className='bg-[#800000] text-white px-2 py-1 rounded-full text-sm'>
                                {filter.search.length} found
                            </span>
                        </div>
                        <AdminPaymentsTable data={filter.search || []} loading={processing} />
                    </div>
                )}

                <div className='bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100 overflow-hidden'>
                    <div className='p-6 border-b border-gray-200'>
                        <h3 className='text-lg font-semibold text-gray-800 flex items-center gap-2'>
                            <span>💳</span>
                            Payment Records
                        </h3>
                    </div>
                    <AdminPaymentsTable data={data.data || []} loading={processing} />

                    {/* Enhanced Pagination */}
                    <div className='px-6 py-4 bg-gray-50 border-t border-gray-200'>
                        <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
                            <div className='flex items-center gap-2 text-sm text-gray-600'>
                                <span className='bg-white px-3 py-2 rounded-lg shadow-sm border'>
                                    Page {data.current_page} of {data.last_page}
                                </span>
                                <span className='text-gray-400'>•</span>
                                <span>Total: {data.total || 0} payments</span>
                            </div>

                            <div className='flex items-center gap-2'>
                                <button 
                                    onClick={() => current > 1 && setCurrent(current - 1)} 
                                    disabled={current <= 1}
                                    className='px-4 py-2 bg-white shadow-md rounded-lg hover:bg-gray-50 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2'
                                >
                                    <ArrowLeftIcon className='h-4 w-4' />
                                    <span className='hidden sm:inline'>Previous</span>
                                </button>
                                
                                <div className='flex items-center gap-1'>
                                    {Array.from({ length: Math.min(5, data.last_page) }, (_, i) => {
                                        const pageNum = i + 1;
                                        return (
                                            <button
                                                key={pageNum}
                                                onClick={() => setCurrent(pageNum)}
                                                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                                                    current === pageNum
                                                        ? 'bg-[#800000] text-white'
                                                        : 'bg-white text-gray-600 hover:bg-gray-50'
                                                }`}
                                            >
                                                {pageNum}
                                            </button>
                                        );
                                    })}
                                </div>
                                
                                <button 
                                    onClick={() => current < data.last_page && setCurrent(current + 1)} 
                                    disabled={current >= data.last_page}
                                    className='px-4 py-2 bg-white shadow-md rounded-lg hover:bg-gray-50 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2'
                                >
                                    <span className='hidden sm:inline'>Next</span>
                                    <ArrowRightIcon className='h-4 w-4' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Admin>
    );
};

const TicketButton = ({ handleSubmit, isLoading }) => (
    <button
        onClick={handleSubmit}
        type="button"
        className="inline-flex text-white font-figtree justify-center rounded-lg border border-transparent bg-[#800000] px-6 py-3 text-sm font-medium hover:bg-[#700000] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#800000] focus-visible:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isLoading}
    >
        {isLoading ? (
            <div className='flex items-center gap-2'>
                <ScaleLoader className='px-2' color='white' height={16} />
                <span>Creating...</span>
            </div>
        ) : (
            <div className='flex items-center gap-2'>
                <span>💳</span>
                <span>Create Payment Ticket</span>
            </div>
        )}
    </button>
);

const TicketForm = ({ handleChange, formValues, isSuccess, errors }) => (
    <div className='space-y-6 py-6'>
        {isSuccess && (
            <div className='bg-green-50 border border-green-200 rounded-lg p-4'>
                <BadgeSuccess
                    message={"Payment Ticket Created Successfully!"}
                />
            </div>
        )}
        {errors && (
            <div className='bg-red-50 border border-red-200 rounded-lg p-4'>
                <div className='text-red-600 font-medium flex items-center gap-2'>
                    <span>⚠️</span>
                    {errors.message || 'Please check your input and try again'}
                </div>
            </div>
        )}

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='space-y-2'>
                <label className='block text-sm font-medium text-gray-700'>
                    Ticket Title *
                </label>
                <input
                    type="text"
                    name="title"
                    required
                    value={formValues.title}
                    onChange={handleChange}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800000] focus:border-transparent transition-all duration-200 font-figtree'
                    placeholder='Enter ticket title...'
                />
            </div>
            
            <div className='space-y-2'>
                <label className='block text-sm font-medium text-gray-700'>
                    Amount *
                </label>
                <input
                    type="text"
                    name="amount"
                    required
                    value={formValues.amount}
                    onChange={handleChange}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800000] focus:border-transparent transition-all duration-200 font-figtree'
                    placeholder='Enter amount...'
                />
            </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='space-y-2'>
                <label className='block text-sm font-medium text-gray-700'>
                    Close Date *
                </label>
                <input
                    type="date"
                    name="close_date"
                    required
                    value={formValues.close_date}
                    onChange={handleChange}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800000] focus:border-transparent transition-all duration-200 font-figtree'
                />
            </div>
            
            <div className='space-y-2'>
                <label className='block text-sm font-medium text-gray-700'>
                    Target Set *
                </label>
                <select
                    name="set"
                    required
                    value={formValues.set}
                    onChange={handleChange}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800000] focus:border-transparent transition-all duration-200 font-figtree appearance-none bg-white'
                >
                    <option value={"all set"}>All Set</option>
                    {set.map((item) => (
                        <option key={item} value={item}>{item}</option>
                    ))}
                </select>
            </div>
        </div>

        <div className='space-y-2'>
            <label className='block text-sm font-medium text-gray-700'>
                Description *
            </label>
            <textarea
                id="content"
                name="description"
                required
                value={formValues.description}
                onChange={handleChange}
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800000] focus:border-transparent transition-all duration-200 font-figtree resize-none'
                placeholder='Enter detailed description...'
                rows={5}
            ></textarea>
        </div>
    </div>
);

export default Index;
