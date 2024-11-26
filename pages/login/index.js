import Link from 'next/link'
import React from 'react'

export default function Login() {
  return (
    <div className='lg:flex lg:items-center lg:justify-center lg:py-20 pb-10  relative overflow-hidden'>
         <div className='lg:w-[30%] pt-10 lg:py-20 pb-20 px-4'>
            <h3 className='text-2xl text-[#22269E] font-medium'>
                Welcome back!
            </h3>

            <form className='z-10 flex flex-col gap-6 pt-8'>
                <div className='flex flex-col gap-1'>
                    <label className='font-normal'>
                        Email
                    </label>

                    <div className='flex items-center  border border-[#D6D9E4] rounded-lg'>
                        <input 
                            type='email' 
                            placeholder='Enter Email'
                            className='p-3 outline-none w-[90%]'    
                        />

                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.5994 11.9984C21.5994 17.3004 17.3013 21.5984 11.9994 21.5984C6.69748 21.5984 2.39941 17.3004 2.39941 11.9984C2.39941 6.6965 6.69748 2.39844 11.9994 2.39844C17.3013 2.39844 21.5994 6.6965 21.5994 11.9984ZM13.1994 16.7984C13.1994 17.4612 12.6622 17.9984 11.9994 17.9984C11.3367 17.9984 10.7994 17.4612 10.7994 16.7984C10.7994 16.1357 11.3367 15.5984 11.9994 15.5984C12.6622 15.5984 13.1994 16.1357 13.1994 16.7984ZM11.9994 5.99844C11.3367 5.99844 10.7994 6.5357 10.7994 7.19844V11.9984C10.7994 12.6612 11.3367 13.1984 11.9994 13.1984C12.6622 13.1984 13.1994 12.6612 13.1994 11.9984V7.19844C13.1994 6.5357 12.6622 5.99844 11.9994 5.99844Z" fill="#9B2FAC"/>
                        </svg>
                    </div>
                </div>

                <div className='flex flex-col gap-1'>
                    <label className='font-normal'>
                        Password
                    </label>

                    <div className='flex items-center  border border-[#D6D9E4] rounded-lg'>
                        <input 
                            type='password' 
                            placeholder='Enter Password'
                            className='p-3 outline-none w-[90%]'    
                        />

                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.5994 11.9984C21.5994 17.3004 17.3013 21.5984 11.9994 21.5984C6.69748 21.5984 2.39941 17.3004 2.39941 11.9984C2.39941 6.6965 6.69748 2.39844 11.9994 2.39844C17.3013 2.39844 21.5994 6.6965 21.5994 11.9984ZM13.1994 16.7984C13.1994 17.4612 12.6622 17.9984 11.9994 17.9984C11.3367 17.9984 10.7994 17.4612 10.7994 16.7984C10.7994 16.1357 11.3367 15.5984 11.9994 15.5984C12.6622 15.5984 13.1994 16.1357 13.1994 16.7984ZM11.9994 5.99844C11.3367 5.99844 10.7994 6.5357 10.7994 7.19844V11.9984C10.7994 12.6612 11.3367 13.1984 11.9994 13.1984C12.6622 13.1984 13.1994 12.6612 13.1994 11.9984V7.19844C13.1994 6.5357 12.6622 5.99844 11.9994 5.99844Z" fill="#9B2FAC"/>
                        </svg>
                    </div>
                </div>

                <div className='bg-[#EBD5EE] rounded-lg p-4'>
                    <div className='flex gap-2'>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.5994 11.9984C21.5994 17.3004 17.3013 21.5984 11.9994 21.5984C6.69748 21.5984 2.39941 17.3004 2.39941 11.9984C2.39941 6.6965 6.69748 2.39844 11.9994 2.39844C17.3013 2.39844 21.5994 6.6965 21.5994 11.9984ZM13.1994 16.7984C13.1994 17.4612 12.6622 17.9984 11.9994 17.9984C11.3367 17.9984 10.7994 17.4612 10.7994 16.7984C10.7994 16.1357 11.3367 15.5984 11.9994 15.5984C12.6622 15.5984 13.1994 16.1357 13.1994 16.7984ZM11.9994 5.99844C11.3367 5.99844 10.7994 6.5357 10.7994 7.19844V11.9984C10.7994 12.6612 11.3367 13.1984 11.9994 13.1984C12.6622 13.1984 13.1994 12.6612 13.1994 11.9984V7.19844C13.1994 6.5357 12.6622 5.99844 11.9994 5.99844Z" fill="#9B2FAC"/>
                        </svg>

                        <div className='text-[#9B2FAC]'>
                            Login failed. Please ensure your <br/> email and password are correct
                        </div>

                    </div>
                </div>

                <button 
                    type='submit'
                    className='bg-[#2F5FAC] text-white py-5 px-8 rounded-2xl font-bold mt-2 cursor-pointer'
                >
                    Log in
                </button>
            </form>


            <h4 className='pt-6 font-medium'>
                    Don’t have an account?
                <span className='ml-2 text-[#2F5FAC]'>
                    <Link href={'/register'} className='font-bold'>Register</Link>
                </span>
            </h4>

            <div className='z-[-1] w-[30px] lg:w-[75px] lg:h-[75px] h-[30px] rounded-full bg-[#C6D6EF]
                    absolute left-[-4%] sm:left-0 lg:left-[10%] lg:top-[10%] top-0'
            >

            </div>
           
            <svg width="153" height="587" viewBox="0 0 153 587" fill="none" xmlns="http://www.w3.org/2000/svg" 
                className='z-[-1] absolute right-0 top-[-5%] lg:top-0 w-[33px] lg:w-[153px] h-[117px] lg:h-[587px]'>
                <path d="M59.1396 374C126.262 454 161.306 557.5 172.64 617V0C139.973 1.16669 68.8265 40.0145 30.2626 105.5C-22.7376 195.5 -1.70853 301.478 59.1396 374Z" fill="#2F5FAC"/>
            </svg>


            <div className='absolute top-[30%] lg:top-[60%] right-[5%] sm:right-[3%] lg:right-[10%] 
                    w-[10px] lg:w-[35px] lg:h-[35px] h-[10px] rounded-full border-[3px] border-[#F47E20]'
            >

            </div>

            <div className='z-[-1] absolute bottom-0 lg:bottom-[25%] left-[-23%] sm:left-[-10%] lg:left-[-30%] 
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
