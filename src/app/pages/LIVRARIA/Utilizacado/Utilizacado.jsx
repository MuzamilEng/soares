import React from "react";
import SearchField from "../../../components/Common/SearchField";
import Layout from "../../../Layout/Layout";
import { utilizacado_records } from "../../../data";
import Paggination from "../../../components/Common/Paggination";

const Utilizacado = () => {
    const tableFields  = ['Nome', 'ID', 'NIF', 'ISBN', 'Valor', 'Status']
  return (
    <Layout>
      <main className="w-full">
        <h1 className="mt-[1vw] text-[2vw] text-[#4B4752] font-black"> Utilização do Voucher </h1>
        <div className="">
         <h1 className="mt-[1vw] ml-[1vw] text-[1vw] text-[#4B4752] font-black"> ISBN </h1>
         <div className="w-full max-w-[16.5vw] mt-[1vw] ml-[1vw]"> <SearchField />  </div>
        </div>
        <article className="w-full mt-[2vw] flex items-center">
            {tableFields?.map((item, index)=> <p key={index} className={`p-[0.8vw] m-[0.3vw] ${item === 'Nome' ? 'w-[18vw]': 'w-[11vw]' } bg-[#4B4752] rounded-md text-[#80FFD8] font-bd text-[1vw]`}>{item}</p>)}
        </article>
        <article className="w-full mt-[0.5vw]">
        {utilizacado_records?.map((item, index)=> (
                <div className="flex items-center w-full">
                    <p key={index} className={`p-[0.8vw] m-[0.3vw] cursor-pointer hover:shadow-sm w-[18vw] bg-[#ECECEC] rounded-md text-[#4B4752] font-bd text-[1vw]`}>{item?.name}</p>
                    <p key={index} className={`p-[0.8vw] m-[0.3vw] cursor-pointer hover:shadow-sm w-[11vw] bg-[#ECECEC] rounded-md text-[#4B4752] font-bd text-[1vw]`}>{item?.id}</p>
                    <p key={index} className={`p-[0.8vw] m-[0.3vw] cursor-pointer hover:shadow-sm w-[11vw] bg-[#ECECEC] rounded-md text-[#4B4752] font-bd text-[1vw]`}>{item?.nif}</p>
                    <p key={index} className={`p-[0.8vw] m-[0.3vw] cursor-pointer hover:shadow-sm w-[11vw] bg-[#ECECEC] rounded-md text-[#4B4752] font-bd text-[1vw]`}>{item?.isbn}</p>
                    <p key={index} className={`p-[0.8vw] m-[0.3vw] cursor-pointer hover:shadow-sm w-[11vw] bg-[#ECECEC] rounded-md text-[#4B4752] font-bd text-[1vw]`}>{item?.valor}</p>
                    <p key={index} className={`p-[0.7vw] m-[0.3vw] text-center cursor-pointer hover:shadow-sm w-[11vw] bg-[#6930C0] rounded-full text-[#80FFD8] font-bd text-[0.8vw]`}>{item?.status}</p>
                </div>
            ))}
            </article>
            <Paggination />
      </main>
    </Layout>
  );
};



export default Utilizacado