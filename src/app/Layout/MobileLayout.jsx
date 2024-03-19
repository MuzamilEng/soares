import React from 'react'
import MobileSidebar from '../components/Sidebar/Lavaria/MobileSidebar'
import { useGlobalContext } from '../context/GlobalStateProvider'
import { Icon } from '@iconify/react'

const MobileLayout = ({children}) => {
  const {menueBar,hamburger,setHamburger,setMenueBar} = useGlobalContext()
  const toggleMenue =()=>{
    setMenueBar(true)
    setHamburger(false)
  }
  return (
    <main className=' relative z-10 h-[100vh] md:hidden  overflow-x-hidden'>
      { menueBar? <MobileSidebar/> : <></>}
     <article className='w-full h-[10vh] flex justify-center gap-[55vw] items-center'>
    <div className="w-full max-w-[17vw] flex items-center mt-[20vw]">
      <img src="/img/logo-p.png" alt="book logo" className="w-full object-cover" />
    </div>
    { hamburger? <div className="w-full max-w-[8vw] mt-[20vw]" onClick={toggleMenue}>
    <Icon icon="mingcute:menu-fill" className="text-[6vw]" />
    </div>:<></>
    }
   </article>
      {children}
    </main>
  )
}

export default MobileLayout
