import React from 'react'
import Sidebar from '../../../components/Common/Sidebar'
import Topbar from '../../../components/Common/Topbar'
import { Icon } from '@iconify/react'
import Progressbar from '../../../components/Progressbar/Progressbar'
import Layout from '../../../Layout/Layout'

const Platform = () => {
  const status = [
    {
      color: "#6930C0",
      title: "Utilizado"
    },
    {
      color: "#4B4752",
      title: "Em Ánalise"
    },
    {
      color: "#366C45",
      title: "Validado"
    },{
      color: "#885EAF",
      title: "Não Validado"
    },{
      color: "#3F49B9",
      title: "Pago"
    }
  ]

  return (
   <Layout>
    <section className='w-full'>
        <article className='w-full mt-[1vw] ml-[1vw]'>
        <div className="flex items-center">
        <Icon icon="teenyicons:user-circle-outline" className='text-[1vw] text-black font-medium' />
        <span className='text-[1vw] ml-[1vw] font-medium'>Gestor</span>
        </div>
        <section className='mt-[2vw] relative flex items-center h-[14.5vw] justify-between w-full max-w-[60vw] border-[0.15vw] rounded-[1vw] border-[#6930C0]'>
          <div className="pt-[1vw] ml-[2vw]">
            <h1 className='text-[1.7vw]  font-black text-purple'>Bem Vindo de Volta, Bertrand Livreiros</h1>
            <p className='text-[1.2vw] w-full max-w-[37vw] font-black text-gray-400 mt-[1.2vw]'>Lorem ipsum dolor sit amet consectetur. Lacus aliquet pharetra nec quam orci proin commodo. Sit interdum</p>
          </div>
          <figure className='w-full absolute top-2 right-0 max-w-[20vw]'>
              <img src='/img/books.png' className='w-full object-cover' alt='Voucher' />
            </figure>
            <figure className='w-full max-w-[20vw]'>
              <img src='/img/reactangle.png' className='w-full object-cover' alt='Voucher' />
            </figure>
        </section>
        </article>
        <aside className='w-full mt-[2vw] max-w-[45vw] bg-[#ffff] p-[2vw] rounded-[1vw]'>
          <p className='text-[1.5vw] font-black'>Estado atual dos <br /> Vouchers</p>
          <section className="flex mt-[2vw] items-start">
           <div className="flex items-center w-full max-w-[23vw] justify-evenly">
           <Progressbar percent_count={75} color={'#6930C0'}/>
            <Progressbar percent_count={10} color={'#4B4752'}/>
            <Progressbar percent_count={60} color={'#366C45'}/>
            <Progressbar percent_count={30} color={'#885EAF'}/>
            <Progressbar percent_count={92} color={'#3F49B9'}/>
           </div>
           <div className="ml-[2vw] -mt-[0.5vw]">
            {status?.map((item, index)=> (
              <div key={index} className="flex items-center m-[1.1vw]">
                <Icon style={{color: item?.color}} icon="octicon:dot-fill-24" className='text-[2vw]' />
                <span className='ml-[1vw] text-[1.3vw] text-[#4B4752] font-black'>{item?.title}</span>
              </div>
            ))}
           </div>
          </section>
        </aside>
      </section>
   </Layout>
  )
}

export default Platform