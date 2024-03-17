import { Icon } from '@iconify/react'
import React from 'react'

const SearchField = () => {
  return (
    <main>
        <div className="flex w-full p-[0.8vw] bg-[#ECECEC] rounded-md">
        <input type="text" className='bg-inherit text-[1vw] border-none focus:outline-none' />
        <Icon icon="teenyicons:search-outline" className='text-[0.9vw] mt-[0.2vw] text-purple ml-auto' />
        </div>
    </main>
  )
}

export default SearchField