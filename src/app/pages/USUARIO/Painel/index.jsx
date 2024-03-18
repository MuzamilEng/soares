import React from 'react'
import Layout from '../../../Layout/Layout'

const UsarioPainel = () => {
  return (
    <Layout>
        <main className="flex w-full">
        <section className='mt-[1vw] relative flex items-center h-[14.5vw] justify-between w-full max-w-[60vw] border-[0.15vw] rounded-[1vw] border-[#6930C0]'>
          <div className="pt-[1vw] ml-[2vw]">
            <h1 className='text-[1.3vw]  font-black text-purple'>Bem Vindo de Volta, Bertrand Livreiros</h1>
            <p className='text-[1vw] w-full max-w-[37vw] font-black text-gray-400 mt-[1.2vw]'>Lorem ipsum dolor sit amet consectetur. Lacus aliquet pharetra nec quam orci proin commodo. Sit interdum</p>
          </div>
          <figure className='w-full absolute -top-[2vw] -right-[2vw] max-w-[30vw]'>
              <img src='/img/green_icon.png' className='w-full object-cover' alt='Voucher' />
            </figure>
        </section>
        <aside className='bg-[#ffff]'></aside>
        </main>
    </Layout>
  )
}

export default UsarioPainel