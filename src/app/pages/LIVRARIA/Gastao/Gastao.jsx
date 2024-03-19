import React from 'react'
import Layout from '../../../Layout/Layout'
import MobileLayout from '../../../Layout/MobileLayout'
import { Icon } from '@iconify/react'

const Gastao = () => {
  return (
    <>
        <Layout>
        <section className='w-full hidden md:block'>
        <h1 className='mt-[2.5vw] text-[2vw] text-[#4B4752] font-black'>Gestão de Perfil</h1>
        </section>
        </Layout>
        <MobileLayout>
      <section className=' md:hidden  flex flex-col  px-[10vw]'>
      <article className="mt-[20vw]">
        <div className="flex w-full items-center gap-[2vw]">
          <p className='font-heavy text-[3vw]'>Gestão de Perfil</p>
          </div>
          <div className="mt-[20vw]">
            <p className="text-[#6930C0] font-heavy w-full max-w-[50vw] text-[4.5vw] ">Bem Vindo de Volta, Bertrand Livreiros</p>
            <p className="text-[#4B4752] font-md text-[4vw] mt-[15vw]">Lorem ipsum dolor sit amet consectetur. Lacus aliquet pharetra nec quam orci proin commodo. Sit interdum</p>
          </div>
        </article>
      </section>
      </MobileLayout>
    </>

  )
}

export default Gastao