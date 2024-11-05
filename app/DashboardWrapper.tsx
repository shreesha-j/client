import React from 'react'
import Navbar from '@/app/(components)/Navbar/'

const DashboardWrapper = ({children} : { children : React.ReactNode}) => {
  return (
    <div className='flex min-h-screen w-full bg-gray-50 text-gray-900'>
        {/* {sidebar} */}
        <main
            className={`dark:bg-dark-bg flex flex-col w-full bg-gray-50 md:pl-64`}>
                {/* Navbar */}
                {children}
        </main>
    </div>
  )
}

export default DashboardWrapper