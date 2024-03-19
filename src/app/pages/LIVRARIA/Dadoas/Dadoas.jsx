import React from 'react'
import Layout from '../../../Layout/Layout'
import { dadoas_record } from '../../../data'
import MobileLayout from '../../../Layout/MobileLayout'

const Dadoas = () => {
let data = [
    {
        title:"Nome da Livraria:",
        info:"Livraria X"
    },
    {
        title:"Endereço:",
        info:"Rua Principal, 123"
    },
    {
        title:"Endereço:",
        info:"+351 123 456 789"
    },
    {
        title:"Endereço:",
        info:"+351 123 456 789"
    },
    {
        title:"Email",
        info:"info@livrariax.pt"
    },
   {
        title:"NIF",
        info:"123456789"
    }
]
  return (
    <>
        <Layout>
        <section className='w-full hidden md:block'>
            <div className="flex w-full max-w-[50vw] justify-between items-center">
            <h1 className='mt-[2.5vw] text-[2vw] text-[#4B4752] font-black'>Dados de Identificação</h1>
            <h1 className='mt-[2.5vw] text-[1vw] text-[#4B4752] font-black'>Editar Perfil</h1>
            </div>
        <article className='p-[1vw]'>
            {dadoas_record?.map((record, index)=> (
                <div className="text-[#4B4752] mt-[1.3vw]" key={index}>
                    <h2 className='font-semibold text-[1.2vw]'>{record?.title}</h2>
                    <h1 className='font-black text-[1.5vw]'>{record?.value}</h1>
                </div>
            ))}
        </article>
        </section>
        </Layout>

        <MobileLayout>
        <section className=' md:hidden  flex flex-col  '>
       <article className="mt-[10vw] px-[10vw]">
             <p className="text-[#4B4752] font-heavy w-full max-w-[50vw] text-[8vw]">Dados de Identificação</p>
            <div className='mt-[3vw] '>
           { data?.map((elem,index)=>(
            <div className="flex w-full max-w-[50vw] flex-col py-[2vw]" key={index}>
            <h1 className='mt-[2.5vw] text-[5vw] text-[#4B4752] font-heavy'>{elem?.title}</h1>
            <h1 className='mt-[2.5vw] text-[4vw] text-[##4B4752] font-md'>{elem?.info}</h1>
            </div>
            ))}
        </div>
         </article>
        <footer className='bg-[#6930C0] p-[5vw] mt-[6vw]  w-full'>
            <p className='text-center text-white '>Editar Perfil</p>
        </footer>
       </section>
        </MobileLayout>
        </>
  )
}


export default Dadoas