import React from 'react'

const LavariaLogin = () => {
  return (
    <main className="w-full h-screen relative">
      <nav className=" md:bg-[#6930C0] p-[2vw]"></nav>
      <section className=" flex w-full  flex-col gap-[6vw]  sm:flex-col md:flex-row  xl:flex-row justify-center md:gap-[20vw] lg:[20vw]  xl:gap-[30vw] items-center   ">
      <article className='flex mt-[20vw] md:mt-[0vw] lg:[0vw] xl:mt-[0vw]'>
      <div className="flex flex-col w-full">
      <h1 className='font-extrabold text-[5vw] md:text-[1vw] lg:text-[1vw] xl:text-[1vw] text-[#4B4752] mt-[2vw] order-2 sm:order-1 md:order-1 lg:order-2 xl:order-2'>Acesso Lavario</h1>
      <div className="w-full mt-[1vw] max-w-[20vw] order-1 sm:order-2 md:order-2 lg:order-2 xl:order-2">
      <img src="/img/Group.png" alt="book image" className="w-full" />
    </div>
    </div>
    <h1 className='font-extrabold text-[5vw] ml-[-3vw] -mt-[8vw] md:mt-[3.5vw] lg:mt-[3.5vw] xl:mt-[3.5vw] sm:ml-[1vw] md:ml-[1vw] lg:ml-[1vw] xl:ml-[1vw] md:text-[1vw] lg:text-[1vw] xl:text-[1vw] flex items-center  text-[#4B4752]'>CHEQUELIVRO</h1>
    </article>

      <article className="sm:mt-[4vw]">
        <div className="md:border-2 md:border-[#6930C0] md:p-[2vw] w-full max-w-[60vw]  md:max-w-[25vw] md:rounded-xl">
        <p className='font-extrabold text-[5vw] md:font-extrabold md:text-[#4B4752] md:text-[1vw] md:w-full'>Bem Vindo</p>
        <h1 className='font-extrabold text-[5vw] text-[#4B4752]  md:font-bold md:text-[#4B4752] md:text-[1.3vw] md:w-full md:max-w-[18vw] mt-[8vw] md:mt-[1vw]'>Entre para explorar um mundo de possibilidades</h1>
        <form className="flex flex-col gap-[1vw] mt-[9vw] md:mt-[2vw] md:text-[1.2vw] text-[3.5vw]">
            <label htmlFor="email" className="text-[#4B4752] font-extrabold text-[4vw] md:text-[1vw]">Email</label>
            <input type="email"  name="email" className="outline-none mt-[3vw] md:mt-[0vw] border-b-2 border-[#4B4752]" />
            <label htmlFor="senha" className="text-[#4B4752] font-extrabold text-[4vw] mt-[9vw] md:mt-[0vw] md:text-[1vw]">Senha</label>
            <input type="text"  name="senha" className="outline-none border-b-2 md:mt-[0vw] mt-[3vw] border-[#4B4752] " />
        </form>
        <button className="bg-[#6930C0] p-[3vw] md:p-[0.5vw] md:text-[1vw] text-white mt-[9vw] rounded-lg md:mt-[2vw] w-full max-w-[100vw] font-bold">ENTRAR</button>
        <div className="flex gap-[4vw]">
        <p className="text-[#6930C0] text-[3vw] font-bold md:text-[1vw] mt-[2vw]">Registar-se</p>
        <p className="text-[#4B4752] font-bold text-[3vw]  md:text-[1vw] mt-[2vw]">Esqueceu a password?</p>
        </div>
        </div>
        <figure className="w-full flex justify-center mt-[2vw]">
            <img src="/img/logo.png" alt="logo" />
        </figure>
      </article>
      </section>
     
    </main>
  )
}

export default LavariaLogin
