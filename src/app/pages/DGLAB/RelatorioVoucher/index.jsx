import React from "react";
import SearchField from "../../../components/Common/SearchField";
import Paggination from "../../../components/Common/Paggination";
import DgLayout from "../../../Layout/DgLayout";
import { relatorio_voucher } from "../../../data";

const RelatorioVoucher = () => {
  return (
    <DgLayout>
        <main className='w-full'>
        <h1 className='mt-[1vw] text-[2vw] text-[#4B4752] font-black'>Validação do Voucher</h1>
        <section className='w-full mt-[1vw] max-w-[40vw]'>
       <div className="w-full max-w-[20vw]">
       <SearchField />
       </div>
        </section>
        <div className="flex ml-[2vw] mt-[2vw] justify-between items-center w-full max-w-[40vw]">
            <section className="flex items-center justify-between w-full max-w-[15vw]">
                <h1 className="text-[1.3vw] text-[#4B4752] font-black">ID</h1>
                <h1 className="text-[1.3vw] text-[#4B4752] font-black">Nome</h1>
            </section>
            <h1 className="text-[1.3vw] text-[#4B4752] font-black">Vencimento</h1>
        </div>
        <section className='w-full mt-[0.5vw]'>
            {relatorio_voucher?.map((item, index)=> (
                   <main key={index} className='p-[0.5vw] m-[0.5vw] rounded-[2vw] w-full max-w-[60vw] bg-[#6930C0] flex items-center justify-between'>
                   <section className='w-full max-w-[40vw] flex items-center'>
                   <h1 className='text-[#fff] ml-[1vw] text-[1vw] font-black border-r-[0.1vw] border-white pr-[1vw]'>{item?.id}</h1>
                       <h1 className='text-[#fff] ml-[1vw] text-[1vw] font-black'>{item?.title}</h1>
                   </section>
                   <section className='row-center ml-[2vw] w-full'>
                   <h1 className='text-[#ececec] text-[1vw] font-black'>{'10/03/2025'}</h1>
                   <button className={`ml-[4vw] w-full max-w-[12vw] bg-[#80FFD8] text-[#6930C0] rounded-[2vw] p-[0.2vw] text-[1vw] font-black text-center border-[0.1vw]`}>{item?.status}</button>
                   </section>
               </main>
            ))}
        </section>
        <Paggination />
        </main>
    </DgLayout>
  );
};

export default RelatorioVoucher;
