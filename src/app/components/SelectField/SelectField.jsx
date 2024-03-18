import React from 'react'

const SelectField = ({title, name, options}) => {
  return (
    <>
    {title && <h1 className='text-[1vw] text-[#4B4752] font-bd'>{title}</h1>}
    <select name={name} className='flex w-full p-[0.8vw] text-[1vw] bg-[#ECECEC] rounded-md focus:outline-none'>
    {options?.map((option, i) => <option key={i} value={option?.value}>{option?.label}</option>)}
   </select>
    </>
  )
}

export default SelectField