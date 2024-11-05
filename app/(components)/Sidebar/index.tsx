'use client'

import next from 'next';
import React, { useState } from 'react'
import Image from 'next/image';
import { LockIcon } from 'lucide-react';

const sidebar = () => {
    const [showProjects,setShowProjects] = useState(true);
    const [showPriority,setShowPriority] = useState(true);

    const sideCalssNames = ` fixed flex flex-col h-[100%] justify-between shadow-xl
    transition-all duration-300 h-full z-40 bg-white w-64 overflow-y-auto black:bg-black`


  return (
    <div className={sideCalssNames}>
        <div className='flex flex-col justify-start h-[100%] w-full'>
            <div className='flex h-[100%] w-full flex-col justify-start'>
                {/* TOP LOGO */}
                <div className='z-50 flex min-h-[56px] px-6 pt-3 w-64 items-center justify-between bg-white dark:bg-black'>
                    <div className='text-xl font-bold text-gray-800 dark:text-white'>
                        Hello
                    </div>
                </div>
                {/* Organisation */}
                <div className='flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700'>
                    <Image src="/next.svg" alt='logo' width={40} height={40} />
                    {/* Organisation Logo */}
                    <div>
                        <h3 className='text-md font-bold tracking-wide dark:text-green-200'>
                            Organisation One
                            {/* Organisation Name */}
                        </h3>
                        <div className='mt-1 flex items-start gap-2'>
                            <LockIcon className='mt-[0.1rem] h-3 w-3 text-gray-500 dark:text-gray-400' />
                            <p className='text-xs text-gray-500'>
                                {/* Organisation type */}
                                private
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default sidebar