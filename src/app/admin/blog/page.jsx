'use client'
import BlogItemTable from '@/components/admonComponent/BlogItemTable'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const page = () => {
  const [blogs,setblogs]=useState([])
27890
  const fechblog= async()=>{
    const response = await axios.get('/api/blog')
    setblogs(response.data.blogs)
  }
  //delete blog
  const deleteblog= async(mongoId)=>{
    const response = await axios.delete('/api/blog',{
      params:{
        id:mongoId,
      }
    })
    toast.success(response.data.msg);
    fechblog();
  }

  useEffect(()=>{
    fechblog();
  },[])

  return (
    <div className=' flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>
      <h1 className=''>All blogs</h1>
      <div className=" relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hiden ">
        <table className='w-full text-sm text-gray-400 '>
          <thead className='text-sm text-gray-700 text-left uppercase bg-gray-50'>
            <tr>
              <th scope='col' className='hidden sm:block px-6 py-3'>Auther name</th>
              <th scope='col' className='px-6 py-3'>Blog Title</th>
              <th scope='col' className='px-6 py-3'>Blog Date</th>
              <th scope='col' className='px-6 py-3'>Action</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((items, index)=>(
              <BlogItemTable key={index}mongoId={items._id} title={items.title} auther={items.author} date={items.date} deleteBlog={deleteblog} />))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default page