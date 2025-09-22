import React, { useState, useMemo } from 'react';
import { JobButton, JobForm } from '../dashboard/job-board';
import Admin from '@/Layouts/AdminLayout';
import MyModal from '@/Components/Modal/Modal';
import { useForm, router } from '@inertiajs/react';
import DashboardTitle from '@/Components/Header/DashboardTitle';
import { MagnifyingGlassIcon, FunnelIcon, XMarkIcon } from '@heroicons/react/20/solid';
import JobsCard from '@/Components/Cards/JobsCard';
import { toast } from 'react-toastify';

const Index = ({ jobs }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedJobs, setSelectedJobs] = useState([]);
  
  const { data , setData, post, processing : isLoading, errors, reset} = useForm({
    title: '',
    org: '',
    exp_date: '',
    link: '',
    contact: '',
    description: '',
  });

  const closeModal = () => {
    setIsOpen(false);
    reset();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('job.create'), {
      onSuccess: () => {
        closeModal();
        toast.success("Job posted successfully! 🎉");
      },
      onError: () => {
        toast.error("Error posting job");
      }
    });
  };

  // Filter and sort jobs
  const filteredJobs = useMemo(() => {
    let filtered = jobs.filter(job => 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.org.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort jobs
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.created_at) - new Date(a.created_at);
        case 'oldest':
          return new Date(a.created_at) - new Date(b.created_at);
        case 'expiring':
          return new Date(a.exp_date) - new Date(b.exp_date);
        case 'title':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    return filtered;
  }, [jobs, searchTerm, sortBy]);

  const handleDeleteJob = (jobId) => {
    if (window.confirm('Are you sure you want to delete this job posting?')) {
      router.delete(route('job.delete', jobId), {
        onSuccess: () => {
          toast.success("Job deleted successfully! 🗑️");
        },
        onError: () => {
          toast.error("Error deleting job");
        }
      });
    }
  };

  const handleBulkDelete = () => {
    if (selectedJobs.length === 0) return;
    if (window.confirm(`Are you sure you want to delete ${selectedJobs.length} job(s)?`)) {
      // Implement bulk delete logic here
      toast.success(`${selectedJobs.length} jobs deleted successfully! 🗑️`);
      setSelectedJobs([]);
    }
  };

  return (
    <Admin>
      <MyModal
        isOpen={isOpen}
        title={"Add Job Opening"}
        body={
          <JobForm 
            data={data}
            setData={setData}
            errors={errors}
            isSuccess={false}
          />
        }
        button={<JobButton handleSubmit={handleSubmit} isLoading={isLoading} />}
        closeModal={closeModal}
      />

      <main className='md:p-10 p-5 space-y-8'>
        <div className='flex items-center justify-between'>
          <DashboardTitle
            title={"Job Board Management"}
            subtitle={"Post job opportunities and manage existing listings"}
          />
          <button
            onClick={() => setIsOpen(true)}
            className="bg-[#800000] hover:bg-[#700000] text-white px-6 py-3 rounded-lg transition-all duration-200 flex items-center gap-2 font-medium shadow-md hover:shadow-lg"
          >
            <span>💼</span>
            Post New Job
          </button>
        </div>

        {/* Search and Filter Section */}
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
                onChange={(e) => setSearchTerm(e.target.value)}
                className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800000] focus:border-transparent transition-all duration-200'
                placeholder='Search jobs by title, organization, or description...'
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

            {/* Sort and Filter */}
            <div className='flex gap-3'>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className='px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800000] focus:border-transparent transition-all duration-200'
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="expiring">Expiring Soon</option>
                <option value="title">Title A-Z</option>
              </select>
              
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`px-4 py-3 rounded-lg transition-all duration-200 flex items-center gap-2 ${
                  showFilters 
                    ? 'bg-[#800000] text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <FunnelIcon className='h-5 w-5' />
                Filters
              </button>
            </div>
          </div>

          {/* Bulk Actions */}
          {selectedJobs.length > 0 && (
            <div className='mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg flex items-center justify-between'>
              <span className='text-amber-800 font-medium'>
                {selectedJobs.length} job(s) selected
              </span>
              <div className='flex gap-2'>
                <button
                  onClick={handleBulkDelete}
                  className='px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200'
                >
                  Delete Selected
                </button>
                <button
                  onClick={() => setSelectedJobs([])}
                  className='px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200'
                >
                  Clear Selection
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Jobs Grid */}
        {filteredJobs.length === 0 ? (
          <div className='text-center py-16 bg-white/60 rounded-xl border-2 border-dashed border-gray-300'>
            <div className='text-6xl mb-4'>💼</div>
            <h3 className='text-xl font-semibold text-gray-700 mb-2'>
              {searchTerm ? 'No jobs found' : 'No jobs posted yet'}
            </h3>
            <p className='text-gray-500 mb-6'>
              {searchTerm 
                ? 'Try adjusting your search terms' 
                : 'Post your first job opportunity to get started'
              }
            </p>
            {!searchTerm && (
              <button
                onClick={() => setIsOpen(true)}
                className="bg-[#800000] hover:bg-[#700000] text-white px-6 py-3 rounded-lg"
              >
                <span>💼</span>
                Post First Job
              </button>
            )}
          </div>
        ) : (
          <>
            <div className='flex items-center justify-between mb-4'>
              <h3 className='text-lg font-semibold text-gray-800'>
                {filteredJobs.length} job{filteredJobs.length !== 1 ? 's' : ''} found
              </h3>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className='text-sm text-[#800000] hover:underline'
                >
                  Clear search
                </button>
              )}
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {filteredJobs.map((job, index) => (
                <div
                  key={job.id || index}
                  className='group relative'
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className='absolute top-3 left-3 z-10'>
                    <input
                      type="checkbox"
                      checked={selectedJobs.includes(job.id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedJobs([...selectedJobs, job.id]);
                        } else {
                          setSelectedJobs(selectedJobs.filter(id => id !== job.id));
                        }
                      }}
                      className='w-4 h-4 text-[#800000] bg-white border-gray-300 rounded focus:ring-[#800000]'
                    />
                  </div>
                  
                  <div className='absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
                    <button
                      onClick={() => handleDeleteJob(job.id)}
                      className='p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-200'
                    >
                      <XMarkIcon className='h-4 w-4' />
                    </button>
                  </div>

                  <JobsCard
                    title={job.title}
                    org={job.org}
                    exp_date={job.exp_date}
                    created_at={job.created_at}
                    contact={job.contact}
                    link={job.link}
                    admin={true}
                    description={job.description}
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </Admin>
  );
};

export default Index;
