import React, { useState } from 'react'
import DgLayout from '../../../Layout/DgLayout'
import SearchField from '../../../components/Common/SearchField'
import SelectField from '../../../components/SelectField/SelectField'
import Button from '../../../components/Common/Button'
import { Icon } from '@iconify/react'

const Mensagens = () => {
  const [messageText, setMessageText] = useState('');
  const [messages, setMessages] = useState([
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore',
   'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore'
  ]);

  const handleMessageChange = (e) => {
    setMessageText(e.target.value);
  }
  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (messageText.trim() !== '') {
      setMessages([...messages, messageText]);
      setMessageText('');
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleMessageSubmit(e);
    }
  }

  const options = [
    { label: 'Livraria Traga-Mundos', value: 'todos' },
    { label: 'Livraria', value: 'ativos' },
    { label: 'Inativos', value: 'inativos' }
  ]

  return (
        <DgLayout>
        <section className='w-full grid grid-cols-2 gap-[1vw]'>
            <aside className='w-full max-w-[35vw] p-[1vw]'>
                <h1 className='text-[1.5vw] text-[#4B4752] font-xl'>Envio de Mensagens <br />ao Livreiro</h1>
                <div className="mt-[1vw] w-full">
                <h1 className='text-[1vw] text-[#4B4752] font-bd'>Livreiro</h1>
                <SearchField />
                </div>
                <section className="mt-[1vw] w-full">
                <SelectField name={'Mensagem'} title={'Livreiro'} options={options} />
                <p className='flex w-full p-[1.3vw] text-[#4B4752] font-md py-[3vw] mt-[1vw] text-[1vw] bg-[#ECECEC] rounded-md'>
                Caro livreiro, lembre-se de manter seus registros atualizados e em conformidade com as normas da DGLAB para garantir a qualidade e precisão das informações sobre seu acervo.
                </p>
                <Button title={'Enviar'}/>
                </section>
            </aside>
            <aside className='w-full max-w-[35vw] p-[1vw]'>
                <h1 className='text-[1.5vw] text-[#4B4752] font-xl'>Chatao <br />ao Livreiro</h1>
                <div className="mt-[1vw] w-full">
                <SelectField name={'lavireo'} title={'Livreiro'} options={options} />
                </div>
                <main className='w-full max-w-[35vw] bg-[#ECECEC] p-[2vw] mt-[2vw] rounded-[0.5vw]'>
                <main className='w-full relative p-[1.5vw] h-[13vw] overflow-y-scroll custom-scrollbar'>
                  {messages?.map((message, index)=> {
                    return (
                      <p key={index} className={`text-[1vw] mt-[1vw] rounded-[0.7vw] w-full max-w-[20vw] p-[1vw] font-bd ${index % 2 == 0 ? 'bg-[#6930C0] ml-auto text-[#ffff]': 'bg-[#fff] mr-auto text-[#4B4752]'}`}>{message}</p>
                    )
                  })}
                </main>
                </main>
                <section className='w-full bg-[#ECECEC] p-[0.8vw] rounded-[0.5vw] mt-[1vw] flex items-center focus:outline-none'>
                  <input onKeyDown={handleKeyPress} type="text" name='messageText' value={messageText} onChange={handleMessageChange} placeholder='Mensagem' className='text-[#4B4752] font-li bg-inherit border-none focus:outline-none w-full' />
                  <Icon icon="wpf:attach" className='text-[1.2vw] ml-auto cursor-pointer text-[#000] ' />
                </section>
                <Button title={'Enviar'}/>
            </aside>
        </section>
        </DgLayout>
  )
}


export default Mensagens