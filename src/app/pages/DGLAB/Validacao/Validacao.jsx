import React from 'react'
import { Icon } from '@iconify/react'
import Progressbar from '../../../components/Progressbar/Progressbar'
import Button from '../../../components/Common/Button'
import SearchField from '../../../components/Common/SearchField'
import DgLayout from '../../../Layout/DgLayout'
import InfoScrollbar from '../../../components/InfoScrollbar'
import DgMobileLayout from '../../../Layout/DgMobileLayout'

const Validacao = () => {
  const status = [
    {
      color: "#6930C0",
      title: "Aprovadas"
    },
    {
      color: "#4B4752",
      title: "Reprovadas"
    },
  ]

  return (
    <>
   <DgLayout>
    <section className='hidden md:block'>

    
          <h1 className='text-[1.5vw] mt-[2vw] text-[#4B4752] font-black'>Validação das Livrarias</h1>
    <section className='w-full grid grid-cols-2'>
        <InfoScrollbar title={'Livrarias Pendentes'}/>
        <InfoScrollbar title={'Ultimas Livrarias Registradas'} />
      </section>
        <footer className='mt-[2vw] w-full max-w-[50vw] p-[1vw]'>
            <h1 className='text-[1.5vw] text-[#4B4752] font-xl'>Nome da Livraria</h1>
            <input type="text" className='w-full p-[0.8vw] bg-[#ECECEC] rounded-md' placeholder='Lavirai Boardes' />
            <section className="flex justify-between w-full">
                <div className="w-full max-w-[23vw]"><Button title={'APROVAR'}/></div>
                <div className="w-full max-w-[23vw]"><Button title={'NÃO APROVAR'}/></div>
            </section>
        </footer>
        </section>
   </DgLayout>
    

    <DgMobileLayout>
      <section className='md:hidden pb-[5vw]'>
      <h1 className='mt-[20vw] ml-[9vw] text-[10vw] text-[#4B4752]  w-full max-w-[70vw]  font-bd'>Validação das Livrarias</h1>
     <aside className=' h-[30vw] w-full mt-[5vw]  max-w-[100vw] '>
      <p className='text-[#4B4752] text-[6vw] font-bd text-center'>Livrarias Pendentes</p>
      <main className='w-full   pt-[10vw] pb-[10vw] px-[10vw] flex flex-col  gap-[6vw] -ml-[2vw] h-[40vw] mt-[5vw] bg-[#FAFAFA]  overflow-y-scroll custom-scrollbar'>
        <p className='text-[3vw] mt-[1vw] font-bd text-[#4B4752]'>Livraria Bertrand</p>
        <p className='text-[3vw] mt-[1vw] font-bd text-[#4B4752]'>Livraria Ferin</p>
        <p className='text-[3vw] mt-[1vw] font-bd text-[#4B4752]'>Livraria Traga-Mundos</p>
        <p className='text-[3vw] mt-[1vw] font-bd text-[#4B4752]'>Livraria Lello & Irmão</p>
        <p className='text-[3vw] mt-[1vw] font-bd text-[#4B4752]'>Livraria Lello & Irmão</p>
        <p className='text-[3vw] mt-[1vw] font-bd text-[#4B4752]'>Livraria Lello & Irmão</p>
        <p className='text-[3vw] mt-[1vw] font-bd text-[#4B4752]'>Livraria Lello & Irmão</p>
        <p className='text-[3vw] mt-[1vw] font-bd text-[#4B4752]'>Livraria Lello & Irmão</p>
    </main>
     </aside>
    
     <aside className=' h-[30vw] w-full mt-[40vw]    max-w-[100vw] '>
      <p className='text-[#4B4752] text-[6vw] font-bd text-center'>Ultimas Livrarias Registradas</p>
      <main className='w-full   pt-[10vw] pb-[10vw] px-[10vw] flex flex-col  gap-[6vw] -ml-[2vw] h-[40vw] mt-[5vw] bg-[#FAFAFA]  overflow-y-scroll custom-scrollbar'>
        <p className='text-[3vw] mt-[1vw] font-bd text-[#4B4752]'>Livraria Bertrand</p>
        <p className='text-[3vw] mt-[1vw] font-bd text-[#4B4752]'>Livraria Ferin</p>
        <p className='text-[3vw] mt-[1vw] font-bd text-[#4B4752]'>Livraria Traga-Mundos</p>
        <p className='text-[3vw] mt-[1vw] font-bd text-[#4B4752]'>Livraria Lello & Irmão</p>
        <p className='text-[3vw] mt-[1vw] font-bd text-[#4B4752]'>Livraria Lello & Irmão</p>
        <p className='text-[3vw] mt-[1vw] font-bd text-[#4B4752]'>Livraria Lello & Irmão</p>
        <p className='text-[3vw] mt-[1vw] font-bd text-[#4B4752]'>Livraria Lello & Irmão</p>
        <p className='text-[3vw] mt-[1vw] font-bd text-[#4B4752]'>Livraria Lello & Irmão</p>
    </main>
     </aside>

     <footer className='mt-[35vw] w-full max-w-[80vw] m-auto p-[1vw]'>
            <h1 className='text-[5vw] text-[#4B4752] font-bd'>Nome da Livraria</h1>
            <input type="text" className='w-full p-[0.8vw] bg-[#ECECEC] rounded-md' placeholder='Lavirai Boardes' />
            <section className="flex flex-col w-full">
                <div className="w-full "><Button title={'APROVAR'}/></div>
                <div className="w-full "><Button title={'NÃO APROVAR'}/></div>
            </section>
        </footer>
      </section>
    </DgMobileLayout>
   </>

  )
}

export default Validacao