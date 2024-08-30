import React from 'react'
import Sidebar from '@/components/admonComponent/Sidebar'
import Image from 'next/image';
import { assets } from '@/Assets/assets';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function RootLayout({ children }) {
    return (
        <>
            <div className='flex'>
                <ToastContainer theme='dark'/>
                <Sidebar />
                <div className="flex flex-col w-full">
                    <div className="flex items-center justify-between w-full py-3 px-3 max-h-[60px] border border-b border-black">
                        <h3 className=' font-medium'>Admin Panel</h3>
                        <Image src={assets.profile_icon} alt='' width={40} />
                    </div>
                    {children}
                </div>
            </div>

        </>
    );
}