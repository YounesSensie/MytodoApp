"use client"
import { Input } from '@/components/ui/input'
import { FilterIcon, LayoutDashboard, List, Search } from 'lucide-react'
import React from 'react'

const Filter = () => {
    const StatusList =[
        { id: 1, name: 'Pending' },
        { id: 2, name: 'In Progress' },
        { id: 3, name: 'Completed' },
    ]
  return (
    <div className='flex flex-col gap-4 mt-5 p-2'>
        <div className=' flex items-center justify-between'>
            <div className=' flex items-center gap-2'>
                <div className=' flex border rounded items-center gap-2 px-2 bg-white'>
                    <Search className=' text-gray-400 cursor-pointer'/>
                    <Input className=" border-none placeholder:text-gray-400 " type='text' placeholder='search' />
                 </div>
                 <div className='flex px-2 py-1.5 bg-white border rounded items-center '>
                    <FilterIcon className='size-4 fill-gray-400 text-gray-400'/>
                    <span className=' text-base px-2 text-gray-600'> Filter </span>
                 </div>
            </div>
            <div className=' flex items-center gap-4'>
                <div className=' flex items-center gap-1'>
                    <span className=' text-base text-gray-600 px-1'>Group by:</span>
                    <div className=' flex rounded border items-center p-1.5 justify-between bg-white'>
                        <select id="status" name="status" className=' text-gray-600 text-sm '>
                            <option value="">Status</option>
                            {
                                StatusList.map((item, index) => (
                                    <option key={index} value={item.name}>{item.name}</option>

                                ))
                            }
                        </select>
                        
                    </div>
                   
                </div>
                <span className='p-1.5 border bg-white rounded'>
                        <LayoutDashboard className='bg-white size-5 cursor-pointer'/>
                    </span>
                <span className=' p-1.5 border bg-white border-deep_purple rounded'>
                        <List className=' text-deep_purple size-5 cursor-pointer'/>
                </span>

            </div>
        </div>

    </div>
  )
}

export default Filter
