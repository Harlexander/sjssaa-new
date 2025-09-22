import React, { useState, useMemo } from 'react';
import Admin from '@/Layouts/AdminLayout';
import DashboardTitle from '../../components/Header/DashboardTitle';
import MyModal from '../../components/Modal/Modal';
import { handleChange, handleImageChange } from '../../lib/handleInput';
import { PhotoIcon, MagnifyingGlassIcon, FunnelIcon, XMarkIcon, CalendarIcon, PrinterIcon } from '@heroicons/react/24/solid';
import { set } from '../../lib/set';
import { ScaleLoader } from 'react-spinners';
import BadgeSuccess from '../../components/Badge/BadgeSuccess';
import { AdminEventsTable } from '../../components/Tables/EventsTable';
import { router, useForm } from '@inertiajs/react';
import { toast } from 'react-toastify';

const Index = ({ events }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [selectedSet, setSelectedSet] = useState('');
    const [isExporting, setIsExporting] = useState(false);

    const closeModal = () => {
        setIsOpen(false);
        reset();
    };

    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        set: '',
        type: '',
        reg_fee: 0,
        date: '',
        description: '',
        image: null
    });

    // Filter and search events
    const filteredEvents = useMemo(() => {
        let filtered = events.data || [];
        
        // Apply search filter
        if (searchTerm.length > 0) {
            filtered = filtered.filter(event => 
                event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                event.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        
        // Apply type filter
        if (selectedType.length > 0) {
            filtered = filtered.filter(event => event.type === selectedType);
        }
        
        // Apply set filter
        if (selectedSet.length > 0) {
            filtered = filtered.filter(event => event.set === selectedSet);
        }
        
        return filtered;
    }, [events.data, searchTerm, selectedType, selectedSet]);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleTypeFilter = (e) => {
        setSelectedType(e.target.value);
    };

    const handleSetFilter = (e) => {
        setSelectedSet(e.target.value);
    };

    const clearFilters = () => {
        setSearchTerm('');
        setSelectedType('');
        setSelectedSet('');
    };

    const handleSubmit = () => {
        post(route('event.create'), {
            onSuccess: () => {
                closeModal();
                toast.success("Event created successfully! 🎉");
            },
            onError: () => {
                toast.error("Error creating event");
            }
        });
    };

    // CSV Export functionality
    const exportToCSV = () => {
        setIsExporting(true);
        
        try {
            const eventsToExport = filteredEvents.length > 0 ? filteredEvents : (events.data || []);
            
            // Define CSV headers
            const headers = [
                'ID',
                'Title',
                'Type',
                'Set',
                'Registration Fee',
                'Date',
                'Description',
                'Created At'
            ];

            // Prepare data rows
            const csvData = eventsToExport.map(event => [
                event.id || '',
                event.title || '',
                event.type || '',
                event.set || '',
                event.reg_fee || '0',
                event.date || '',
                event.description || '',
                event.created_at || ''
            ]);

            // Create CSV content
            const csvContent = [
                headers.join(','),
                ...csvData.map(row => 
                    row.map(field => 
                        typeof field === 'string' && field.includes(',') 
                            ? `"${field.replace(/"/g, '""')}"` 
                            : field
                    ).join(',')
                )
            ].join('\n');

            // Create and download file
            const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
            const link = document.createElement('a');
            const url = URL.createObjectURL(blob);
            link.setAttribute('href', url);
            link.setAttribute('download', `events_export_${new Date().toISOString().split('T')[0]}.csv`);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            toast.success(`Successfully exported ${eventsToExport.length} events to CSV! 📊`);
        } catch (error) {
            console.error('Export error:', error);
            toast.error('Error exporting events data');
        } finally {
            setIsExporting(false);
        }
    };

    return (
        <Admin>
            <MyModal
                isOpen={isOpen}
                title={"Create New Event"}
                body={
                    <Form 
                        handleChange={(e) => handleChange(e, setData)}
                        formValues={data}
                        handleImageChange={(e) => handleImageChange(e, setData)}
                        isSuccess={processing === false && errors.length === 0}
                        errors={errors}
                    />
                }
                button={
                    <Button 
                        handleSubmit={handleSubmit}
                        isLoading={processing}
                    />
                }
                closeModal={closeModal}
            />
            <main className='p-5 sm:p-10 space-y-8'>
                <div className='flex items-center justify-between'>
                    <DashboardTitle
                        title={"Event Management"}
                        subtitle={"Create and manage association events"}
                    />
                    <button
                        onClick={closeModal}
                        className="bg-[#800000] hover:bg-[#700000] text-white px-6 py-3 rounded-lg transition-all duration-200 flex items-center gap-2 font-medium shadow-md hover:shadow-lg"
                    >
                        <CalendarIcon className='h-5 w-5' />
                        Create Event
                    </button>
                </div>

                {/* Enhanced Search and Filter Section */}
                <div className='bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100'>
                    <div className='flex flex-col lg:flex-row gap-4'>
                        {/* Search Bar */}
                        <div className='flex-1 relative'>
                            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                                <MagnifyingGlassIcon className='h-5 w-5 text-gray-400' />
                            </div>
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={handleSearch}
                                className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800000] focus:border-transparent transition-all duration-200 font-figtree'
                                placeholder='Search events by title or description...'
                            />
                            {searchTerm && (
                                <button
                                    onClick={() => setSearchTerm('')}
                                    className='absolute inset-y-0 right-0 pr-3 flex items-center'
                                >
                                    <XMarkIcon className='h-5 w-5 text-gray-400 hover:text-gray-600' />
                                </button>
                            )}
                        </div>

                        {/* Type Filter */}
                        <div className='lg:w-40'>
                            <div className='relative'>
                                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                                    <FunnelIcon className='h-5 w-5 text-gray-400' />
                                </div>
                                <select
                                    value={selectedType}
                                    onChange={handleTypeFilter}
                                    className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800000] focus:border-transparent transition-all duration-200 font-figtree appearance-none bg-white'
                                >
                                    <option value="">All Types</option>
                                    <option value="free">🆓 Free</option>
                                    <option value="paid">💰 Paid</option>
                                </select>
                            </div>
                        </div>

                        {/* Set Filter */}
                        <div className='lg:w-48'>
                            <div className='relative'>
                                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                                    <FunnelIcon className='h-5 w-5 text-gray-400' />
                                </div>
                                <select
                                    value={selectedSet}
                                    onChange={handleSetFilter}
                                    className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800000] focus:border-transparent transition-all duration-200 font-figtree appearance-none bg-white'
                                >
                                    <option value="">All Sets</option>
                                    <option value="all set">All Set</option>
                                    {set.map((setItem) => (
                                        <option value={setItem} key={setItem}>{setItem}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Export Button */}
                        <button
                            onClick={exportToCSV}
                            disabled={isExporting}
                            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-all duration-200 flex items-center gap-2 font-medium shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isExporting ? (
                                <>
                                    <div className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                                    <span>Exporting...</span>
                                </>
                            ) : (
                                <>
                                    <PrinterIcon className='h-5 w-5' />
                                    <span>Export CSV</span>
                                </>
                            )}
                        </button>

                        {/* Clear Filters */}
                        {(searchTerm || selectedType || selectedSet) && (
                            <button
                                onClick={clearFilters}
                                className='px-4 py-3 text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 flex items-center gap-2'
                            >
                                <XMarkIcon className='h-4 w-4' />
                                Clear
                            </button>
                        )}
                    </div>

                    {/* Results Summary */}
                    <div className='mt-4 flex items-center justify-between text-sm text-gray-600'>
                        <div className='flex items-center gap-2'>
                            <CalendarIcon className='h-4 w-4' />
                            <span>
                                {filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''} 
                                {(searchTerm || selectedType || selectedSet) && ' found'}
                            </span>
                        </div>
                        {(searchTerm || selectedType || selectedSet) && (
                            <button
                                onClick={clearFilters}
                                className='text-[#800000] hover:underline'
                            >
                                Show all events
                            </button>
                        )}
                    </div>
                </div>

                {/* Events Table */}
                <div className='bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100 overflow-hidden'>
                    <div className='p-6 border-b border-gray-200'>
                        <h3 className='text-lg font-semibold text-gray-800 flex items-center gap-2'>
                            <CalendarIcon className='h-5 w-5' />
                            Event Directory
                        </h3>
                    </div>
                    
                    <AdminEventsTable data={filteredEvents} />
                </div>
            </main>
        </Admin>
    );
};

