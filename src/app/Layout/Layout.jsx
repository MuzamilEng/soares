import React from 'react'
import Sidebar from '../components/Common/Sidebar'
import Topbar from '../components/Common/Topbar'

const Layout = ({children}) => {

  return (
    <main className='w-full flex relative bg-[#f5f5f5] h-screen overflow-x-hidden'>
      <section className='fixed'>
        <Sidebar />
      </section>
      <section className='w-full ml-[20vw] flex flex-col'>
      <Topbar title={'Painel'} date={'8, March 2024'} />
        {children}
      </section>
    </main>
  )
}

export default Layout