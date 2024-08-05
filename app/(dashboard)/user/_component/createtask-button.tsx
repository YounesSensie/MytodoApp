"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Plus } from 'lucide-react'
import React, { useState } from 'react'

const CreateButton = () => {
    const [open , setOpen] = useState(false) 
  return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
           <span className='px-2 flex items-center  bg-deep_purple text-white py-1 rounded cursor-pointer text-sm'>
            <Plus/> Create New Task</span>
        </DialogTrigger>
       <DialogContent className=' bg-backcolor w-[50%]'>
        <DialogHeader>
            <DialogTitle>Add Task</DialogTitle>
            <DialogDescription hidden></DialogDescription>
        </DialogHeader>
        {/* Todo Form for adding user*/}
         Implement Form compoent  that can be used to add Task 
       </DialogContent>

      </Dialog> 
  )
}

export default CreateButton
