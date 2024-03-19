import React from 'react'
import Layout from '../../../Layout/Layout'
import { Icon, InlineIcon } from '@iconify/react'
import Button from '../../../components/Common/Button'
import MobileLayout from '../../../Layout/MobileLayout'

const Pogamento = () => {
    const fields = [
        {label: 'N° do Voucher', name: "voucher"},
        {label: 'NIF', name: "nif"},
        {label: 'ISBN(s)', name: "isbns"},
        {label: 'N° da Fatura', name: "fatura"},
    ]
  return (
    <>
    <Layout>
        <main className="w-full p-[1vw] hidden md:block">
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

    <MobileLayout>
        <section className='md:hidden ml-[10vw] relative  items-center pb-[10vw] '>
        <h1 className="text-[#4B4752] text-[8vw] font-bd  mt-[15vw] w-full max-w-[50vw]">Pagamento do Voucher</h1>


        <form className='relative w-full  mt-[8vw] px-[10vw] flex flex-col ml-[-10vw]  gap-[10vw]'>
            <div className='flex flex-col gap-[3.5vw] w-full'>

    <label htmlFor="search" className='font-bd text-[5vw]'>N° do Voucher</label>
<input type="text" name="search" className="w-full  p-[1.5vw]  text-black font-md bg-[#ECECEC]  outline-none text-[4.5vw]" />
            </div>
 <div className='flex flex-col gap-[3.5vw]'>
 <label htmlFor="search" className='font-bd text-[5vw]'>NIF</label>
<input type="text" name="search" className="w-full  p-[1.5vw] text-black font-md bg-[#ECECEC]  outline-none text-[4.5vw]" />
 </div>

 <div className='flex flex-col gap-[3.5vw]'>
 <label htmlFor="search" className='font-bd text-[5vw]'>ISBN(s)</label>
<input type="text" name="search" className="w-full  p-[1.5vw] text-black font-md bg-[#ECECEC]  outline-none text-[4.5vw]" />
 </div>
 <div className='flex flex-col gap-[3.5vw]'>
 <label htmlFor="search" className='font-bd text-[5vw]'>N° da Fatura</label>
<input type="text" name="search" className="w-full  p-[1.5vw] text-black font-md bg-[#ECECEC]  outline-none text-[4.5vw]" />
 </div>
</form>   


<section className=' py-[5vw] px-[10vw] mt-[9vw] border-dashed border-[3px] border-black rounded-md w-full  max-w-[70vw] flex justify-around   gap-[5vw] flex-col items-center'>
        <Icon icon="icon-park-outline:upload-two" className='text-[10vw]' />
        <div className="text-center">
        <h1 className="text-[4vw] text-[#4B4752] font-bd"> Upload da Fatura </h1>
        <p className="text-[3.5vw] text-[#4B4752] font-md"> <span className='text-[#6930C0]'>Arraste</span> seu arquivo aqui </p>
        <p className="text-[2.5vw] text-[#4B4752] font-md"><span className='text-[#6930C0]'>ou selecione um</span> arquivo do seu computador  </p>
        </div>
        </section>

        <div className="w-full max-w-[70vw] ">
        <Button title={'ENVIAR'}/>
        </div>
        </section>
    </MobileLayout>
    </>

  )
}


export default Pogamento