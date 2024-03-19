import React from 'react'
import Layout from '../../../Layout/Layout'
import { Icon } from '@iconify/react'
import Button from '../../../components/Common/Button'

const UsarioPainel = () => {
  return (
    <Layout>
        <main className="flex w-full">
       <article className='w-full max-w-[57vw]'>
       <section className='mt-[1vw] relative flex items-center h-[14.5vw] justify-between w-full border-[0.15vw] rounded-[1vw] border-[#6930C0]'>
          <div className="pt-[1vw] ml-[2vw]">
            <h1 className='text-[1.3vw] font-black text-purple'>Bem Vindo de Volta, Bertrand Livreiros</h1>
            <p className='text-[1vw] w-full max-w-[30vw] font-black text-gray-400 mt-[1.2vw]'>Lorem ipsum dolor sit amet consectetur. Lacus aliquet pharetra nec quam orci proin commodo. Sit interdum</p>
          </div>
          <figure className='w-full absolute -top-[2vw] -right-[2vw] max-w-[30vw]'>
              <img src='/img/green_icon.png' className='w-full object-cover' alt='Voucher' />
            </figure>
        </section>
        <aside className='w-full mt-[2vw] p-[1.5vw] flex items-start'>
          <section>
            <main className="w-full max-w-[30vw] p-[1.3vw] rounded-[1vw] bg-[#6930C0]">
              <div className="flex items-center w-full">
              <h2 className='text-[1vw] font-md text-[#ffff]'>Emitir Voucher:</h2>
              <p className='flex items-center text-[0.8vw] cursor-pointer text-[#80FFD8] border-[1px] font-md border-[#80FFD8] rounded-[1vw] p-[0.2vw] ml-[1.5vw]'>Descarregar em PDF <Icon className='text-[80FFD8] text-[1vw]' icon="fluent:document-pdf-24-regular" /></p>
              </div>
              <p className='text-[1vw] mt-[1vw] font-md text-[#ffff]'>Voucher Emitido Com Sucesso</p>
            </main>
            <div className="w-full row-center max-w-[30vw] mt-[1.5vw] p-[1.3vw] rounded-[1vw] bg-[#6930C0]">
            <h2 className='text-[1vw] font-md text-[#ffff]'>Emitir Voucher:</h2>
            <button className='text-[1vw] font-md bg-[#80FFD8] ml-[1.5vw] text-[#6930C0] p-[0.2vw] rounded-full w-full max-w-[9vw]'>Emitido</button>
            </div>
          </section>
          <section className='bg-[#fff] w-full max-w-[25vw] ml-[3vw] p-[1vw] rounded-[1vw]'>
            <h1 className='text-[1vw] font-black text-[#6930C0]'>Concessão de <br /> Autorização</h1>
            <p className='text-[1vw] font-md w-full max-w-[15vw] text-[#4B4752] mt-[1vw]'>Lorem ipsum dolor sit amet consectetur. Lacus aliquet pharetra nec quam orci proin commodo. Sit interdum</p>
            <button className='text-[1vw] font-md w-full border-[0.1vw] p-[0.9vw] border-[#000] hover:bg-gray-100 rounded-[0.3vw] text-start text-[#4B4752] mt-[1vw]'>Digite seu email</button>
            <Button title={'Conceder'}/>
          </section>
        </aside>
       </article>
        <aside className='bg-[#ffff]  h-screen -mt-[5vw] ml-auto w-full max-w-[20vw] p-[1vw]'>
        <section className='flex justify-between w-full pt-[1vw] max-w-[16vw] items-center'>
                <button className='text-[1vw] font-black text-main'>Logout</button>
                <Icon icon="tabler:logout" className='text-[1.5vw] cursor-pointer text-gray-600 ' />
            </section>
          <div className="w-full col-center">
          <figure className='w-full max-w-[10vw] rounded-full mt-[2vw]'>
            <img src="/img/user.png" alt="user" className='w-full' />
          </figure>
          <h1 className='text-[1.1vw] text-[#4B4752] font-black'>Diego Pina</h1>
          <button className='w-full max-w-[15vw] rounded-[1vw] p-[0.8vw] text-center text-[#80FFD8] bg-[#6930C0] mt-[1vw]'>Voucher Emitido</button>
          <h1 className='text-[1vw] mt-[1vw] text-[#4B4752] font-black'>Nascimento</h1>
          <p className='text-[#A5A4A4] text-[0.8vw] font-md'>06/05/1989</p>
          <h1 className='text-[1vw] mt-[2vw] text-[#4B4752] font-black'>Concelho</h1>
          <p className='text-[#A5A4A4] text-[0.8vw] font-md'>Lisboa</p>
          </div>
        </aside>
        </main>
    </Layout>
  )
}

export default UsarioPainel