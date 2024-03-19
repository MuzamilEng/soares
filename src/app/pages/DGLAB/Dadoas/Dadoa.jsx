import React from 'react'
import { dadoas_record } from '../../../data'
import DgLayout from '../../../Layout/DgLayout'
import DgMobileLayout from '../../../Layout/DgMobileLayout'

const Dadoa = () => {

  return (
    <>
        <DgLayout>
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
        </DgLayout>

        <DgMobileLayout>
            <section className='w-full md:hidden'>
            
            </section>
        </DgMobileLayout>
    </>
    

  )
}


export default Dadoa