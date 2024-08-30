"use client"
import SubcriptionTableItem from '@/components/admonComponent/SubcriptionTableItem'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const page = () => {
  const [emails,setemails] =useState([])
    const fetchemail=async()=>{
      const response = await axios.get('/api/email')
      setemails(response.data.emails)
      console.log(response.data.emails)
    }
    //delete function
    const delemail=async(mongoId)=>{
      const response = await axios.delete('/api/email',{
        params:{
          id:mongoId,
        }
      })
      if(response.data.success){
        toast.success(response.data.msg)
        fetchemail();
        // setemails(emails.filter(email=>email._id!==mongoId))
      }else{
        toast.error('Failed to delete')
      }
    }
    useEffect(()=>{
      fetchemail();
    },[])
  return (
    <div className=' flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>
      <h1>All Subcription</h1>
      <div className=' relative max-w-[600px] h-[80vh] overflow-x-auto mt-4 border border-gray-400 scrollbar-hiden'>
        <table className=' w-full text-gray-500 text-sm'>
          <thead className='text-xs text-left text-gray-700 uppercase bg-gray-50'>
            <tr>
              <th scope='col' className='px-6 py-3'>Email Subcription</th>
              <th scope='col' className=' hidden sm:block px-6 py-3'>Date</th>
              <th scope='col' className='px-6 py-3'>Action</th>
            </tr>
          </thead>
          <tbody>
            {emails.map((items, index)=>{
              return <SubcriptionTableItem key={index} delemail={delemail} mongoId={items._id} email={items.email} date={items.date}/>
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default page