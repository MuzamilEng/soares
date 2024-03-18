import React from 'react'
import Layout from '../../../Layout/Layout'
import { Icon } from '@iconify/react'
import Button from '../../../components/Common/Button'

const Pogamento = () => {
    const fields = [
        {label: 'N° do Voucher', name: "voucher"},
        {label: 'NIF', name: "nif"},
        {label: 'ISBN(s)', name: "isbns"},
        {label: 'N° da Fatura', name: "fatura"},
    ]
  return (
    <Layout>
        <main className="w-full p-[1vw]">
        <h1 className="mt-[1vw] text-[2vw] text-[#4B4752] font-black"> Pagamento do Voucher </h1>
        <div className="grid grid-cols-2 gap-[1vw] w-full max-w-[55vw]">
            {fields?.map((item, index)=> {
                return (
                    <div key={index}>
                        <label className="text-[#4B4752] text-[1.2vw] font-xl"> {item?.label} </label> <br />
                        <input type="text" name={item?.name} className="w-[25vw] mt-[0.7vw] bg-[#ECECEC] focus:outline-none rounded-[0.5vw] p-[1vw]" />
                    </div>
                )
            })}
        </div>
        <section className='p-[1.5vw] mt-[2vw] border-dashed border-[1px] border-black rounded-md w-full max-w-[55vw] flex justify-around items-center'>
        <Icon icon="icon-park-outline:upload-two" className='text-[5vw]' />
        <div className="">
        <h1 className="text-[2vw] text-[#4B4752] font-bd"> Upload da Fatura </h1>
        <p className="text-[1.3vw] text-[#4B4752] font-md"> <span className='text-[#6930C0]'>Arraste</span> seu arquivo aqui </p>
        <p className="text-[1.3vw] text-[#4B4752] font-md"><span className='text-[#6930C0]'>ou selecione um</span> arquivo do seu computador  </p>
        </div>
        </section>
        <div className="w-full max-w-[25vw]">
        <Button title={'ENVIAR'}/>
        </div>
        </main>
    </Layout>
  )
}


export default Pogamento