import React, { useState } from 'react'
import DashboardTitle from '../../../components/Header/DashboardTitle';
import Admin from '@/Layouts/AdminLayout';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/Components/ui/card';
import { Button } from "@/Components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/Components/ui/dialog"
import { router, useForm } from '@inertiajs/react';
import { toast } from 'react-toastify';

const Index = ({ images, category: { name, id }}) => {
    const [deletingId, setDeletingId] = useState(null);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [imageToDelete, setImageToDelete] = useState(null);

    const removeImage = (imageId) => {
        setImageToDelete(imageId);
        setShowDeleteConfirm(true);
    }

    const confirmDelete = () => {
        if (imageToDelete) {
            setDeletingId(imageToDelete);
            router.delete(route("delete.image"), { 
                data: { id: imageToDelete },
                onSuccess: () => {
                    toast.success("Image deleted successfully! 🗑️");
                    setShowDeleteConfirm(false);
                    setImageToDelete(null);
                },
                onError: () => {
                    toast.error("Error deleting image");
                },
                onFinish: () => {
                    setDeletingId(null);
                }
            });
        }
    }

  return (
    <Admin>
      <main className='p-5 sm:p-10 space-y-8'>
        <div className='flex items-center justify-between'>
          <DashboardTitle
            title={`${name} Gallery`}
            subtitle={`Manage images in the ${name} category`}
          />
          <div className='flex items-center gap-3'>
            <span className='text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full'>
              {images.length} {images.length === 1 ? 'image' : 'images'}
            </span>
            <NewImage id={id}/>
          </div>
        </div>

        {images.length === 0 ? (
          <div className='text-center py-16 bg-white/60 rounded-xl border-2 border-dashed border-gray-300'>
            <div className='text-6xl mb-4'>📷</div>
            <h3 className='text-xl font-semibold text-gray-700 mb-2'>No Images Yet</h3>
            <p className='text-gray-500 mb-6'>Upload your first image to this category</p>
            <NewImage id={id} isPrimary={true}/>
          </div>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {images.map(({image_path, caption, id}, index) => (
              <Card 
                key={id} 
                className="group bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={image_path} 
                    alt={caption || "Gallery image"} 
                    className='w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500'
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => removeImage(id)}
                        disabled={deletingId === id}
                        className="bg-red-500 hover:bg-red-600 text-white"
                      >
                        {deletingId === id ? (
                          <div className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                        ) : (
                          <>
                            <span>🗑️</span>
                            <span className='ml-1'>Delete</span>
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
                {caption && (
                  <CardHeader className="p-3">
                    <CardDescription className="text-sm text-gray-600 line-clamp-2">
                      {caption}
                    </CardDescription>
                  </CardHeader>
                )}
              </Card>
            ))}
          </div>
        )}

        {/* Delete Confirmation Dialog */}
        <Dialog open={showDeleteConfirm} onOpenChange={setShowDeleteConfirm}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <span>⚠️</span>
                Confirm Delete
              </DialogTitle>
              <DialogDescription>
                Are you sure you want to delete this image? This action cannot be undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="gap-2">
              <Button 
                variant="outline" 
                onClick={() => setShowDeleteConfirm(false)}
                disabled={deletingId}
              >
                Cancel
              </Button>
              <Button 
                variant="destructive" 
                onClick={confirmDelete}
                disabled={deletingId}
                className="bg-red-500 hover:bg-red-600"
              >
                {deletingId ? (
                  <>
                    <div className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2'></div>
                    Deleting...
                  </>
                ) : (
                  <>
                    <span>🗑️</span>
                    <span className='ml-1'>Delete Image</span>
                  </>
                )}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

      </main>
    </Admin>
  )
}

export default Index;

export function NewImage({id, isPrimary = false}) {
    const { data, setData, post, reset, processing } = useForm({
      image: null,
      id: id
    });
  
    const [preview, setPreview] = useState(null);
    const [isDragOver, setIsDragOver] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
  
    const handleImageChange = (file) => {
      if (file && file.type.startsWith('image/')) {
        setPreview(URL.createObjectURL(file));
        setData('image', file);
      } else {
        toast.error("Please select a valid image file.");
      }
    };

    const handleFileInput = (event) => {
      const file = event.target.files[0];
      if (file) {
        handleImageChange(file);
      }
    };

    const handleDragOver = (event) => {
      event.preventDefault();
      setIsDragOver(true);
    };

    const handleDragLeave = (event) => {
      event.preventDefault();
      setIsDragOver(false);
    };

    const handleDrop = (event) => {
      event.preventDefault();
      setIsDragOver(false);
      const file = event.dataTransfer.files[0];
      if (file) {
        handleImageChange(file);
      }
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      // Check if an image is selected
      if (!data.image) {
        toast.error("Please select an image.");
        return;
      }
  
      // Submit the form
      post(route("new.image"), {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onSuccess: () => {
          toast.success("Image uploaded successfully! 🎉");
          reset(); // Reset the form after success
          setPreview(null); // Clear preview
          setIsOpen(false); // Close dialog
        },
        onError: (errors) => {
          console.error('Error:', errors);
          toast.error("An error occurred while uploading the image.");
        },
      });
    };
  
    return (
      <>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button 
              variant={isPrimary ? "default" : "outline"}
              className={isPrimary ? "bg-[#800000] hover:bg-[#700000] text-white px-6 py-3 rounded-lg flex items-center gap-2" : "border-2 border-dashed border-gray-300 hover:border-[#800000] hover:bg-gray-50 px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-200"}
            >
              <span>📷</span>
              {isPrimary ? 'Upload First Image' : 'Add Image'}
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <span>📤</span>
                Upload Image
              </DialogTitle>
              <DialogDescription>
                Choose an image file to upload or drag and drop it below.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="grid gap-6 py-4">
              {/* Drag and Drop Area */}
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-200 ${
                  isDragOver 
                    ? 'border-[#800000] bg-red-50' 
                    : 'border-gray-300 hover:border-gray-400'
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                {preview ? (
                  <div className="space-y-4">
                    <img 
                      src={preview} 
                      alt="Selected preview" 
                      className="w-full max-h-64 object-cover rounded-lg shadow-md" 
                    />
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                      <span>✅</span>
                      <span>Image selected and ready to upload</span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="text-4xl">📷</div>
                    <div>
                      <p className="text-lg font-medium text-gray-700">
                        {isDragOver ? 'Drop your image here' : 'Drag & drop an image here'}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        or click to browse files
                      </p>
                    </div>
                    <div className="relative">
                      <input
                        type="file"
                        name="image"
                        onChange={handleFileInput}
                        className="h-full w-full opacity-0 absolute cursor-pointer"
                        accept="image/*"
                      />
                      <button
                        type="button"
                        className="bg-[#800000] hover:bg-[#700000] text-white py-2 px-6 rounded-lg font-medium transition-all duration-200"
                        onClick={() => document.querySelector('input[type="file"]').click()}
                      >
                        Browse Files
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <DialogFooter className="gap-2">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => {
                    setIsOpen(false);
                    reset();
                    setPreview(null);
                  }}
                  disabled={processing}
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  disabled={!data.image || processing}
                  className="bg-[#800000] hover:bg-[#700000] text-white"
                >
                  {processing ? (
                    <>
                      <div className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2'></div>
                      Uploading...
                    </>
                  ) : (
                    <>
                      <span>📤</span>
                      <span className='ml-1'>Upload Image</span>
                    </>
                  )}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </>
    );
  }
