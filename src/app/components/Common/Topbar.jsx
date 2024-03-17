import { Icon } from '@iconify/react'
import React from 'react'

const Topbar = ({title, date, search}) => {
  return (
    <nav className='w-full p-[1vw]'>
        <div className="flex items-center w-full">
            <section className='w-full flex items-center justify-between max-w-[80vw]'>
                <h1 className='text-[2vw] text-black font-black'>{title}</h1>
                <div className="flex items-center">
                    <span className='text-main text-[1vw] font-black'>{date}</span>
                    <span className='bg-[#EBDFFF] p-[0.7vw] rounded-md ml-[0.7vw]'><Icon icon="iconamoon:search-light" className='text-[1.3vw] text-[#6930C0]' /></span>
                </div>
            </section>
            <section className='flex justify-between w-full max-w-[16vw] items- mr-[2vw] ml-[2vw]'>
                <button className='text-[1vw] font-black text-main'>Logout</button>
                <Icon icon="tabler:logout" className='text-[1.5vw] text-gray-600 ' />
            </section>
        </div>
    </nav>
  )
}

export default Topbar