import React from 'react'
import { Icon } from '@iconify/react'
import Progressbar from '../../../components/Progressbar/Progressbar'
import Button from '../../../components/Common/Button'
import SearchField from '../../../components/Common/SearchField'
import DgLayout from '../../../Layout/DgLayout'
import InfoScrollbar from '../../../components/InfoScrollbar'

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
   <DgLayout>
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
   </DgLayout>
  )
}

export default Validacao