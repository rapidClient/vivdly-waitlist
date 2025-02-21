import { useState } from 'react'
import logo from './assets/logo.png'
import './App.css'

function App() {

  return (
    <div className=' bg-radial px-30 py-12'>
      <header className='flex items-center gap-4'>
        <img src={logo} alt='logo' />
        <p className='text-[#FFEBF4] text-4xl md:text-3xl font-bold'>VIVIDLY</p>
      </header>
      <div className='flex flex-col items-center justify-center mt-20 gap-12'>
        <p className='text-[#FFEBF4] font-bold text-[64px] w-full md:w-[80%] text-center'>Unleash Ad Mastery: Vividly&apos;s AI Transforms Every Campaign into a Masterpiece</p>
        <p className='text-2xl font-medium text-[#FFEBF4] w-full md:w-[50%] text-center'>Enter the era of smart, dynamic ads. Vividly&apos;s agentic AI creates, distributes, and optimizes your campaigns in real time. Join our waitlist and lead the data revolution.</p>
      </div>
     {/* Embedded Waitlist Iframe */}
     <div className="w-full flex justify-center mt-8 md:mt-12">
        <div className="w-full max-w-xl aspect-[3/2]">
          <iframe 
            src="https://vividlyads.substack.com/embed" 
            className="w-full h-full border border-gray-300 bg-white rounded-lg"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default App
