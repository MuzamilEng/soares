import React from 'react'
import Layout from '../../../Layout/Layout'
import { validaco_voucher } from '../../../data'
import Voucher from '../../../components/Card/Voucher'
import { Icon } from '@iconify/react'
import Paggination from '../../../components/Common/Paggination'
import SearchField from '../../../components/Common/SearchField'

const Validaco = () => {
  return (
    <Layout>
        <main className='w-full'>
        <h1 className='mt-[1vw] text-[2vw] text-[#4B4752] font-black'>Validação do Voucher</h1>
        <section className='w-full mt-[1vw] ml-auto max-w-[40vw]'>
       <div className="w-full max-w-[20vw]">
       <SearchField />
       </div>
        </section>
        <section className='w-full mt-[1.5vw]'>
            {validaco_voucher?.map((item, index)=> (
                <Voucher key={index} {...item} />
            ))}
        </section>
        <Paggination />
        </main>
    </Layout>
  )
}

export default Validaco