export default Index;

const Button = ({ handleSubmit, isLoading }) => (
    <button
        onClick={handleSubmit}
        type="button"
        disabled={isLoading}
        className="inline-flex text-white font-figtree justify-center rounded-lg border border-transparent bg-[#800000] px-6 py-3 text-sm font-medium hover:bg-[#700000] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#800000] focus-visible:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
    >
        {isLoading ? (
            <div className='flex items-center gap-2'>
                <ScaleLoader className='px-2' color='white' height={16} />
                <span>Creating...</span>
            </div>
        ) : (
            <div className='flex items-center gap-2'>
                <CalendarIcon className='h-4 w-4' />
                <span>Create Event</span>
            </div>
        )}
    </button>
);

const Form = ({ handleChange, formValues, handleImageChange, isSuccess, errors }) => {
    return (
        <div className='space-y-6 py-6 font-figtree'>
            {isSuccess && (
                <div className='bg-green-50 border border-green-200 rounded-lg p-4'>
                    <BadgeSuccess
                        message={"Event created successfully! Members can now register."}
                    />
                </div>
            )}

            {errors && (
                <div className='bg-red-50 border border-red-200 rounded-lg p-4'>
                    <div className='text-red-600 font-medium flex items-center gap-2'>
                        <span>⚠️</span>
                        {Object.values(errors)[0] || 'Please check your input and try again'}
                    </div>
                </div>
            )}

            <div className='bg-blue-50 border border-blue-200 rounded-lg p-4'>
                <p className='text-sm text-blue-800 flex items-center gap-2'>
                    <CalendarIcon className='h-4 w-4' />
                    Events created will enable members to register for this event.
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='space-y-2'>
                    <label className='block text-sm font-medium text-gray-700'>
                        Event Title *
                    </label>
                    <input
                        type="text"
                        name="title"
                        required
                        value={formValues.title}
                        onChange={handleChange}
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800000] focus:border-transparent transition-all duration-200 font-figtree'
                        placeholder='Enter event title...'
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
                        <option value="">Select Set</option>
                        <option value="all set">All Set</option>
                        {set.map(item => (
                            <option key={item} value={item}>{item}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='space-y-2'>
                    <label className='block text-sm font-medium text-gray-700'>
                        Event Type *
                    </label>
                    <select
                        name="type"
                        required
                        value={formValues.type}
                        onChange={handleChange}
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800000] focus:border-transparent transition-all duration-200 font-figtree appearance-none bg-white'
                    >
                        <option value="">Select Type</option>
                        <option value="free">🆓 Free Event</option>
                        <option value="paid">💰 Paid Event</option>
                    </select>
                </div>

                {formValues.type === "paid" && (
                    <div className='space-y-2'>
                        <label className='block text-sm font-medium text-gray-700'>
                            Registration Fee *
                        </label>
                        <input
                            type="number"
                            name="reg_fee"
                            required
                            value={formValues.reg_fee}
                            onChange={handleChange}
                            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800000] focus:border-transparent transition-all duration-200 font-figtree'
                            placeholder='Enter amount...'
                            min="0"
                            step="0.01"
                        />
                    </div>
                )}
            </div>

            <div className='space-y-2'>
                <label className='block text-sm font-medium text-gray-700'>
                    Event Date *
                </label>
                <input
                    type="date"
                    name="date"
                    required
                    value={formValues.date}
                    onChange={handleChange}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800000] focus:border-transparent transition-all duration-200 font-figtree'
                />
            </div>

            <div className='space-y-2'>
                <label className='block text-sm font-medium text-gray-700'>
                    Event Description *
                </label>
                <textarea
                    name="description"
                    required
                    value={formValues.description}
                    onChange={handleChange}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800000] focus:border-transparent transition-all duration-200 font-figtree resize-none'
                    placeholder='Enter detailed event description...'
                    rows={5}
                ></textarea>
            </div>

            <div className='space-y-2'>
                <label className='block text-sm font-medium text-gray-700'>
                    Event Image
                </label>
                <div className='space-y-3 text-center border-2 border-dashed border-gray-300 rounded-xl flex flex-col justify-center items-center p-8 hover:border-[#800000] transition-colors duration-200'>
                    <PhotoIcon className='h-12 text-gray-400' />
                    <div>
                        <p className='text-gray-600 font-medium'>Upload Event Image</p>
                        <p className='text-sm text-gray-500'>PNG, JPG up to 10MB</p>
                    </div>

                    {formValues.image && (
                        <div className='w-full max-w-xs'>
                            <img 
                                src={URL.createObjectURL(formValues.image)} 
                                alt="Event preview" 
                                className='w-full h-32 object-cover rounded-lg shadow-md' 
                            />
                        </div>
                    )}

                    <div className='relative'>
                        <input
                            type="file"
                            name="image"
                            onChange={handleImageChange}
                            accept="image/*"
                            className='h-full w-full opacity-0 absolute cursor-pointer'
                        />
                        <button 
                            type="button"
                            className='bg-[#800000] hover:bg-[#700000] text-white py-2 px-6 rounded-lg font-medium transition-all duration-200'
                        >
                            Select Image
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
