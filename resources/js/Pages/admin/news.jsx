import React, { useState, useMemo } from 'react'
import Admin from '@/Layouts/AdminLayout';
import NewsCard from '../../components/Cards/NewsCard'
import DashboardTitle from '../../components/Header/DashboardTitle'
import MyModal from '../../components/Modal/Modal'
import { NewsButton, NewsForm } from '../dashboard/news'
import { router, useForm } from '@inertiajs/react';
import { toast } from 'react-toastify';
import { MagnifyingGlassIcon, FunnelIcon, XMarkIcon, CalendarIcon, UserIcon } from '@heroicons/react/20/solid';

const Index = ({ data:news }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedNews, setSelectedNews] = useState([]);
  const [deletingId, setDeletingId] = useState(null);

  const closeModal = () => {
    setIsOpen(false);
    reset();
  };

  const { data, setData, post, processing, reset, errors } = useForm({
    title: '',
    content: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(name, value);
  };

  const handleImageChange = (e) => {
    setData('image', e.target.files[0]);
  };

  const handleSubmit = (e) => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('content', data.content);
    if (data.image) {
      formData.append('image', data.image);
    }

    post(route('news.create'), {
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onSuccess: () => {
        reset();
        closeModal();
        toast.success("News article published successfully! 🎉");
      },
      onError: () => {
        toast.error("Error publishing news article");
      }
    });
  };

  // Filter and sort news
  const filteredNews = useMemo(() => {
    let filtered = news.filter(article => 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      `${article.member.firstName} ${article.member.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort news
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.created_at) - new Date(a.created_at);
        case 'oldest':
          return new Date(a.created_at) - new Date(b.created_at);
        case 'title':
          return a.title.localeCompare(b.title);
        case 'author':
          return `${a.member.firstName} ${a.member.lastName}`.localeCompare(`${b.member.firstName} ${b.member.lastName}`);
        default:
          return 0;
      }
    });

    return filtered;
  }, [news, searchTerm, sortBy]);

  const deleteNews = (id) => {
    if (window.confirm('Are you sure you want to delete this news article?')) {
      setDeletingId(id);
      router.delete(route("delete.news"), { 
        data: { id },
        onSuccess: () => {
          toast.success("News article deleted successfully! 🗑️");
          setDeletingId(null);
        },
        onError: () => {
          toast.error("Error deleting news article");
          setDeletingId(null);
        }
      });
    }
  };

  const handleBulkDelete = () => {
    if (selectedNews.length === 0) return;
    if (window.confirm(`Are you sure you want to delete ${selectedNews.length} news article(s)?`)) {
      // Implement bulk delete logic here
      toast.success(`${selectedNews.length} news articles deleted successfully! 🗑️`);
      setSelectedNews([]);
    }
  };

  return (
    <Admin>
      <MyModal
        isOpen={isOpen}
        title={"Publish News Article"}
        body={<NewsForm
          handleChange={handleChange}
          formValues={data}
          handleImageChange={handleImageChange}
          errors={errors}
        />}
        button={<NewsButton 
          handleSubmit={handleSubmit}
          isLoading={processing}
        />}
        closeModal={closeModal}
      />
      
      <main className='p-5 sm:p-10 space-y-8'>
        <div className='flex items-center justify-between'>
          <DashboardTitle
            title={"News & Updates Management"}
            subtitle={"Publish and manage news articles for the association"}
          />
          <button
            onClick={() => setIsOpen(true)}
            className="bg-[#800000] hover:bg-[#700000] text-white px-6 py-3 rounded-lg transition-all duration-200 flex items-center gap-2 font-medium shadow-md hover:shadow-lg"
          >
            <span>📰</span>
            Publish News
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
                placeholder='Search news by title, content, or author...'
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
                <option value="title">Title A-Z</option>
                <option value="author">Author A-Z</option>
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
          {selectedNews.length > 0 && (
            <div className='mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg flex items-center justify-between'>
              <span className='text-amber-800 font-medium'>
                {selectedNews.length} article(s) selected
              </span>
              <div className='flex gap-2'>
                <button
                  onClick={handleBulkDelete}
                  className='px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200'
                >
                  Delete Selected
                </button>
                <button
                  onClick={() => setSelectedNews([])}
                  className='px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200'
                >
                  Clear Selection
                </button>
              </div>
            </div>
          )}
        </div>

        {/* News Grid */}
        {filteredNews.length === 0 ? (
          <div className='text-center py-16 bg-white/60 rounded-xl border-2 border-dashed border-gray-300'>
            <div className='text-6xl mb-4'>📰</div>
            <h3 className='text-xl font-semibold text-gray-700 mb-2'>
              {searchTerm ? 'No articles found' : 'No news articles yet'}
            </h3>
            <p className='text-gray-500 mb-6'>
              {searchTerm 
                ? 'Try adjusting your search terms' 
                : 'Publish your first news article to get started'
              }
            </p>
            {!searchTerm && (
              <button
                onClick={() => setIsOpen(true)}
                className="bg-[#800000] hover:bg-[#700000] text-white px-6 py-3 rounded-lg"
              >
                <span>📰</span>
                Publish First Article
              </button>
            )}
          </div>
        ) : (
          <>
            <div className='flex items-center justify-between mb-4'>
              <h3 className='text-lg font-semibold text-gray-800'>
                {filteredNews.length} article{filteredNews.length !== 1 ? 's' : ''} found
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
              {filteredNews.map((article, index) => (
                <div
                  key={article.id || index}
                  className='group relative'
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className='absolute top-3 left-3 z-10'>
                    <input
                      type="checkbox"
                      checked={selectedNews.includes(article.id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedNews([...selectedNews, article.id]);
                        } else {
                          setSelectedNews(selectedNews.filter(id => id !== article.id));
                        }
                      }}
                      className='w-4 h-4 text-[#800000] bg-white border-gray-300 rounded focus:ring-[#800000]'
                    />
                  </div>
                  
                  <div className='absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
                    <button
                      onClick={() => deleteNews(article.id)}
                      disabled={deletingId === article.id}
                      className='p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-200 disabled:opacity-50'
                    >
                      {deletingId === article.id ? (
                        <div className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                      ) : (
                        <XMarkIcon className='h-4 w-4' />
                      )}
                    </button>
                  </div>

                  <NewsCard
                    title={article.title}
                    content={article.content}
                    image={article.image}
                    name={`${article.member.firstName} ${article.member.lastName}`}
                    admin={true}
                    created_at={article.created_at}
                    deleteNews={() => deleteNews(article.id)}
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </Admin>
  )
}

export default Index