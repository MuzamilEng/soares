import React from 'react'

const Login = () => {
  return (
    <main className='w-full'>
        <nav className='bg-[#6930C0] w-full p-[1.5vw]'></nav>
        <div className="mt-[3vw] w-full flex items-center justify-center">
            <figure className='w-full max-w-[3vw]'>
                <img src="/img/logo-p.png" alt="lavario" className='w-full' />
            </figure>
            <p className='text-[#4B4752] font-bd text-[1.5vw] ml-[4vw]'>CHEQULIVRO</p>
        </div>
          <section className='w-full h-[30vw] row-center'>
          <div className='bg-[#6930C0] rounded-[0.4vw] w-[1.5vw] h-[1.5vw]'></div>
          <p className='w-full max-w-[23vw] text-[#4B4752] text-[1vw] ml-[3vw] font-md'>Ao selecionar a caixa ao lado, você estará aceitando as políticas de privacidade do Regulamento Geral de Proteção de Dados (RGPD), garantindo a segurança e proteção dos seus dados pessoais</p>
          </section>
    </main>
  )
}

export default Login