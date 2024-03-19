import React from 'react'

const Progressbar = ({ percent_count, color }) => {
    const progressBarStyle = {
        height: `${percent_count}%`, // Set dynamic height as a percentage of the parent height
        backgroundColor: color
      };
  
    return (
      <article className='w-full m-[1vw]  max-w-[2vw]'>
        <main className='bg-[#D9D9D9] relative w-full h-[35vw] rounded-[0.8vw]'>
          <p style={progressBarStyle} className="absolute bottom-0   w-full rounded-[0.8vw]"></p>
        </main>
        <p className='text-[2.5vw] font-bold mt-[2vw] ml-[-1vw] '>{percent_count}%</p>
      </article>
    );
  }

export default Progressbar