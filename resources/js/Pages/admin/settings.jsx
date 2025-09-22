import React, { useEffect, useMemo, useState } from 'react';
import { useForm } from '@inertiajs/react';
import Admin from '@/Layouts/AdminLayout';
import DashboardTitle from '../../components/Header/DashboardTitle';
import { SolidButton } from '../../components/Button/Button';
import { toast } from 'react-toastify';

const Settings = ({ data }) => {
    const [hasChanges, setHasChanges] = useState(false);
    const [showPreview, setShowPreview] = useState(false);
    
    const { data: formData, setData, post, processing, errors, reset, transform } = useForm({
        title: data.title || '',
        subtext: data.subtext || '',
        footerText: data.footerText || '',
        about_us: data.about_us || '',
        facebook: data.facebook || '',
        instagram: data.instagram || '',
        twitter: data.twitter || '',
        linkedin: data.linkedin || '',
        mobile1: data.mobile1 || '',
        mobile2: data.mobile2 || '',
        email1: data.email1 || '',
        email2: data.email2 || '',
        home_image: null
    });

    const existingHomeImage = data?.home_image || '';

    const previewUrl = useMemo(() => {
        if (formData.home_image instanceof File) {
            return URL.createObjectURL(formData.home_image);
        }
        return existingHomeImage || '';
    }, [formData.home_image, existingHomeImage]);

    // Track changes
    useEffect(() => {
        const hasFormChanges = Object.keys(formData).some(key => {
            if (key === 'home_image') return formData[key] !== null;
            return formData[key] !== (data[key] || '');
        });
        setHasChanges(hasFormChanges);
    }, [formData, data]);

    useEffect(() => {
        return () => {
            if (formData.home_image instanceof File) {
                URL.revokeObjectURL(previewUrl);
            }
        };
    }, [formData.home_image, previewUrl]);

    const handleChange = (e) => {
        const { name, type, files, value } = e.target;
        if (type === 'file') {
            setData(name, files[0] || null);
        } else {
            setData(name, value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formDataToSubmit = new FormData();
        Object.keys(formData).forEach(key => {
            formDataToSubmit.append(key, formData[key] ?? '');
        });

        post(route('settings.update'), {
            data: formDataToSubmit,
            onSuccess: () => {
               toast.success('Settings updated successfully! 🎉');
               setHasChanges(false);
            },
            onError: (errs) => {
                const firstError = Object.values(errs || {})[0];
                toast.error(firstError || 'Error updating settings');
            }
        });
    };

    const handleReset = () => {
        if (window.confirm('Are you sure you want to reset all changes?')) {
            reset();
            setHasChanges(false);
            toast.info('Form reset to original values');
        }
    };

    return (
        <Admin>
            <main className='p-5 sm:p-10 space-y-10'>
                <div className='flex items-center justify-between'>
                    <DashboardTitle
                        title={"Settings"}
                        subtitle={"Manage your website configuration"}
                    />
                    {hasChanges && (
                        <div className='flex items-center gap-2 text-amber-600 bg-amber-50 px-3 py-2 rounded-md border border-amber-200'>
                            <div className='w-2 h-2 bg-amber-500 rounded-full animate-pulse'></div>
                            <span className='text-sm font-medium'>Unsaved changes</span>
                        </div>
                    )}
                </div>

                <form onSubmit={handleSubmit} className='space-y-6'>
                    {/* Homepage Hero Section */}
                    <div className='bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden'>
                        <div className='bg-gradient-to-r from-blue-50 to-indigo-50 px-8 py-6 border-b border-gray-100'>
                            <div className='flex items-center gap-3'>
                                <div className='w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center'>
                                    <span className='text-xl'>🏠</span>
                                </div>
                                <div>
                                    <h3 className='text-xl font-bold text-gray-900'>Homepage Hero</h3>
                                    <p className='text-sm text-gray-600'>Configure the main content that appears on your homepage</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className='p-8 space-y-6'>
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                                <div className='space-y-2'>
                                    <label className='block text-sm font-semibold text-gray-700'>
                                        <span className='flex items-center gap-2'>
                                            <span>✨</span>
                                            Tagline *
                                        </span>
                                    </label>
                                    <input
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        placeholder="e.g., Empowering our community"
                                        required
                                        className='w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-400'
                                    />
                                    {errors.title && <p className='text-sm text-red-500 mt-1'>{errors.title}</p>}
                                    <p className='text-xs text-gray-500'>Appears prominently on the homepage. Keep it short and impactful.</p>
                                </div>
                                
                                <div className='space-y-2'>
                                    <label className='block text-sm font-semibold text-gray-700'>
                                        <span className='flex items-center gap-2'>
                                            <span>📝</span>
                                            Sub Text *
                                        </span>
                                    </label>
                                    <input
                                        name="subtext"
                                        value={formData.subtext}
                                        onChange={handleChange}
                                        placeholder="A brief supporting sentence"
                                        required
                                        className='w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-400'
                                    />
                                    {errors.subtext && <p className='text-sm text-red-500 mt-1'>{errors.subtext}</p>}
                                </div>
                            </div>
                            
                            <div className='space-y-2'>
                                <label className='block text-sm font-semibold text-gray-700'>
                                    <span className='flex items-center gap-2'>
                                        <span>📖</span>
                                        About Us *
                                    </span>
                                </label>
                                <textarea
                                    name="about_us"
                                    value={formData.about_us}
                                    onChange={handleChange}
                                    placeholder="Write a concise description about the organization"
                                    required
                                    rows={6}
                                    className='w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-400 resize-none'
                                />
                                {errors.about_us && <p className='text-sm text-red-500 mt-1'>{errors.about_us}</p>}
                            </div>
                            
                            <div className='space-y-2'>
                                <label className='block text-sm font-semibold text-gray-700'>
                                    <span className='flex items-center gap-2'>
                                        <span>🖼️</span>
                                        Homepage Image
                                    </span>
                                </label>
                                <div className='border-2 border-dashed border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-colors duration-200'>
                                    <input
                                        type="file"
                                        name="home_image"
                                        onChange={handleChange}
                                        accept="image/png,image/jpeg,image/jpg"
                                        className='hidden'
                                        id="home_image"
                                    />
                                    <label htmlFor="home_image" className='cursor-pointer block text-center'>
                                        <div className='w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                                            <span className='text-2xl'>📷</span>
                                        </div>
                                        <p className='text-sm font-medium text-gray-700 mb-1'>Click to upload image</p>
                                        <p className='text-xs text-gray-500'>Recommended: JPG/PNG, at least 1600x900</p>
                                    </label>
                                </div>
                                {errors.home_image && <p className='text-sm text-red-500 mt-1'>{errors.home_image}</p>}
                                
                                {previewUrl && (
                                    <div className='mt-4 bg-gray-50 rounded-xl p-4'>
                                        <div className='flex items-center justify-between mb-3'>
                                            <h4 className='font-medium text-gray-700'>Image Preview</h4>
                                            <button
                                                type="button"
                                                onClick={() => setShowPreview(!showPreview)}
                                                className='text-sm text-blue-600 hover:text-blue-800 font-medium'
                                            >
                                                {showPreview ? 'Hide' : 'Show'} Preview
                                            </button>
                                        </div>
                                        {showPreview && (
                                            <div className='transition-all duration-300'>
                                                <img 
                                                    src={previewUrl} 
                                                    alt="Homepage preview" 
                                                    className='w-full h-48 object-cover rounded-lg shadow-sm' 
                                                />
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Contact Information Section */}
                    <div className='bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden'>
                        <div className='bg-gradient-to-r from-green-50 to-emerald-50 px-8 py-6 border-b border-gray-100'>
                            <div className='flex items-center gap-3'>
                                <div className='w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center'>
                                    <span className='text-xl'>📞</span>
                                </div>
                                <div>
                                    <h3 className='text-xl font-bold text-gray-900'>Contact Information</h3>
                                    <p className='text-sm text-gray-600'>Add contact details that will be displayed on your website</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className='p-8'>
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                                <div className='space-y-2'>
                                    <label className='block text-sm font-semibold text-gray-700'>
                                        <span className='flex items-center gap-2'>
                                            <span>📱</span>
                                            Primary Phone
                                        </span>
                                    </label>
                                    <input
                                        name="mobile1"
                                        value={formData.mobile1}
                                        onChange={handleChange}
                                        type="tel"
                                        placeholder="e.g., +1 555 123 4567"
                                        className='w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-400'
                                    />
                                    {errors.mobile1 && <p className='text-sm text-red-500 mt-1'>{errors.mobile1}</p>}
                                </div>
                                
                                <div className='space-y-2'>
                                    <label className='block text-sm font-semibold text-gray-700'>
                                        <span className='flex items-center gap-2'>
                                            <span>📞</span>
                                            Secondary Phone
                                        </span>
                                    </label>
                                    <input
                                        name="mobile2"
                                        value={formData.mobile2}
                                        onChange={handleChange}
                                        type="tel"
                                        placeholder="Optional"
                                        className='w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-400'
                                    />
                                    {errors.mobile2 && <p className='text-sm text-red-500 mt-1'>{errors.mobile2}</p>}
                                </div>
                                
                                <div className='space-y-2'>
                                    <label className='block text-sm font-semibold text-gray-700'>
                                        <span className='flex items-center gap-2'>
                                            <span>✉️</span>
                                            Primary Email
                                        </span>
                                    </label>
                                    <input
                                        name="email1"
                                        value={formData.email1}
                                        onChange={handleChange}
                                        type="email"
                                        placeholder="you@example.com"
                                        className='w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-400'
                                    />
                                    {errors.email1 && <p className='text-sm text-red-500 mt-1'>{errors.email1}</p>}
                                </div>
                                
                                <div className='space-y-2'>
                                    <label className='block text-sm font-semibold text-gray-700'>
                                        <span className='flex items-center gap-2'>
                                            <span>📧</span>
                                            Secondary Email
                                        </span>
                                    </label>
                                    <input
                                        name="email2"
                                        value={formData.email2}
                                        onChange={handleChange}
                                        type="email"
                                        placeholder="Optional"
                                        className='w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-400'
                                    />
                                    {errors.email2 && <p className='text-sm text-red-500 mt-1'>{errors.email2}</p>}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Social Media Links Section */}
                    <div className='bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden'>
                        <div className='bg-gradient-to-r from-purple-50 to-pink-50 px-8 py-6 border-b border-gray-100'>
                            <div className='flex items-center gap-3'>
                                <div className='w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center'>
                                    <span className='text-xl'>🌐</span>
                                </div>
                                <div>
                                    <h3 className='text-xl font-bold text-gray-900'>Social Media Links</h3>
                                    <p className='text-sm text-gray-600'>Connect your social media profiles to increase engagement</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className='p-8'>
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                                <div className='space-y-2'>
                                    <label className='block text-sm font-semibold text-gray-700'>
                                        <span className='flex items-center gap-2'>
                                            <span>📘</span>
                                            Facebook URL
                                        </span>
                                    </label>
                                    <input
                                        name="facebook"
                                        value={formData.facebook}
                                        onChange={handleChange}
                                        type="url"
                                        placeholder="https://facebook.com/yourpage"
                                        className='w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-400'
                                    />
                                    {errors.facebook && <p className='text-sm text-red-500 mt-1'>{errors.facebook}</p>}
                                </div>
                                
                                <div className='space-y-2'>
                                    <label className='block text-sm font-semibold text-gray-700'>
                                        <span className='flex items-center gap-2'>
                                            <span>📷</span>
                                            Instagram URL
                                        </span>
                                    </label>
                                    <input
                                        name="instagram"
                                        value={formData.instagram}
                                        onChange={handleChange}
                                        type="url"
                                        placeholder="https://instagram.com/yourhandle"
                                        className='w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-400'
                                    />
                                    {errors.instagram && <p className='text-sm text-red-500 mt-1'>{errors.instagram}</p>}
                                </div>
                                
                                <div className='space-y-2'>
                                    <label className='block text-sm font-semibold text-gray-700'>
                                        <span className='flex items-center gap-2'>
                                            <span>🐦</span>
                                            Twitter URL
                                        </span>
                                    </label>
                                    <input
                                        name="twitter"
                                        value={formData.twitter}
                                        onChange={handleChange}
                                        type="url"
                                        placeholder="https://x.com/yourhandle"
                                        className='w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-400'
                                    />
                                    {errors.twitter && <p className='text-sm text-red-500 mt-1'>{errors.twitter}</p>}
                                </div>
                                
                                <div className='space-y-2'>
                                    <label className='block text-sm font-semibold text-gray-700'>
                                        <span className='flex items-center gap-2'>
                                            <span>💼</span>
                                            LinkedIn URL
                                        </span>
                                    </label>
                                    <input
                                        name="linkedin"
                                        value={formData.linkedin}
                                        onChange={handleChange}
                                        type="url"
                                        placeholder="https://linkedin.com/company/yourorg"
                                        className='w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-400'
                                    />
                                    {errors.linkedin && <p className='text-sm text-red-500 mt-1'>{errors.linkedin}</p>}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Content Section */}
                    <div className='bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden'>
                        <div className='bg-gradient-to-r from-orange-50 to-amber-50 px-8 py-6 border-b border-gray-100'>
                            <div className='flex items-center gap-3'>
                                <div className='w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center'>
                                    <span className='text-xl'>📄</span>
                                </div>
                                <div>
                                    <h3 className='text-xl font-bold text-gray-900'>Footer Content</h3>
                                    <p className='text-sm text-gray-600'>Text that appears at the bottom of your website</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className='p-8'>
                            <div className='space-y-2'>
                                <label className='block text-sm font-semibold text-gray-700'>
                                    <span className='flex items-center gap-2'>
                                        <span>📝</span>
                                        Footer Text *
                                    </span>
                                </label>
                                <textarea
                                    name="footerText"
                                    value={formData.footerText}
                                    onChange={handleChange}
                                    placeholder="Copyright, address, or a short note"
                                    required
                                    rows={4}
                                    className='w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-400 resize-none'
                                />
                                {errors.footerText && <p className='text-sm text-red-500 mt-1'>{errors.footerText}</p>}
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className='bg-white rounded-2xl shadow-sm border border-gray-100 p-8'>
                        <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6'>
                            <div className='flex items-center gap-4'>
                                <button
                                    type="submit"
                                    className={`bg-gradient-to-r from-[#800000] to-[#700000] hover:from-[#700000] hover:to-[#600000] px-8 py-4 text-white rounded-xl disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 flex items-center gap-3 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105`}
                                    disabled={processing || !hasChanges}
                                >
                                    {processing ? (
                                        <>
                                            <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                                            Saving…
                                        </>
                                    ) : (
                                        <>
                                            <span className='text-lg'>💾</span>
                                            Update Settings
                                        </>
                                    )}
                                </button>
                                
                                <button
                                    type="button"
                                    className='px-6 py-4 border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 rounded-xl transition-all duration-200 flex items-center gap-3 font-semibold text-gray-700 hover:text-gray-900'
                                    onClick={handleReset}
                                    disabled={processing || !hasChanges}
                                >
                                    <span className='text-lg'>🔄</span>
                                    Reset All
                                </button>
                            </div>
                            
                            <div className='flex items-center gap-2 text-sm'>
                                <div className={`w-3 h-3 rounded-full ${hasChanges ? 'bg-yellow-400' : 'bg-green-400'}`}></div>
                                <span className={`font-medium ${hasChanges ? 'text-yellow-700' : 'text-green-700'}`}>
                                    {hasChanges ? 'You have unsaved changes' : 'All changes saved'}
                                </span>
                            </div>
                        </div>
                    </div>
                </form>
            </main>
        </Admin>
    );
};

const Section = ({ title, icon, description, children }) => {
    return (
        <section className='bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300'>
            <div className='flex items-center gap-3 mb-4'>
                {icon && <span className='text-2xl'>{icon}</span>}
                <div>
                    <h3 className='text-xl font-bold text-gray-800'>{title}</h3>
                    {description && (
                        <p className='text-sm text-gray-600 mt-1'>{description}</p>
                    )}
                </div>
            </div>
            {children}
        </section>
    );
};

const Input = ({ handleChange, name, value, label, select, type = 'text', required, error, helpText, placeholder, icon }) => {
    const baseClass = 'border-b-2 font-figtree focus:ring-0 focus:border-b-2 focus:border-pry border-pry border-0 w-full transition-all duration-200 hover:border-gray-400 focus:border-[#800000]';
    return (
        <div className='font-figtree group'>
            <label htmlFor={name} className='font-semibold text-gray-700 flex items-center gap-2'>
                {icon && <span className='text-lg'>{icon}</span>}
                {label}{required ? ' *' : ''}
            </label>
            {select ? (
                <textarea
                    id={name}
                    name={name}
                    required={required}
                    value={value}
                    onChange={handleChange}
                    rows={8}
                    className={`${baseClass} resize-none`}
                    placeholder={placeholder || label}
                ></textarea>
            ) : (
                <input
                    type={type}
                    id={name}
                    name={name}
                    required={required}
                    value={value}
                    onChange={handleChange}
                    className={baseClass}
                    placeholder={placeholder || label}
                />
            )}
            {helpText ? (
                <p className='text-xs text-gray-500 mt-2 flex items-center gap-1'>
                    <span>💡</span>
                    {helpText}
                </p>
            ) : null}
            {error ? (
                <p className='text-xs text-red-600 mt-2 flex items-center gap-1'>
                    <span>⚠️</span>
                    {error}
                </p>
            ) : null}
        </div>
    );
};

const FileInput = ({ name, label, handleChange, error, helpText, icon }) => {
    return (
        <div className='font-figtree group'>
            <label htmlFor={name} className='font-semibold text-gray-700 flex items-center gap-2'>
                {icon && <span className='text-lg'>{icon}</span>}
                {label}
            </label>
            <div className='relative'>
                <input
                    type="file"
                    id={name}
                    name={name}
                    onChange={handleChange}
                    className='border-b-2 font-figtree focus:ring-0 focus:border-b-2 focus:border-pry border-pry border-0 w-full transition-all duration-200 hover:border-gray-400 focus:border-[#800000] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#800000] file:text-white hover:file:bg-[#700000]'
                    accept="image/png,image/jpeg,image/jpg"
                />
            </div>
            {helpText ? (
                <p className='text-xs text-gray-500 mt-2 flex items-center gap-1'>
                    <span>💡</span>
                    {helpText}
                </p>
            ) : null}
            {error ? (
                <p className='text-xs text-red-600 mt-2 flex items-center gap-1'>
                    <span>⚠️</span>
                    {error}
                </p>
            ) : null}
        </div>
    );
};

export default Settings;
