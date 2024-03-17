import React from 'react'
import Layout from '../../../Layout/Layout'
import SearchField from '../../../components/Common/SearchField'

const Validar = () => {
  return (
    <Layout>
        <main className='w-full'>
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
  )
}


export default Validar