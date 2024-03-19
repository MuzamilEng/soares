import React from "react";
import Layout from "../../../Layout/Layout";
import SearchField from "../../../components/Common/SearchField";
import { dadoas_record } from "../../../data";
import MobileLayout from "../../../Layout/MobileLayout";
import { Icon } from "@iconify/react";

const VoucherDetails = () => {
  return (
    <>
    <Layout>
      <main className="w-full hidden md:block">
        <h1 className="mt-[1vw] text-[2vw] text-[#4B4752] font-black">
          Verificação do Voucher
        </h1>
        <section className="flex items-center w-full">
          <div className="">
            <h1 className="mt-[1vw] ml-[1vw] text-[1vw] text-[#4B4752] font-black">
              ID do Voucher
            </h1>
            <div className="w-full max-w-[16.5vw] mt-[1vw] ml-[1vw]">
              <SearchField />
            </div>
          </div>
          <p className="font-bd mt-[4vw] text-[1.2vw] mx-[2vw]">OU</p>
            <div className="">
              <h1 className="mt-[1vw] ml-[1vw] text-[1vw] text-[#4B4752] font-black">
                Nome Impresso no Voucher
              </h1>
              <div className="w-full max-w-[16.5vw] mt-[1vw] ml-[1vw]">
                <SearchField />
              </div>
            </div>
        </section>
        <article className='p-[1vw]'>
            {dadoas_record?.map((record, index)=> (
                <div className="text-[#4B4752] mt-[1.3vw]" key={index}>
                    <h2 className='font-semibold text-[1.2vw]'>{record?.title}</h2>
                    <h1 className='font-black text-[1.5vw]'>{record?.value}</h1>
                </div>
            ))}
            <h1 className="mt-[1vw] text-[1.2vw] text-[#4B4752] font-black">Status do Voucher</h1>
            <button className='text-[#80FFD8] bg-[#6930C0] p-[0.7vw] font-bd rounded-[1.2vw] text-center w-full max-w-[11vw]'>Voucher Emitido</button>
        </article>
      </main>
    </Layout>


    <MobileLayout>
      <section className='w-full md:hidden ml-[9.5vw] pb-[8vw]'>
      <h1 className='mt-[20vw] text-[10vw] text-[#4B4752]  w-full max-w-[60vw] font-bd'>Verificação do Voucher</h1>
      <p className="text-[#4B4752] font-bd text-[4.5vw] mt-[4vw]">Buscar por eligibilidade do livro</p>
      <form className='relative w-full max-w-[100vw] mt-[8vw] px-[10vw] flex ml-[-10vw] flex-col  gap-[2vw]'>
    <label htmlFor="search" className='font-bd text-[4vw]'>ID do Voucher</label>
<input type="text" name="search" className="w-full  p-[1.5vw] bg-[#ECECEC] ml-[1vw] outline-none text-[4.5vw]" />
    <label htmlFor="search" className='font-bd text-[4vw]'>Nome Impresso no Voucher</label>
<input type="text" name="search" className="w-full  p-[1.5vw] bg-[#ECECEC] ml-[1vw] outline-none text-[4.5vw]" />
<div className="absolute right-[10vw] top-[12vw]">
<Icon icon="ic:baseline-search" className='text-[#6930C0] text-[9vw]  mt-[-4vw]' />
<Icon icon="ic:baseline-search" className='text-[#6930C0] text-[9vw]  mt-[12vw]' />
</div>
</form>


<article className=' mt-[4vw]'>
            {dadoas_record?.map((record, index)=> (
                <div className="text-[#4B4752] mt-[1.3vw] p-[3vw]" key={index}>
                    <h2 className='font-bd text-[3.5vw]'>{record?.title}</h2>
                    <h1 className='font-black text-[3vw]'>{record?.value}</h1>
                </div>
            ))}
            <h1 className="mt-[1vw] text-[3vw] text-[#4B4752] font-black">Status do Voucher</h1>
            <button className='text-[#80FFD8] mt-[5vw] bg-[#6930C0] p-[1vw] font-bd rounded-[1.2vw] text-center w-full max-w-[50vw]'>Voucher Emitido</button>
        </article>
      </section>
    </MobileLayout>
    </>

  );
};

export default VoucherDetails;
