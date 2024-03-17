import React from "react";
import Layout from "../../../Layout/Layout";
import SearchField from "../../../components/Common/SearchField";
import { dadoas_record } from "../../../data";

const VoucherDetails = () => {
  return (
    <Layout>
      <main className="w-full">
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
  );
};

export default VoucherDetails;
