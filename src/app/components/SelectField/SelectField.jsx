import React from 'react'

const SelectField = ({title, name, options}) => {
  return (
    <>
    {title && <h1 className='text-[3.5vw] xl:text-[1vw] lg:text-[1vw] md:text-[1vw] text-[#4B4752] font-bd'>{title}</h1>}
    <select name={name} className='flex w-full p-[3.5vw] xl:p-[0.8vw] lg:p-[0.8vw] md:p-[0.8vw] text-[3.5vw] xl:text-[1vw] lg:text-[1vw] md:text-[1vw] bg-[#ECECEC] rounded-md focus:outline-none'>
    {options?.map((option, i) => <option key={i} value={option?.value}>{option?.label}</option>)}
   </select>
    </>
  )
}

export default SelectField