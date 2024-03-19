import React from 'react'

const Button = ({title, onClick}) => {
  return (
    <button className='bg-[#6930C0] hover:bg-[#6a30c0de] text-[#ffff] p-[3vw] rounded-md font-bd mt-[4vw] text-center w-full' onClick={onClick}>{title}</button>
  )
}

export default Button