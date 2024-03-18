import React from 'react'

const Voucher = ({title, date, status, text_color, button_bg}) => {
  return (
    <main className='p-[0.5vw] m-[0.5vw] rounded-[2vw] w-full max-w-[60vw] bg-[#6930C0] flex items-center justify-between'>
        <section className='w-full max-w-[40vw]'>
            <h1 className='text-[#fff] ml-[1vw] text-[1vw] font-black'>{title}</h1>
        </section>
        <section className='row-center ml-[2vw] w-full'>
        <h1 className='text-[#ececec] text-[1vw] font-black'>{date}</h1>
        <button className={`ml-[2vw] ${text_color} ${button_bg} w-full max-w-[12vw] rounded-[2vw] p-[0.2vw] text-[1vw] font-black text-center border-[0.1vw]`}>{status}</button>
        </section>
    </main>
  )
}

export default Voucher