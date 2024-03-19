import { Icon } from '@iconify/react'
import React from 'react'

const SearchField = () => {
  return (
    <main>
        <div className="flex w-full p-[3vw] bg-[#ECECEC] rounded-md">
        <input type="text" className='bg-inherit text-[2.5vw] border-none focus:outline-none' />
        <Icon icon="teenyicons:search-outline" className='text-[3vw] mt-[0.2vw] text-purple ml-auto' />
        </div>
    </main>
  )
}

export default SearchField