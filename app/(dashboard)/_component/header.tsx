"use client"
import LogoutButton from '@/app/(authentification)/_component/logout-button'
import { Bell, Box, LayoutDashboard, Settings, ShoppingCart, SquareStackIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import UserButton from './user-avatar'

const Header = () => {
    return (
        <header className=' fixed bg-white top-0 left-0 w-full h-16 border shadow z-50'>
            <div className=' flex items-center justify-between px-9 py-2'>
                <div className='flex items-center gap-1 '>
                    <div className='relative w-10 h-10'>
                        <Image src="/todo-logo.png" alt="logo todo" priority fill sizes='864px' />
                    </div>
                    <div className=''>
                        <h1 className='text-xl font-extrabold text-colortext'>TODO-APP</h1>
                    </div>
                </div>
                <div className=''>
                    <nav className=' font-normal text-sm text-gray-600'>
                        <ul className='flex items-center gap-6'>
                            <li className=' flex items-center text-deep_purple  hover:text-deep_purple'>
                                <LayoutDashboard className='' />
                                <Link href={"/user"} className=' px-2'> Home</Link>
                            </li>
                            <li className=' flex items-center  hover:text-deep_purple'>
                                <Box className=' ' />
                                <Link href={"/user"} className=' px-2'> Completed Task</Link>
                            </li>
                            <li className=' flex items-center  hover:text-deep_purple'>
                                <ShoppingCart className=' ' />
                                <Link href={"/user"} className=' px-2'> Cancel</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className=' flex items-center gap-4'>
                    
                    <Link href={"/user"} className=' px-2'> <Settings className=' text-gray-600' /></Link>
                    <Link href={"/user"} className='px-2'> <Bell className=' text-gray-600' /></Link>
                    <UserButton/>
                    
                </div>

            </div>
        </header>
    )
}

export default Header
