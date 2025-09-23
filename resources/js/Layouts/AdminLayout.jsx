import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCalendarDays, faCog, faHomeAlt, faImage, faMoneyCheckDollar, faNewspaper, faUserDoctor, faUserGroup, faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from '@inertiajs/react';
import { Toaster } from '@/Components/ui/sonner'

const user = {
  name: '',
  email: '',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const navigation = [
  { name: 'Overview', href: '/admin', icon:  <FontAwesomeIcon icon={faHomeAlt}/>, type: 'item' },
  { name: 'Members', href: '/admin/members', icon:  <FontAwesomeIcon icon={faUserGroup}/>, type: 'item' },
  { name: 'Payments', href: '/admin/payments', icon:  <FontAwesomeIcon icon={faMoneyCheckDollar}/>, type: 'item' },
  { name: 'Events', href: '/admin/events', icon:  <FontAwesomeIcon icon={faCalendarDays}/>, type: 'item' },
  { name: 'News and Updates', href: '/admin/news', icon:  <FontAwesomeIcon icon={faNewspaper}/>, type: 'item' },
  { name: 'Job Board', href: '/admin/job-board', icon:  <FontAwesomeIcon icon={faUserDoctor}/>, type: 'item' },
  { name: 'Executives', icon: <FontAwesomeIcon icon={faUserGroup}/>, type: 'submenu',
    children: [
      { name: 'National Executives', href: '/admin/executives' },
      { name: 'Board of Trustees', href: '/admin/trustees' },
      { name: 'Set Representatives', href: '/admin/set-representatives' },
    ]
  },
  { name: 'Gallery', href: '/admin/gallery', icon:  <FontAwesomeIcon icon={faImage}/>, type: 'item' },
  { name: 'Website Settings', href: '/admin/settings', icon:  <FontAwesomeIcon icon={faCog}/>, type: 'item' },
]

const userNavigation = [
]

export default function Admin({ children }) {
  const [isOpen, setIsOpen] = useState(false) // Start closed on mobile
  const [openMenus, setOpenMenus] = useState({ executives: true })

  const toggleMenu = (key) => setOpenMenus(prev => ({ ...prev, [key]: !prev[key] }))
  
  const closeSidebar = () => setIsOpen(false)

  return (
    <>
      <div className="relative flex h-screen bg-gray-50">
        {/* Mobile Overlay */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
            onClick={closeSidebar}
          />
        )}

        {/* Sidebar */}
        <aside className={`
          fixed lg:static inset-y-0 left-0 z-30 w-64 lg:w-auto
          bg-yellow-400 border-r border-gray-200 shadow-lg lg:shadow-none
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          lg:flex lg:flex-col lg:h-full
        `}>
          {/* Logo Header */}
          <div className="h-16 flex items-center gap-3 px-4 border-b border-gray-200">
            <img src="/logo.png" alt="logo" className="h-8 w-8 flex-shrink-0"/>
            <span className="font-semibold text-gray-900 truncate">Admin Panel</span>
            <button 
              onClick={closeSidebar}
              className="lg:hidden ml-auto p-1 rounded-md hover:bg-gray-100"
            >
              <FontAwesomeIcon icon={faBars} className="h-4 w-4 text-gray-900"/>
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-3 space-y-1">
            {navigation.map((item, idx) => item.type === 'item' ? (
              <Link 
                key={idx} 
                href={item.href} 
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-100 text-sm font-medium text-gray-900 hover:text-gray-900 transition-colors duration-200"
                onClick={closeSidebar}
              >
                <span className="w-4 h-4 flex-shrink-0 text-gray-500">{item.icon}</span>
                <span className="truncate">{item.name}</span>
              </Link>
            ) : (
              <div key={idx} className="space-y-1">
                <button 
                  onClick={() => toggleMenu('executives')} 
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-gray-100 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-4 h-4 flex-shrink-0 text-gray-500">{item.icon}</span>
                    <span className="truncate">{item.name}</span>
                  </span>
                  <FontAwesomeIcon 
                    icon={openMenus.executives ? faChevronDown : faChevronRight} 
                    className="h-3 w-3 text-gray-400 flex-shrink-0"
                  />
                </button>
                {openMenus.executives && (
                  <div className="ml-7 mt-1 mb-2 space-y-1">
                    {item.children.map((child, cidx) => (
                      <Link 
                        key={cidx} 
                        href={child.href} 
                        className="block px-3 py-2 rounded-md hover:bg-gray-100 text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                        onClick={closeSidebar}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Header */}
          <header className="h-16 flex items-center justify-between px-4 lg:px-6 border-b border-gray-200 bg-white shadow-sm">
            <div className="flex items-center gap-4">
              <button 
                className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200" 
                onClick={() => setIsOpen(!isOpen)}
              >
                <FontAwesomeIcon icon={faBars} className="h-5 w-5 text-gray-600"/>
              </button>
              <div className="hidden sm:block">
                <h1 className="text-lg font-semibold text-gray-900">Dashboard</h1>
                <p className="text-sm text-gray-600">Welcome back, Admin</p>
              </div>
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
      <Toaster />
    </>
  )
}
