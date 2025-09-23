import React, { useState, useMemo } from 'react'
import Admin from '@/Layouts/AdminLayout';
import { MagnifyingGlassIcon, PrinterIcon, FunnelIcon, XMarkIcon, UserGroupIcon, PlusIcon, DocumentArrowUpIcon } from '@heroicons/react/24/outline'
import MembersDataTable from '../../Components/members/Table'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid'
import DashboardTitle from '../../components/Header/DashboardTitle'
import { set } from '../../lib/set'
import { filterBySet, searchByName } from '../../lib/searchFunction'
import { toast } from 'react-toastify';
import { useForm } from '@inertiajs/react';
import CreateDialog from '@/Components/members/CreateDialog'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../Components/ui/dialog';

const Index = ({ data }) => {
    const [ searchTerm, setSearchTerm ] = useState('');
    const [ selectedSet, setSelectedSet ] = useState('');
    const [ isExporting, setIsExporting ] = useState(false);

    // Filter and search members
    const filteredMembers = useMemo(() => {
        let filtered = data;
        
        // Apply search filter
        if (searchTerm.length > 0) {
            filtered = searchByName(searchTerm, filtered);
        }
        
        // Apply set filter
        if (selectedSet.length > 0) {
            filtered = filterBySet(selectedSet, filtered);
        }
        
        return filtered;
    }, [data, searchTerm, selectedSet]);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleFilter = (e) => {
        setSelectedSet(e.target.value);
    };

    const clearFilters = () => {
        setSearchTerm('');
        setSelectedSet('');
    };

    // Form for creating new member
    const { data: formData, setData: setFormData, post: createMember, processing: creatingMember, errors: createErrors, reset: resetForm } = useForm({
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
    });

    // Form for importing members
    const { data: importData, setData: setImportData, post: importMembers, processing: importingMembers, errors: importErrors, reset: resetImportForm } = useForm({
        file: null,
    });
    const handleImportMembers = (e) => {
        e.preventDefault();
        if (!importData.file) {
            toast.error('Please select a CSV file to import.');
            return;
        }
        
        importMembers('/admin/members/import', {
            onSuccess: () => {
                toast.success('Members imported successfully! 📊');
                resetImportForm();
            },
            onError: () => {
                toast.error('Failed to import members. Please check the file format.');
            }
        });
    };

    // CSV Export functionality
    const exportToCSV = () => {
        setIsExporting(true);
        
        try {
            const membersToExport = filteredMembers.length > 0 ? filteredMembers : data;
            
            // Define CSV headers
            const headers = [
                'ID',
                'First Name',
                'Last Name',
                'Email',
                'Mobile',
                'Set',
                'Country',
                'Profession',
                'City',
                'State',
                'Created At'
            ];

            // Prepare data rows
            const csvData = membersToExport.map(member => [
                member.id || '',
                member.firstName || '',
                member.lastName || '',
                member.email || '',
                member.mobile || '',
                member.set || '',
                member.country || '',
                member.profession || '',
                member.city || '',
                member.state || '',
                member.created_at || ''
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
            link.setAttribute('download', `members_export_${new Date().toISOString().split('T')[0]}.csv`);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            toast.success(`Successfully exported ${membersToExport.length} members to CSV! 📊`);
        } catch (error) {
            console.error('Export error:', error);
            toast.error('Error exporting members data');
        } finally {
            setIsExporting(false);
        }
    };

  return (
    <Admin>
        <main className='p-5 sm:p-10 space-y-8'>
            <div className='flex items-center justify-between'>
                <DashboardTitle
                    title={"Member Management"}
                    subtitle={"Manage and verify association members"}
                />
                <div className='flex items-center gap-3'>
                    <CreateDialog />
                    
                    <Dialog>
                        <DialogTrigger asChild>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-200 flex items-center gap-2 font-medium shadow-md hover:shadow-lg">
                                <DocumentArrowUpIcon className='h-5 w-5' />
                                <span>Import CSV</span>
                            </button>
                        </DialogTrigger>
                        <DialogContent className="max-w-lg">
                            <DialogHeader>
                                <DialogTitle className="flex items-center gap-2">
                                    <DocumentArrowUpIcon className="h-6 w-6 text-blue-600" />
                                    Import Members from CSV
                                </DialogTitle>
                                <DialogDescription>
                                    Upload a CSV file to import multiple members at once.
                                </DialogDescription>
                            </DialogHeader>
                            
                            <form onSubmit={handleImportMembers} className="space-y-6">
                                <div className="space-y-4">
                                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                                        <h4 className="font-semibold text-blue-900 mb-2">CSV Format Requirements:</h4>
                                        <ul className="text-sm text-blue-800 space-y-1">
                                            <li>• Required columns: firstName, lastName, email, mobile, set</li>
                                            <li>• Optional columns: country, profession, city, state, password</li>
                                            <li>• If password is not provided, default will be "password123"</li>
                                            <li>• Maximum file size: 2MB</li>
                                        </ul>
                                    </div>
                                    
                                    <div className="space-y-2">
                                        <label className="block text-sm font-semibold text-gray-700">
                                            Select CSV File *
                                        </label>
                                        <input
                                            type="file"
                                            accept=".csv,.txt"
                                            onChange={(e) => setImportData('file', e.target.files[0])}
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                            required
                                        />
                                        {importErrors.file && <p className="text-sm text-red-500">{importErrors.file}</p>}
                                    </div>
                                </div>
                                
                                <DialogFooter>
                                    <button
                                        type="submit"
                                        disabled={importingMembers || !importData.file}
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl transition-all duration-200 font-semibold shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                                    >
                                        {importingMembers ? (
                                            <>
                                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                Importing...
                                            </>
                                        ) : (
                                            <>
                                                <DocumentArrowUpIcon className="h-5 w-5" />
                                                Import Members
                                            </>
                                        )}
                                    </button>
                                </DialogFooter>
                            </form>
                        </DialogContent>
                    </Dialog>
                    
                    <button
                        onClick={exportToCSV}
                        disabled={isExporting}
                        className="bg-[#800000] hover:bg-[#700000] text-white px-6 py-3 rounded-lg transition-all duration-200 flex items-center gap-2 font-medium shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
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
                </div>
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
                            placeholder='Search members by name, email, or phone...'
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

                    {/* Set Filter */}
                    <div className='lg:w-48'>
                        <div className='relative'>
                            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                                <FunnelIcon className='h-5 w-5 text-gray-400' />
                            </div>
                            <select
                                value={selectedSet}
                                onChange={handleFilter}
                                className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800000] focus:border-transparent transition-all duration-200 font-figtree appearance-none bg-white'
                            >
                                <option value="">All Sets</option>
                                {set.map((setItem) => (
                                    <option value={setItem} key={setItem}>{setItem}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Clear Filters */}
                    {(searchTerm || selectedSet) && (
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
                        <UserGroupIcon className='h-4 w-4' />
                        <span>
                            {filteredMembers.length} member{filteredMembers.length !== 1 ? 's' : ''} 
                            {(searchTerm || selectedSet) && ' found'}
                        </span>
                    </div>
                    {(searchTerm || selectedSet) && (
                        <button
                            onClick={clearFilters}
                            className='text-[#800000] hover:underline'
                        >
                            Show all members
                        </button>
                    )}
                </div>
            </div>

            {/* Members Table */}
            <div className='bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100 overflow-hidden'>
                <div className='p-6 border-b border-gray-200'>
                    <h3 className='text-lg font-semibold text-gray-800 flex items-center gap-2'>
                        <UserGroupIcon className='h-5 w-5' />
                        Member Directory
                    </h3>
                </div>
                <MembersDataTable rows={filteredMembers} />
            </div>

        </main>
    </Admin>
  )
}

export default Index