import React from 'react'

const SignUp = () => {
  return (
    <main className="w-full h-screen relative">
      <nav className=" md:bg-[#6930C0]  p-[2vw]">
        
      </nav>
      <section className=" flex w-full   flex-col gap-[6vw]  sm:flex-col md:flex-row  xl:flex-row justify-center     md:gap-[20vw] lg:[20vw]  xl:gap-[30vw] items-center   ">

     
      <article className='flex mt-[20vw] md:mt-[0vw] lg:[0vw] xl:mt-[0vw]'>
      <div className="flex flex-col w-full">
  <h1 className='font-extrabold text-[5vw] md:text-[1vw] lg:text-[1vw] xl:text-[1vw] text-[#4B4752] mt-[9vw] order-2 sm:order-1 md:order-1 lg:order-2 xl:order-2'>Acesso Apel</h1>
 <div className="w-full  max-w-[20vw] order-1 sm:order-2 md:order-2 lg:order-2 xl:order-2">
 <img src="/img/Group.png" alt="book image" className="w-full" />
 </div>
</div>
        <h1 className='font-extrabold text-[5vw] mt-[-15vw] ml-[-3vw] sm:mt-[0vw] md:mt-[11.5vw] lg:mt-[11.5vw] xl:mt-[11.5vw] sm:ml-[1vw] md:ml-[1vw] lg:ml-[1vw] xl:ml-[1vw] md:text-[1vw] lg:text-[1vw] xl:text-[1vw] flex items-center  text-[#4B4752]'>CHEQUELIVRO</h1>
      </article>

      <article className="sm:mt-[4vw]">
        <div className="md:border-2 md:border-[#6930C0] md:p-[2vw] w-full max-w-[60vw]  md:max-w-[25vw] md:rounded-xl">

        
        <p className='font-extrabold text-[5vw] md:font-extrabold md:text-[#4B4752] md:text-[1vw] md:w-full'>Bem Vindo</p>
        <h1 className='font-extrabold text-[5vw] text-[#4B4752]  md:font-bold md:text-[#4B4752] md:text-[1.3vw] md:w-full md:max-w-[18vw] mt-[8vw] md:mt-[1vw]'>Entre para explorar um mundo de possibilidades</h1>
        <p className="text-[#4B4752] font-extrabold text-[3.2vw] mt-[15vw]  md:text-[1vw] md:mt-[4vw]">Autenticação com Chave Móvel Digital</p>
     <div className="w-full md:mt-[2vw] mt-[7vw]">
     <img src="/img/signupbtn.png" alt="" />
     </div>
       

     <p className="text-[#4B4752] font-extrabold text-[3.2vw] mt-[5vw]  md:text-[1vw] md:mt-[4vw]">Autenticação com Chave Móvel Digital</p>
       
        </div>
        <div className="w-full flex justify-center mt-[30vw] md:mt-[2vw]">
            <img src="/img/logo.png" alt="logo" />
        </div>
      </article>
       
      
      </section>
     
    </main>
  )
}

export default SignUp
