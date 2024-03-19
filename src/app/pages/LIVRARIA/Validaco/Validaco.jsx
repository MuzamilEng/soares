import React from 'react'
import Layout from '../../../Layout/Layout'
import { validaco_voucher } from '../../../data'
import Voucher from '../../../components/Card/Voucher'
import Paggination from '../../../components/Common/Paggination'
import SearchField from '../../../components/Common/SearchField'
import MobileLayout from '../../../Layout/MobileLayout'

const Validaco = () => {
  return (
    <>
    <Layout>
        <main className='w-full hidden md:block'>
        <h1 className='mt-[1vw] text-[2vw] text-[#4B4752] font-black'>Validação do Voucher</h1>
        <section className='w-full mt-[1vw] ml-auto max-w-[40vw]'>
       <div className="w-full max-w-[20vw]">
       <SearchField />
       </div>
        </section>
        <section className='w-full mt-[1.5vw]'>
            {validaco_voucher?.map((item, index)=> (
              <Voucher key={index} {...item} />
              ))}
        </section>
        <Paggination />
        </main>
    </Layout>

    <MobileLayout>
     <section className='md:hidden flex flex-col '>
      <article className='ml-[9.5vw]'>
     <h1 className="text-[#4B4752] text-[9vw] font-extrabold  mt-[15vw] w-full max-w-[60vw]">Validação do Voucher</h1>
     <form className='relative w-full max-w-[80vw] mt-[5vw]'>
      <SearchField />
     </form>
      </article>
     <div className='mt-[8vw]'>
      { validaco_voucher?.map((elem,index)=>(
          <div className="bg-[#6930C0] border-b-[2px] w-full border-b-white py-[9vw] flex items-center gap-[9vw] px-[9vw]">
            <div className='mt-[3.5vw]'>
              <h1 className='text-white font-bd text-[4vw]'>{elem.title}</h1>
              <p className='text-white  mt-[3.5vw] text-[3.5vw]'>{elem.date}</p>
            </div>
            <div className='w-full max-w-[35vw]'>
            <button className={`ml-[2vw] w-full ${elem.text_color} ${elem.button_bg} w-full  rounded-[2vw] text-[3vw] font-black text-center border-[0.1vw] py-[1vw] px-[5vw]`}>{elem.status}</button>
            </div>
          </div>
        ))}
     </div>
     </section>
    </MobileLayout>
  </>
  )
}

export default Validaco