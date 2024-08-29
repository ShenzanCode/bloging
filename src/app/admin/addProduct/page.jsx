'use client'
import { assets } from '@/Assets/assets'
import axios from 'axios'
import Image from 'next/image'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const page = () => {
  const [image, setimage] = useState(false)
  const [data, setdata] = useState({
    title: '',
    descripton: '',
    category: 'Startup',
    authorImage: "/shenzan1.png",
    author: 'Shenzan Ali'
  })

  const onchangehandler = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value })
  }
  const submitHandler = async(e) => {
    e.preventDefault()
    const formData= new FormData();
    formData.append('title', data.title);
    formData.append('descripton', data.descripton);
    formData.append('category', data.category);
    formData.append('author', data.author);
    formData.append('authorImage', data.authorImage);
    formData.append('image', image);
    const respose=await axios.post('/api/blog', formData)
    if(respose.data.success){
      toast.success(respose.data.msg)
      setimage(false)
      setdata({
        title: '',
        descripton: '',
        category: 'Startup',
        authorImage: "/shenzan1.png",
        author: 'Shenzan Ali'
      })
    }
    else{
      toast.error('Something went wrong')
    }
  }
  return (
    <>
      <form className='pt-5 px-5 sm:pt-12 sm:pl-16'>
        <p className='text-xl'>Upload thumbnail</p>
        <label htmlFor="image">
          <Image className='mt-4' src={!image ? assets.upload_area : URL.createObjectURL(image)} width={140} height={70} alt='' />
        </label>
        <input onChange={(e) => setimage(e.target.files[0])} type="file" id='image' hidden required />
        <p className=' text-xl mt-4'>Blog title</p>
        <input name='title' onChange={onchangehandler} value={data.title} className=' w-full sm:w-[500px] my-4 py-3 border' type="text" placeholder='Type here' required />
        <p className=' text-xl mt-4'>Description</p>
        <textarea name='descripton' onChange={onchangehandler} value={data.descripton} className=' w-full sm:w-[500px] my-4 py-3 border' type="text" rows={6} placeholder='Write content here...' required />
        <p className='text-xl mt-4'>Choose category:</p>
        <select name="category" onChange={onchangehandler} value={data.category}>
          <option value="'Startup">Startup</option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>
        <p className='mt-2'>You selected: {data.category}</p>
        <br />
        <button onClick={submitHandler} className='mt-4 w-40 h-12 bg-black text-white'>Add</button>
      </form>
    </>
  )
}

export default page