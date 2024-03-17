import React from 'react'

const Paggination = () => {
  return (
    <footer className='w-full my-[2vw] max-w-[60vw]'>
        <div className="flex justify-center items-center">
            <button className='text[1vw] m-[0.5vw] p-[0.8vw] h-[3vw] rounded-md bg-[#6930C0] text-white font-black text-center w-fit'>1</button>
            <button className='text[1vw] m-[0.5vw] p-[0.8vw] h-[3vw] rounded-md bg-[#ECECEC] hover:bg-[#6930C0] hover:text-white font-black text-center w-fit'>2</button>
            <button className='text[1vw] m-[0.5vw] p-[0.8vw] h-[3vw] rounded-md bg-[#ECECEC] hover:bg-[#6930C0] hover:text-white font-black text-center w-fit'>3</button>
            <button className='text[1vw] m-[0.5vw] p-[0.8vw] h-[3vw] rounded-md bg-[#ECECEC] hover:bg-[#6930C0] hover:text-white font-black text-center w-fit'>4</button>
            <button className='text[1vw] m-[0.5vw] p-[0.8vw] h-[3vw] rounded-md bg-[#ECECEC] hover:bg-[#6930C0] hover:text-white font-black text-center w-fit'>5</button>
        </div>
        </footer>
  )
}

export default Paggination