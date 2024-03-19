import React from 'react'
import Layout from '../../../Layout/Layout'
import SearchField from '../../../components/Common/SearchField'
import MobileLayout from '../../../Layout/MobileLayout'
import { Icon } from '@iconify/react'

const Validar = () => {
  return (
    <>
    <Layout>
        <main className='w-full hidden md:block'>
        <h1 className='mt-[1vw] text-[2vw] text-[#4B4752] font-black'>Validação de Livro</h1>
        <h1 className='mt-[1vw] text-[1.2vw] text-[#4B4752] font-black'>Buscar por eligibilidade do livro</h1>
        <section className='flex items-center w-full'>
        <h1 className='mt-[1vw] text-[1vw] text-[#4B4752] font-black'>ISBN:</h1>
        <div className="w-full max-w-[16.5vw] mt-[1vw] ml-[1vw]">
        <SearchField />
        </div>
        </section>
        <h1 className='mt-[2vw] font-black text-[1vw]'>1 Resultado encontrado</h1>
        <article className='w-full mt-[1vw] max-w-[60vw]'>
          <section className="col-center">
            <div className="w-full rounded-[1.3vw] border-[0.1vw] border-black p-[1vw] flex justify-evenly items-center">
              <h1 className='text-[1vw] font-black'>9789898975683</h1>
              <section className='w-full max-w-[25vw]'>
                <h1 className='text-[1vw] font-black'>Durante a Queda Aprendi a Voar</h1>
                <h1 className='text-[1vw] mt-[0.5vw] font-bd'>Raul Minh`Alma</h1>
                <h1 className='text-[1vw] mt-[2vw] font-bd'>Manuscrito Editora</h1>
              </section>
              <button className='text-[#80FFD8] bg-[#6930C0] p-[0.7vw] font-bd rounded-[1.2vw] text-center w-full max-w-[11vw]'>Elegível</button>
            </div>
          <h1 className='mt-[2vw] font-black text-[1vw]'>Não encontrou o que estava buscando?</h1>
          </section>
        </article>
        </main>
    </Layout>

    <MobileLayout>
      <section className='w-full md:hidden ml-[9.5vw]'>
      <h1 className='mt-[20vw] text-[10vw] text-[#4B4752]  w-full max-w-[70vw] font-bd'>Validação de Livro</h1>
      <p className="text-[#4B4752] font-bd text-[4.5vw] mt-[4vw]">Buscar por eligibilidade do livro</p>
      <form className='relative w-full max-w-[100vw] mt-[8vw] px-[10vw] flex ml-[-10vw] items-center gap-[2vw]'>
    <label htmlFor="search" className='font-bd text-[5vw]'>ISBN:</label>
<input type="text" name="search" className="w-full  p-[1.5vw] bg-[#ECECEC] ml-[1vw] outline-none text-[4.5vw]" />
<div className="absolute right-[10vw] top-[3vw]">
<Icon icon="ic:baseline-search" className='text-black text-[9vw]  mt-[-2vw]' />
</div>
</form>
<p className='text-[#4B4752] font-bd text-[5vw] mt-[15vw]'>Durante a Queda Aprendi a Voar</p>
<p className="text-[#4B4752] text-[4vw]  font-md mt-[2vw]">Raul Minh`Alma</p>
<p className='text-[#4B4752] text-[3.5vw] font-md mt-[2vw]'>9789898975683</p>
<p className='text-[#4B4752] text-[3.5vw] font-md mt-[2vw]'>Manuscrito Editora</p>
<button className='text-[#80FFD8] bg-[#6930C0] px-[5vw] py-[1vw] mt-[3vw] font-bd rounded-[1.2vw] text-center w-full max-w-[30vw]'>Elegível</button>
<p className='text-[#4B4752] ml-[20vw] mt-[10vw] font-md text-[3vw] '>1 Resultado encontrado</p>
      </section>
    </MobileLayout>
    </>

  )
}


export default Validar