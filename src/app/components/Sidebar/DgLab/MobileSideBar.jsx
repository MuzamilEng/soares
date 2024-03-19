import { Icon } from "@iconify/react"
import { useGlobalState } from "../../../../context/GlobalStateProvider"
import { dg_sidebar } from "../../../data"
import { Link } from "react-router-dom"

const MobileDgSidebar = () => {
    const {setMenueBar,setHamburger}= useGlobalState()
    function toggleMenueBar (){
        setMenueBar(false)
        setHamburger(true)
    }
    return (
      <aside className='absolute right-0   z-10   max-w-[50vw] p-[1vw] h-[100vh] md:hidden  bg-[#6930C0]'>
      <main className='mx-[1vw] col-center'>
      <figure className='w-full mt-[7vw] ml-[60vw]' onClick={toggleMenueBar}>
    <Icon icon="gridicons:cross"  className='text-white text-[8vw]' />
    </figure>
    <section className='mt-[10vw]'>
        {dg_sidebar?.map((item, index) => (
            <Link to={item?.path} key={index} className='flex  transition-all duration-300 text-[#A5A4A4] rounded-md  items-center py-[5.5vw] ml-[2vw]'>
                {item?.icon ? <span className='text-[6vw] text-[#FFFFFF]'>{item?.icon}</span> :  <img className='w-[5vw] h-[5vw] bg-white' src={item?.img} alt={item?.name} />}
                <span className='ml-[3vw] text-[3vw] font-heavy text-[#FFFFFF]'>{item?.title}</span>
            </Link>
        ))}
    </section>
      </main>
    </aside> 
     )
  }
  export default MobileDgSidebar