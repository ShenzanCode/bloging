import React from 'react'

const SubcriptionTableItem = ({email,mongoId,date,delemail}) => {
    const emailDate=new Date(date)
  return (
    <tr className=' bg-white border-b text-left'>
        <th className='px-6 py-4 font-medium text-gray-900 whitespace-normal' scope='row'>
            {email? email:"no email"}
        </th>
        <td className=' px-6 py-4 hidden sm:block'>{emailDate.toDateString()}</td>
        <td onClick={()=>delemail(mongoId)} className=' px-6 py-4 cursor-pointer'>X</td>
    </tr>
  )
}

export default SubcriptionTableItem