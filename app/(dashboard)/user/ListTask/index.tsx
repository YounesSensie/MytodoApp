"use client"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { ArchiveRestore } from 'lucide-react';
import React, { useState } from 'react'
import Progressbar from '../_component/progress-bar';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

const ListTaskPage = () => {
  const data = [
    {
      task: 'Task 1',
      location: 'Location 1',
      inventoryDate: '2024-08-01',
      status: 'Pending',
      progressBar: 20,
      number: 1
    },
    {
      task: 'Task 2',
      location: 'Location 2',
      inventoryDate: '2024-08-02',
      status: 'In Progress',
      progressBar: 40,
      number: 2
    },
    {
      task: 'Task 3',
      location: 'Location 3',
      inventoryDate: '2024-08-03',
      status: 'Completed',
      progressBar: 100,
      number: 3
    },
    {
      task: 'Task 4',
      location: 'Location 4',
      inventoryDate: '2024-08-04',
      status: 'Pending',
      progressBar: 10,
      number: 4
    },
    {
      task: 'Task 5',
      location: 'Location 5',
      inventoryDate: '2024-08-05',
      status: 'In Progress',
      progressBar: 60,
      number: 5
    },
    {
      task: 'Task 6',
      location: 'Location 6',
      inventoryDate: '2024-08-06',
      status: 'Completed',
      progressBar: 100,
      number: 6
    },
    {
      task: 'Task 7',
      location: 'Location 7',
      inventoryDate: '2024-08-07',
      status: 'Pending',
      progressBar: 30,
      number: 7
    },
    {
      task: 'Task 8',
      location: 'Location 8',
      inventoryDate: '2024-08-08',
      status: 'In Progress',
      progressBar: 50,
      number: 8
    },
    {
      task: 'Task 9',
      location: 'Location 9',
      inventoryDate: '2024-08-09',
      status: 'Completed',
      progressBar: 100,
      number: 9
    },
    {
      task: 'Task 10',
      location: 'Location 10',
      inventoryDate: '2024-08-10',
      status: 'Pending',
      progressBar: 5,
      number: 10
    },
    {
      task: 'Task 11',
      location: 'Location 11',
      inventoryDate: '2024-08-11',
      status: 'In Progress',
      progressBar: 70,
      number: 11
    },
    {
      task: 'Task 12',
      location: 'Location 12',
      inventoryDate: '2024-08-12',
      status: 'Completed',
      progressBar: 100,
      number: 12
    },
    {
      task: 'Task 13',
      location: 'Location 13',
      inventoryDate: '2024-08-13',
      status: 'Pending',
      progressBar: 15,
      number: 13
    },
    {
      task: 'Task 14',
      location: 'Location 14',
      inventoryDate: '2024-08-14',
      status: 'In Progress',
      progressBar: 80,
      number: 14
    },
    {
      task: 'Task 15',
      location: 'Location 15',
      inventoryDate: '2024-08-15',
      status: 'Completed',
      progressBar: 100,
      number: 15
    },
    {
      task: 'Task 16',
      location: 'Location 16',
      inventoryDate: '2024-08-16',
      status: 'Pending',
      progressBar: 25,
      number: 16
    },
    {
      task: 'Task 17',
      location: 'Location 17',
      inventoryDate: '2024-08-17',
      status: 'In Progress',
      progressBar: 90,
      number: 17
    },
    {
      task: 'Task 18',
      location: 'Location 18',
      inventoryDate: '2024-08-18',
      status: 'Completed',
      progressBar: 100,
      number: 18
    },
    {
      task: 'Task 19',
      location: 'Location 19',
      inventoryDate: '2024-08-19',
      status: 'Pending',
      progressBar: 35,
      number: 19
    },
    {
      task: 'Task 20',
      location: 'Location 20',
      inventoryDate: '2024-08-20',
      status: 'In Progress',
      progressBar: 95,
      number: 20
    }
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const currentTasks = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const handleNextPage = () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    const handlePreviousPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };

  return (
    <div className=' mt-4 border rounded bg-white w-full'>
        <div className=' flex items-center  px-4'>
           <h1 className=' p-4 text-orange-400 text-xl '> ACTIVITIES </h1>
           <span className=' bg-gray-100 rounded-2xl  text-gray-600 px-4 py-1 text-base'> 0 Tasks</span>
      
        </div>
        <div className='p-4'>
           <Table className=' p-5 border rounded-xl'>
             <TableHeader className=' bg-backcolor '>
               <TableRow className=' text-colortext '>
                 <TableHead className=' text-sm font-bold '>Name</TableHead>
                 <TableHead  className=' text-sm font-bold '>Location</TableHead>
                 <TableHead  className=' text-sm font-bold '>Inventory</TableHead>
                 <TableHead  className=' text-sm font-bold '>Status</TableHead>
                 <TableHead  className=' text-sm font-bold '>Progress bar</TableHead>
               </TableRow>
             </TableHeader>
             <TableBody className=' table-auto'>
              {
                currentTasks.map((item, index) => (
                  <TableRow key={index} className=' text-gray-600 '>
                    <TableCell className='flex items-center gap-6 px-8'>
                      <ArchiveRestore className=' text-deep_purple size-5'/>
                      <span className=' text-sm'>{"[Urgent]"} {item.task}</span>
                    </TableCell>
                    <TableCell className='px-8'> {item.location}</TableCell>
                    <TableCell className='px-8'> {item.inventoryDate}</TableCell>
                    <TableCell className='px-8'> 
                      <span className={`p-2 border text-xs rounded-xl ${
                      item.status === 'Pending' ? "text-amber-700 border-amber-700": item.status === 'In Progress' ?
                       " text-deep_purple border-deep_purple":"text-green-600 border-green-600"
                    }`}>
                      {item.status}
                      </span>
                    </TableCell>
                    <TableCell className='px-8'>
                      <Progressbar progNumber={item.progressBar}/>
                    </TableCell>
                  </TableRow>
                ))
              }

             </TableBody>
            </Table>
            <Pagination className="mt-4">
            <PaginationContent className=" text-charcoaltext">
                <PaginationItem className="text-sm border border-gray-300 rounded-xl hover:bg-graythird">
                  <PaginationPrevious onClick={handlePreviousPage} href="#"  />
                </PaginationItem>
                <PaginationItem className="">
                  <PaginationLink isActive href="#">{currentPage}</PaginationLink>
                </PaginationItem>
                <PaginationItem className=" text-charcoaltext font-light">
                  <PaginationEllipsis/>
                </PaginationItem>
                <PaginationItem className="text-sm border border-gray-300 rounded-xl hover:bg-graythird">
                  <PaginationNext onClick={handleNextPage} href="#" />
                </PaginationItem>
            </PaginationContent>
     </Pagination> 
        </div>
    </div>
  )
}

export default ListTaskPage
