import React from 'react'
import { Icon } from '@iconify/react'
import Progressbar from '../../../components/Progressbar/Progressbar'
import Button from '../../../components/Common/Button'
import SearchField from '../../../components/Common/SearchField'
import DgLayout from '../../../Layout/DgLayout'

const Painel = () => {
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
   <DgLayout>
    <section className='w-full grid grid-cols-2'>
        <aside className='w-full mt-[2vw] max-w-[30vw] bg-[#ffff] p-[2vw] rounded-[1vw]'>
          <p className='text-[1.5vw] font-black'>Aprovação das Livrarias  <br /> Aderentes</p>
          <section className="flex mt-[2vw] items-center">
           <div className="flex items-center justify-evenly">
           <Progressbar percent_count={75} color={'#6930C0'}/>
            <Progressbar percent_count={10} color={'#4B4752'}/>
           </div>
           <div className="ml-[1vw] -mt-[0.5vw]">
            {status?.map((item, index)=> (
              <div key={index} className="flex items-center m-[1.1vw]">
                <Icon style={{color: item?.color}} icon="octicon:dot-fill-24" className='text-[2vw]' />
                <span className='ml-[1vw] text-[1.3vw] text-[#4B4752] font-bd'>{item?.title}</span>
              </div>
            ))}
           </div>
          </section>
        </aside>
        <aside className='w-full mt-[2vw] max-w-[30vw] bg-[#ffff] p-[2vw] rounded-[1vw]'>
        <p className='text-[1.5vw] font-black'>Livrarias</p>
        <main className='w-full p-[2vw] -ml-[2vw] h-[20vw] overflow-y-scroll custom-scrollbar'>
            <p className='text-[1.3vw] mt-[1vw] font-bd text-[#4B4752]'>Livraria Bertrand</p>
            <p className='text-[1.3vw] mt-[1vw] font-bd text-[#4B4752]'>Livraria Ferin</p>
            <p className='text-[1.3vw] mt-[1vw] font-bd text-[#4B4752]'>Livraria Traga-Mundos</p>
            <p className='text-[1.3vw] mt-[1vw] font-bd text-[#4B4752]'>Livraria Lello & Irmão</p>
            <p className='text-[1.3vw] mt-[1vw] font-bd text-[#4B4752]'>Livraria Lello & Irmão</p>
            <p className='text-[1.3vw] mt-[1vw] font-bd text-[#4B4752]'>Livraria Lello & Irmão</p>
            <p className='text-[1.3vw] mt-[1vw] font-bd text-[#4B4752]'>Livraria Lello & Irmão</p>
            <p className='text-[1.3vw] mt-[1vw] font-bd text-[#4B4752]'>Livraria Lello & Irmão</p>
        </main>
        <div className="w-full max-w-[25vw]"><Button title={'Ver Todas'}/></div>
        </aside>
        <aside className='w-full mt-[2vw] max-w-[30vw] bg-[#ffff] p-[2vw] rounded-[1vw]'>
            <p className='text-[1.5vw] font-black'>Consulta de <br />Livrarias</p>
            <div className="mt-[1vw] w-full max-w-[25vw]">
                <SearchField />
                <Button title={'Consultar'}/>
            </div>
        </aside>
        <aside className='w-full mt-[2vw] max-w-[30vw] bg-[#ffff] p-[2vw] rounded-[1vw]'>
            <p className='text-[1.5vw] font-black'>Consulta de <br />Vouchers</p>
            <div className="mt-[1vw] w-full max-w-[25vw]">
                <SearchField />
                <Button title={'Consultar'}/>
            </div>
        </aside>
      </section>
   </DgLayout>
  )
}

export default Painel