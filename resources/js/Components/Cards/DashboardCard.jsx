import { UserIcon, ArrowTrendingUpIcon, ArrowTrendingDownIcon } from '@heroicons/react/24/outline'
import React from 'react'

const DashboardCard = ({title, icon, value, subtitle, trend, trendLabel, color = 'bg-gradient-to-br from-yellow-400 to-yellow-500'}) => {
  const isPositiveTrend = trend > 0;
  const isNegativeTrend = trend < 0;
  
  return (
    <div className='bg-white shadow-lg rounded-lg w-full p-4 sm:p-6 space-y-4 hover:shadow-xl transition-all duration-300'>
        <div className='flex items-center justify-between'>
            <div>
                <p className='font-manrope text-sm sm:text-md text-gray-600'>{title}</p>
                {subtitle && (
                    <p className='text-xs text-gray-500 mt-1'>{subtitle}</p>
                )}
            </div>
            <div className={`rounded-full p-3 shadow-lg ${color}`}>
               {icon}
            </div>
        </div>
        
        <div className='space-y-2'>
            <p className='font-figtree font-bold text-3xl text-gray-900'>{value?.toLocaleString() || 0}</p>
            
            {trend !== undefined && (
                <div className='flex items-center gap-2'>
                    <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                        isPositiveTrend 
                            ? 'bg-green-100 text-green-700' 
                            : isNegativeTrend 
                                ? 'bg-red-100 text-red-700' 
                                : 'bg-gray-100 text-gray-700'
                    }`}>
                        {isPositiveTrend ? (
                            <ArrowTrendingUpIcon className='h-3 w-3' />
                        ) : isNegativeTrend ? (
                            <ArrowTrendingDownIcon className='h-3 w-3' />
                        ) : null}
                        <span>{Math.abs(trend)}%</span>
                    </div>
                    {trendLabel && (
                        <span className='text-xs text-gray-500'>{trendLabel}</span>
                    )}
                </div>
            )}
        </div>
    </div>
  )
}

export default DashboardCard