import React from 'react'
import Navbar from '@/app/(components)/Navbar/'
import Sidebar from  '@/app/(components)/Sidebar/'

const DashboardWrapper = ({children} : { children : React.ReactNode}) => {
  return (
    <div className='flex min-h-screen w-full bg-gray-50 text-gray-900'>
        {/* {sidebar} */}
        <Sidebar />
        <main
            className={`dark:bg-dark-bg flex flex-col w-full bg-gray-50 md:pl-64`}>
                {/* Navbar */}
                <Navbar />
                {children}
        </main>
    </div>
  )
}

export default DashboardWrapper