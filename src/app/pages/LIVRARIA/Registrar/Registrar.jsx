import React from 'react'
import Layout from '../../../Layout/Layout'
import SearchField from '../../../components/Common/SearchField'
import { Icon } from '@iconify/react'

const Registrar = () => {
  return (
    <Layout>
        <main className="w-full p-[1vw]">
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
  )
}

export default Registrar