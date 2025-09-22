import React from 'react'
import DashboardCard from '../../components/Cards/DashboardCard';
import PaymentCard from '../../components/Cards/PaymentCard';
import LatestMembers from '../../components/Tables/LatestMembers';
import DashboardTitle from '../../components/Header/DashboardTitle';
import { 
  UserGroupIcon, 
  CurrencyDollarIcon, 
  CalendarIcon, 
  NewspaperIcon,
  ChartBarIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon
} from '@heroicons/react/24/outline'
import Admin from '@/Layouts/AdminLayout';

const Index = ({ data }) => {
  console.log(data);

  // Calculate growth percentages (mock data for demonstration)
  const memberGrowth = 12.5; // Mock percentage
  const paymentGrowth = 8.3; // Mock percentage
  const eventGrowth = -2.1; // Mock percentage
  const newsGrowth = 15.7; // Mock percentage

  return (
    <Admin>
      <main className='p-5 sm:p-10 space-y-8'>
        <div className='flex items-center justify-between'>
          <DashboardTitle
            title={"Dashboard Overview"}
            subtitle={"Welcome back, Administrator! Here's what's happening with your association."}
          />
          <div className='hidden sm:flex items-center gap-2 text-sm text-gray-500'>
            <ChartBarIcon className='h-4 w-4' />
            <span>Last updated: {new Date().toLocaleDateString()}</span>
          </div>
        </div>

        {/* Enhanced Stats Cards */}
        <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          <div className='group transform transition-all duration-300 hover:scale-105'>
            <DashboardCard
              title={"Total Members"}
              icon={<UserGroupIcon className='h-6 w-6 text-white'/>}
              value={data.memberCount || 0}
              subtitle="Active members"
              trend={memberGrowth}
              trendLabel="vs last month"
              color="bg-gradient-to-br from-blue-500 to-blue-600"
            />
          </div>
          
          <div className='group transform transition-all duration-300 hover:scale-105' style={{ animationDelay: '100ms' }}>
            <DashboardCard
              title={"Total Payments"}
              icon={<CurrencyDollarIcon className='h-6 w-6 text-white'/>}
              value={data.totalTrans || 0}
              subtitle="Transactions"
              trend={paymentGrowth}
              trendLabel="vs last month"
              color="bg-gradient-to-br from-green-500 to-green-600"
            />
          </div>
          
          <div className='group transform transition-all duration-300 hover:scale-105' style={{ animationDelay: '200ms' }}>
            <DashboardCard
              title={"Total Events"}
              icon={<CalendarIcon className='h-6 w-6 text-white'/>}
              value={data.events || 0}
              subtitle="Upcoming events"
              trend={eventGrowth}
              trendLabel="vs last month"
              color="bg-gradient-to-br from-purple-500 to-purple-600"
            />
          </div>
          
          <div className='group transform transition-all duration-300 hover:scale-105' style={{ animationDelay: '300ms' }}>
            <DashboardCard
              title={"Total News"}
              icon={<NewspaperIcon className='h-6 w-6 text-white'/>}
              value={data.newsCount || 0}
              subtitle="Published articles"
              trend={newsGrowth}
              trendLabel="vs last month"
              color="bg-gradient-to-br from-orange-500 to-orange-600"
            />
          </div>
        </section>

        {/* Quick Actions */}
        <div className='bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100'>
          <h3 className='text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2'>
            <ChartBarIcon className='h-5 w-5' />
            Quick Actions
          </h3>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            <button className='p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-200 text-left group'>
              <UserGroupIcon className='h-6 w-6 text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-200' />
              <div className='text-sm font-medium text-gray-900'>Manage Members</div>
              <div className='text-xs text-gray-500'>View and edit member data</div>
            </button>
            
            <button className='p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors duration-200 text-left group'>
              <CurrencyDollarIcon className='h-6 w-6 text-green-600 mb-2 group-hover:scale-110 transition-transform duration-200' />
              <div className='text-sm font-medium text-gray-900'>View Payments</div>
              <div className='text-xs text-gray-500'>Track transactions</div>
            </button>
            
            <button className='p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors duration-200 text-left group'>
              <CalendarIcon className='h-6 w-6 text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-200' />
              <div className='text-sm font-medium text-gray-900'>Create Event</div>
              <div className='text-xs text-gray-500'>Add new events</div>
            </button>
            
            <button className='p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors duration-200 text-left group'>
              <NewspaperIcon className='h-6 w-6 text-orange-600 mb-2 group-hover:scale-110 transition-transform duration-200' />
              <div className='text-sm font-medium text-gray-900'>Publish News</div>
              <div className='text-xs text-gray-500'>Share updates</div>
            </button>
          </div>
        </div>

        {/* Enhanced Data Tables Section */}
        <section className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          <div className='lg:col-span-2'>
            <div className='bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100 overflow-hidden'>
              <div className='p-6 border-b border-gray-200'>
                <h3 className='text-lg font-semibold text-gray-800 flex items-center gap-2'>
                  <UserGroupIcon className='h-5 w-5' />
                  Latest Members
                </h3>
                <p className='text-sm text-gray-500 mt-1'>Recently registered members</p>
              </div>
              <LatestMembers data={data.members || []}/>
            </div>
          </div>
          
          <div className='lg:col-span-1'>
            <div className='bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100 overflow-hidden'>
              <div className='p-6 border-b border-gray-200'>
                <h3 className='text-lg font-semibold text-gray-800 flex items-center gap-2'>
                  <CurrencyDollarIcon className='h-5 w-5' />
                  Recent Payments
                </h3>
                <p className='text-sm text-gray-500 mt-1'>Latest transactions</p>
              </div>
              <PaymentCard data={data.trans || []}/>
            </div>
          </div>
        </section>

        {/* System Status */}
        <div className='bg-gradient-to-r from-[#800000] to-[#600000] rounded-xl p-6 text-white'>
          <div className='flex items-center justify-between'>
            <div>
              <h3 className='text-lg font-semibold mb-2'>System Status</h3>
              <p className='text-sm opacity-90'>All systems operational</p>
            </div>
            <div className='flex items-center gap-2'>
              <div className='w-3 h-3 bg-green-400 rounded-full animate-pulse'></div>
              <span className='text-sm font-medium'>Online</span>
            </div>
          </div>
        </div>
      </main>
    </Admin>
  )
}

export default Index;