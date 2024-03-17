import React from 'react'

const Progressbar = ({ percent_count, color }) => {
    const progressBarStyle = {
        height: `${percent_count}%`, // Set dynamic height as a percentage of the parent height
        backgroundColor: color
      };
  
    return (
      <article className='w-full m-[1vw] max-w-[1vw]'>
        <main className='bg-[#D9D9D9] relative w-full h-[12vw] rounded-[0.8vw]'>
          <p style={progressBarStyle} className="absolute bottom-0 w-full rounded-[0.8vw]"></p>
        </main>
        <p className='text-[1vw] font-bold mt-[0.7vw]'>{percent_count}%</p>
      </article>
    );
  }

export default Progressbar