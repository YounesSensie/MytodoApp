"use client"

import LogoutButton from '@/app/(authentification)/_component/logout-button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu'
import Image from 'next/image'
import React from 'react'

const UserButton = () => {
  return (
    <div>
      <DropdownMenu >
        <DropdownMenuTrigger asChild>
        <div className=' relative w-10 h-10 cursor-pointer'>
                        <Image src="/user-01.png" alt="user photo" fill priority sizes='864px' className=' border border-sky-500 rounded-full' />
        </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className=' bg-white p-3'>
            <DropdownMenuLabel> Profile </DropdownMenuLabel>
            <DropdownMenuSeparator/>
            <DropdownMenuItem> <LogoutButton/></DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default UserButton
