import React from 'react'

const InfoScrollbar = ({title, data}) => {
  return (
    <div className="mt-[2vw]">
    <p className='text-[1.5vw] text-[#4B4752] font-black'>{title}</p>
    <aside className='w-full max-w-[30vw] bg-[#ECECEC] p-[2vw] rounded-[1vw]'>
    <main className='w-full p-[1.5vw] -ml-[2vw] h-[13vw] overflow-y-scroll custom-scrollbar'>
        <p className='text-[1.3vw] mt-[1vw] font-bd text-[#4B4752]'>Livraria Bertrand</p>
        <p className='text-[1.3vw] mt-[1vw] font-bd text-[#4B4752]'>Livraria Ferin</p>
        <p className='text-[1.3vw] mt-[1vw] font-bd text-[#4B4752]'>Livraria Traga-Mundos</p>
        <p className='text-[1.3vw] mt-[1vw] font-bd text-[#4B4752]'>Livraria Lello & Irmão</p>
        <p className='text-[1.3vw] mt-[1vw] font-bd text-[#4B4752]'>Livraria Lello & Irmão</p>
        <p className='text-[1.3vw] mt-[1vw] font-bd text-[#4B4752]'>Livraria Lello & Irmão</p>
        <p className='text-[1.3vw] mt-[1vw] font-bd text-[#4B4752]'>Livraria Lello & Irmão</p>
        <p className='text-[1.3vw] mt-[1vw] font-bd text-[#4B4752]'>Livraria Lello & Irmão</p>
    </main>
    </aside>
    </div>
  )
}

export default InfoScrollbar