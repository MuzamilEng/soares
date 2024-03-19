import React from "react";
import SearchField from "../../../components/Common/SearchField";
import {  dadoas_record, relatorioLaviria } from "../../../data";
import Paggination from "../../../components/Common/Paggination";
import DgLayout from "../../../Layout/DgLayout";
import DgMobileLayout from "../../../Layout/DgMobileLayout";

const RelatriaoLaviria = () => {
  return (
    <>
    <DgLayout>
        <main className='w-full'>
        <h1 className='mt-[1vw] text-[2vw] text-[#4B4752] font-black'>Relatório de Livraria</h1>
        <section className='w-full mt-[1vw] max-w-[40vw]'>
       <div className="w-full max-w-[20vw]">
       <SearchField />
       </div>
        </section>
        <div className="flex ml-[2vw] mt-[2vw] justify-between items-center w-full max-w-[40vw]">
            <section className="flex items-center justify-between w-full max-w-[15vw]">
                <h1 className="text-[1.3vw] text-[#4B4752] font-black">ID</h1>
                <h1 className="text-[1.3vw] text-[#4B4752] font-black">Livraria</h1>
            </section>
        </div>
        <section className='w-full mt-[0.5vw]'>
            {relatorioLaviria?.map((item, index)=> (
                   <main key={index} className='p-[0.5vw] m-[0.5vw] rounded-[2vw] w-full max-w-[60vw] bg-[#6930C0] flex items-center justify-between'>
                   <section className='w-full max-w-[40vw] flex items-center'>
                   <h1 className='text-[#fff] ml-[1vw] text-[1vw] font-black border-r-[0.1vw] border-white pr-[1vw]'>{item?.id}</h1>
                       <h1 className='text-[#fff] ml-[1vw] text-[1vw] font-black'>{item?.title}</h1>
                   </section>
                   <section className='row-center w-full'>
                   <button className={`ml-auto w-full max-w-[12vw] bg-[#80FFD8] text-[#6930C0] rounded-[2vw] p-[0.2vw] text-[1vw] font-black text-center border-[0.1vw]`}>{item?.status}</button>
                   </section>
               </main>
            ))}
        </section>
        </main>
    </DgLayout>

    <DgMobileLayout>
      <section className='w-full md:hidden ml-[9.5vw] pb-[8vw]'>
      <h1 className='mt-[20vw] text-[10vw] text-[#4B4752]  w-full max-w-[60vw] font-bd'>Relatório de Voucher</h1>
      <p className="text-[#4B4752] font-bd text-[4.5vw] mt-[4vw]">Buscar por eligibilidade do livro</p>
      <form className='relative w-full max-w-[100vw] mt-[8vw] px-[10vw] flex ml-[-10vw] flex-col  gap-[2vw]'>
    <label htmlFor="search" className='font-bd text-[4vw]'>ID do Voucher</label>
     <input type="text" name="search" className="w-full  p-[1.5vw] bg-[#ECECEC] ml-[1vw] outline-none text-[4.5vw]" />
    <label htmlFor="search" className='font-bd text-[4vw]'>Nome Impresso no Voucher</label>
    <SearchField />
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
    </DgMobileLayout>
    </>
  );
};

export default RelatriaoLaviria;
