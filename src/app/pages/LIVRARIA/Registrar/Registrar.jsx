import React from 'react'
import Layout from '../../../Layout/Layout'
import { Icon, InlineIcon } from '@iconify/react'
import MobileLayout from '../../../Layout/MobileLayout'

const Registrar = () => {
  return (
    <>
    <Layout>
        <main className="w-full p-[1vw] hidden md:block">
        <h1 className="mt-[1vw] text-[2vw] text-[#4B4752] font-black"> Registrar Voucher </h1>
        <section className="">
         <h1 className="mt-[1vw] text-[1vw] text-[#4B4752] font-bd"> ID do Voucher </h1>
         <div className="flex w-full max-w-[20vw] bg-[#6930C0] p-[0.8vw] rounded-md">
        <input type="text" className='bg-inherit text-[#ffff] text-[1vw] border-none focus:outline-none' />
        <Icon icon="teenyicons:search-outline" className='text-[0.9vw] mt-[0.2vw] text-[#ECECEC] ml-auto' />
        </div>
        </section>
        <article className='flex items-center -ml-[3vw] mt-[2vw] justify-evenly w-full max-w-[40vw]'>
            <section className='font-bd text-[#4B4752] text-[1.3vw]'>
                <h1>Nome</h1> <br />
                <p>Diego Pina de Sá</p>
            </section>
            <section className='font-bd text-[#4B4752] text-[1.3vw]'>
                <h1>ID</h1> <br />
                <p>874d2093g</p>
            </section>
            <section className='font-bd text-[#4B4752] text-[1.3vw]'>
                <h1>Status</h1> <br />
                <p className='bg-[#4B4752] text-[#80FFD8] text-center rounded-full p-[0.4vw]'>Não Utilizado</p>
            </section>
        </article>
        </main>
    </Layout>

    <MobileLayout>
    <section className='md:hidden ml-[9vw] relative'>
        <h1 className="text-[#4B4752] text-[8vw] font-bd  mt-[15vw] w-full max-w-[50vw]">Submissão do Voucher</h1>
        <form className='relative w-full max-w-[100vw] mt-[8vw] px-[10vw] flex flex-col ml-[-10vw]  gap-[2vw]'>
        <label htmlFor="search" className='font-bd text-[5vw]'>ID do Voucher</label>
        <input type="text" name="search" className="w-full  p-[1.5vw] text-white font-bd bg-[#6930C0]  outline-none text-[4.5vw]" />
        <div className="absolute right-[10vw] top-[12vw]">
        <InlineIcon icon="ic:baseline-search" className='text-white text-[9vw]  mt-[-2vw]' />
        </div>
        </form>
        <div className='flex flex-col mt-[15vw] gap-[15vw]'>
            <div className='flex flex-col gap-[1vw]'>
            <h2 className="text-[#4B4752] font-bd text-[4vw]">Nome</h2>
            <p className='text-[#4B4752] text-[3.5vw] font-bd'>Diego Pina de Sá</p>
            </div>
            <div className='flex flex-col gap-[1vw]'>
            <h2 className="text-[#4B4752] font-bd text-[4vw]">ID</h2>
            <p className='text-[#4B4752] text-[3.5vw] font-bd'>874d2093g</p>
            </div>
            <div className=''>
            <h2 className="text-[#4B4752] font-bd text-[4vw]">Status</h2>
            <button className='text-[#80FFD8] text-[3.5vw] font-bd mt-[3vw] rounded-full bg-[#4B4752] px-[16vw] py-[2vw]'>874d2093g</button>
            </div>
        </div>
    </section> 
    </MobileLayout>

    </>

  )
}

export default Registrar