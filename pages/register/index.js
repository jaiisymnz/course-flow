import Link from 'next/link'
import React from 'react'

export default function Register() {
  return (
    <div className='lg:flex lg:items-center lg:justify-center lg:py-20  relative overflow-hidden'>
         <div className='lg:w-[30%] pt-10 lg:py-20 pb-20 px-4 font-[Inter]'>
            <h3 className='text-2xl text-[#22269E] font-medium'>
                Register to start learning!
            </h3>

            <form className='z-10 flex flex-col gap-6 pt-8'>
                <div className='flex flex-col gap-1'>
                    <label className='font-normal'>
                        Name
                    </label>

                    <input 
                        type='text' 
                        placeholder='Enter Name and Lastname'
                        className='p-3 border border-[#D6D9E4] rounded-lg outline-none'    
                    />
                </div>

                <div className='flex flex-col gap-1'>
                    <label className='font-normal'>
                        Date of Birth
                    </label>

                    <input 
                        type='date' 
                        placeholder='DD/MM/YY'
                        className='p-3 border border-[#D6D9E4] rounded-lg text-[#9AA1B9] outline-none'    
                    />
                </div>

                <div className='flex flex-col gap-1'>
                    <label className='font-normal'>
                        Educational Background
                    </label>

                    <input 
                        type='text' 
                        placeholder='Enter Educational Background'
                        className='p-3 border border-[#D6D9E4] rounded-lg outline-none'    
                    />
                </div>

                <div className='flex flex-col gap-1'>
                    <label className='font-normal'>
                        Email
                    </label>

                    <input 
                        type='email' 
                        placeholder='Enter Email'
                        className='p-3 border border-[#D6D9E4] rounded-lg outline-none'    
                    />
                </div>

                <div className='flex flex-col gap-1'>
                    <label className='font-normal'>
                        Password
                    </label>

                    <input 
                        type='password' 
                        placeholder='Enter Password'
                        className='p-3 border border-[#D6D9E4] rounded-lg outline-none'    
                    />
                </div>

                <button 
                    type='submit'
                    className='bg-[#2F5FAC] text-white py-5 px-8 rounded-xl mt-2 cursor-pointer'
                >
                    Register
                </button>
            </form>


            <h4 className='pt-6 font-medium'>
                Already have an account?
                <span className='ml-2 font-bold text-[#2F5FAC]'>
                    <Link href={'/login'}>Login</Link>
                </span>
            </h4>

            <div className='z-[-1] w-[30px] lg:w-[75px] lg:h-[75px] h-[30px] rounded-full bg-[#C6D6EF]
                    absolute left-[-4%] sm:left-0 lg:left-[10%] lg:top-[10%] top-[25%]'
            >

            </div>
           
            <svg width="153" height="587" viewBox="0 0 153 587" fill="none" xmlns="http://www.w3.org/2000/svg" 
                className='z-[-1] absolute right-0 top-44 lg:top-0 w-[33px] lg:w-[153px] h-[117px] lg:h-[587px]'>
                <path d="M59.1396 374C126.262 454 161.306 557.5 172.64 617V0C139.973 1.16669 68.8265 40.0145 30.2626 105.5C-22.7376 195.5 -1.70853 301.478 59.1396 374Z" fill="#2F5FAC"/>
            </svg>


            <div className='absolute top-[50%] lg:top-[45%] right-[5%] lg:right-[10%] 
                    w-[10px] md:w-[35px] md:h-[35px] h-[10px] rounded-full border-[3px] border-[#F47E20]'
            >

            </div>

            <div className='z-[-1] absolute bottom-[8%] lg:bottom-[25%] left-[-20%] sm:left-[-10%] lg:left-[-30%] 
                    xl:left-[-25%] 2xl:left-[-20%] w-[110px] lg:w-[400px] lg:h-[420px] h-[110px] bg-[#FBAA1C] rounded-full'
            >

            </div>

            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" 
                className='hidden lg:block absolute top-[20%] left-[18%]'>
                <path d="M13.843 1.99998L8.83754 20.6805" stroke="#2FAC61" stroke-width="3" stroke-linecap="round"/>
                <path d="M2.00035 8.83751L20.6809 13.8429" stroke="#2FAC61" stroke-width="3" stroke-linecap="round"/>
            </svg>

        </div>
    </div>
   
  )
}
