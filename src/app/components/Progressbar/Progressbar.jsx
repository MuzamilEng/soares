import React from 'react'

const Progressbar = ({ percent_count, color }) => {
    const progressBarStyle = {
        height: `${percent_count}%`, // Set dynamic height as a percentage of the parent height
        backgroundColor: color
      };
  
    return (
      <article className='w-full m-[1vw] max-w-[3.5vw] xl:max-w-[1vw] lg:max-w-[1vw] md:max-w-[1vw]'>
        <main className='bg-[#D9D9D9] relative w-full h-[25vw] xl:h-[12vw] lg:h-[12vw] md:h-[12vw] rounded-[0.8vw]'>
          <p style={progressBarStyle} className="absolute bottom-0 w-full rounded-[0.8vw]"></p>
        </main>
        <p className='text-[3vw] xl:text-[1vw] lg:text-[1vw] md:text-[1vw] font-bold mt-[0.7vw]'>{percent_count}%</p>
      </article>
    );
  }

export default Progressbar