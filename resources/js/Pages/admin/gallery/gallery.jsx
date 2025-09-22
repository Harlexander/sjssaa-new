import React, { useState } from 'react'
import DashboardTitle from '../../../components/Header/DashboardTitle';
import Admin from '@/Layouts/AdminLayout';
import { Card, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card';
import TextInput from '@/Components/TextInput';
import { Button } from '@/Components/ui/button';
import { Link, useForm } from '@inertiajs/react';
import { toast } from 'react-toastify';

const Index = ({ categories }) => {
  const [isAdding, setIsAdding] = useState(false);
  const { post, setData, data, error, processing } = useForm({
    category : ""
  });

  const addCategory = (e) => {
    e.preventDefault();
    if (!data.category.trim()) {
      toast.error("Please enter a category name");
      return;
    }

    post(route("new.category"), {
      onSuccess: () => {
        toast.success("New category added! 🎉");
        setData("category", "");
        setIsAdding(false);
      },
      onError: (errors) => {
        toast.error("Error adding category");
      }
    })
  };

  return (
    <Admin>
      <main className='p-5 sm:p-10 space-y-8'>
        <div className='flex items-center justify-between'>
          <DashboardTitle
            title={"Gallery Management"}
            subtitle={"Organize and manage your image collections"}
          />
          <Button 
            onClick={() => setIsAdding(!isAdding)}
            className="bg-[#800000] hover:bg-[#700000] text-white px-6 py-2 rounded-lg transition-all duration-200 flex items-center gap-2"
          >
            <span>📁</span>
            {isAdding ? 'Cancel' : 'Add Category'}
          </Button>
        </div>

        {isAdding && (
          <div className='bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 animate-in slide-in-from-top-2 duration-300'>
            <h3 className='text-lg font-semibold mb-4 flex items-center gap-2'>
              <span>✨</span>
              Create New Category
            </h3>
            <form onSubmit={addCategory} className='flex gap-3'>
              <div className='flex-1'>
                <TextInput 
                  value={data.category} 
                  onChange={(e) => setData("category", e.target.value)} 
                  className="w-full rounded-lg border-2 border-gray-200 focus:border-[#800000] transition-colors duration-200" 
                  placeHolder="Enter category name (e.g., Events, Team Photos, etc.)"
                />
                {error && <p className='text-red-500 text-sm mt-1'>{error}</p>}
              </div>
              <Button 
                type="submit" 
                className="bg-[#800000] hover:bg-[#700000] text-white px-6 py-2 rounded-lg transition-all duration-200 flex items-center gap-2"
                disabled={processing}
              >
                {processing ? (
                  <>
                    <div className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                    Creating...
                  </>
                ) : (
                  <>
                    <span>➕</span>
                    Create
                  </>
                )}
              </Button>
            </form>
          </div>
        )}

        {categories.length === 0 ? (
          <div className='text-center py-12 bg-white/60 rounded-xl border-2 border-dashed border-gray-300'>
            <div className='text-6xl mb-4'>📷</div>
            <h3 className='text-xl font-semibold text-gray-700 mb-2'>No Categories Yet</h3>
            <p className='text-gray-500 mb-6'>Create your first category to start organizing your images</p>
            <Button 
              onClick={() => setIsAdding(true)}
              className="bg-[#800000] hover:bg-[#700000] text-white px-6 py-3 rounded-lg"
            >
              <span>📁</span>
              Create First Category
            </Button>
          </div>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {categories.map(({name, id}, index) => (
              <Link 
                href={`gallery/${id}`} 
                key={id}
                className='group block transform transition-all duration-300 hover:scale-105 hover:shadow-xl'
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg group-hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <CardHeader className="p-6 text-center">
                    <div className='w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#800000] to-[#600000] rounded-full flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform duration-300'>
                      📁
                    </div>
                    <CardTitle className="capitalize text-lg font-bold text-gray-800 group-hover:text-[#800000] transition-colors duration-300">
                      {name}
                    </CardTitle>
                    <CardDescription className="text-gray-500 mt-2">
                      Click to manage images
                    </CardDescription>
                  </CardHeader>
                  <div className='px-6 pb-6'>
                    <div className='flex items-center justify-center text-sm text-gray-400 group-hover:text-[#800000] transition-colors duration-300'>
                      <span>👆</span>
                      <span className='ml-1'>View Images</span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        )}

      </main>
    </Admin>
  )
}

export default Index;