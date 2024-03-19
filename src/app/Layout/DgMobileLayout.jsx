import React from 'react'
import { useGlobalContext } from '../context/GlobalStateProvider'
import MobileDgSidebar from '../components/Sidebar/DgLab/MobileSideBar'
import { Icon } from '@iconify/react'


const DgMobileLayout = ({children}) => {
  const {menueBar,hamburger,setHamburger,setMenueBar} = useGlobalContext()
  const toggleMenue =()=>{
    setMenueBar(true)
    setHamburger(false)
  }
  return (
    <main className=' relative z-10 h-[100vh] md:hidden  overflow-x-hidden'>
    {menueBar? <MobileDgSidebar/> : <></> }
    <article className='w-full h-[10vh]  flex justify-center gap-[55vw] items-center'>
    <figure className="w-full max-w-[17vw] flex items-center mt-[20vw]">
      <img src="/img/logo-p.png" alt="book logo" className="w-full object-cover" />
    </figure>
    {hamburger? <div className="w-full max-w-[8vw] mt-[20vw]" onClick={toggleMenue}>
    <Icon icon="mingcute:menu-fill" className="text-[6vw]" />
    </div>:<></>
    }
   </article>
   <div className=''>
    {children}
    </div>
    </main>
  )
}

export default DgMobileLayout
