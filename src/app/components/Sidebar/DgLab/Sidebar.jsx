import React from 'react'
import { Link } from 'react-router-dom'
import { dg_sidebar } from '../../../data'

const Sidebar = () => {
  return (
    <aside className=' hidden md:block w-full max-w-[17vw] p-[1vw] h-screen bg-[#ffff]'>
    <main className='mx-[1vw] col-center'>
    <figure className='w-full max-w-[4vw] mt-[1vw]'>
      <img className='w-full h-full' src='/img/logo-p.png' alt='soares' />
    </figure>
    <section className='mt-[2vw]'>
        {dg_sidebar?.map((item, index) => (
            <Link to={item?.path} key={index} className='flex hover:bg-[#6930C0] transition-all duration-300 text-[#A5A4A4] rounded-md hover:text-white items-center p-[1vw]'>
                {item?.icon ? <span className='text-[0.9vw]'>{item?.icon}</span> :  <img className='w-[1vw] h-[1vw]' src={item?.img} alt={item?.name} />}
                <span className='ml-[1vw] text-[1vw] font-medium'>{item?.title}</span>
            </Link>
        ))}
    </section>
    </main>
  </aside> 
   )
}

export default Sidebar