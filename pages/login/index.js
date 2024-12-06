import Navbar from '@/components/navbar'
import Link from 'next/link'
import React, { useState } from 'react'
import Loading from '@/components/Loding'
import { useRouter } from 'next/router'
import supabase from '@/lib/supabase'

export default function Login() {

    const router = useRouter()

    const [loading,setLoading] = useState(false)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [emailColor, setEmailColor] = useState('border-[#D6D9E4]')
    const [passwordColor, setPasswordColor] = useState('border-[#D6D9E4]')

    const [emailAlert, setEmailAlert] = useState('hidden')
    const [passwordAlert, setPasswordAlert] = useState('hidden')

    const [alertBox, setalertBox] = useState('hidden')

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {

            const { user, error } = await supabase.auth.signInWithPassword({
              email,
              password,
            });
    
            if (error) {
                setalertBox('block');
                setEmailColor('border-[#9B2FAC]')
                setEmailAlert('block')
                setPasswordColor('border-[#9B2FAC]')
                setPasswordAlert('block')
            }else{
                router.push('/profile');
            }
          } catch (error) {
            if(email === ''){
                setEmailColor('border-[#9B2FAC]')
                setEmailAlert('block')
            }else{
                setEmailColor('border-[#D6D9E4]')
                setEmailAlert('hidden')
            }

            if(password === ''){
                setPasswordColor('border-[#9B2FAC]')
                setPasswordAlert('block')
            }else{
                setPasswordColor('border-[#D6D9E4]')
                setPasswordAlert('hidden')
            }

          }finally{
            setLoading(false)
          }
    }

  return (
    <div>
        <Navbar/>
        <div className='lg:flex lg:items-center lg:justify-center lg:py-10 pb-10  relative overflow-hidden'>
            <div className='lg:w-[30%] pt-10 lg:py-20 pb-20 px-4'>
                <h3 className='text-4xl text-[#22269E] font-medium'>
                    Welcome back!
                </h3>

                <form className='z-10 flex flex-col gap-6 pt-8' onSubmit={handleLogin}>
                    <div className='flex flex-col gap-1'>
                        <label className='font-normal'>
                            Email
                        </label>

                        <div className={`flex items-center  border-[1px] ${emailColor}  rounded-lg`}>
                            <input 
                                type='email' 
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                placeholder='Enter Email'
                                className='p-3 outline-none w-[90%] rounded-lg'    
                            />

                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${emailAlert}`}>
                                <path fillRule="evenodd" clipRule="evenodd" d="M21.5994 11.9984C21.5994 17.3004 17.3013 21.5984 11.9994 21.5984C6.69748 21.5984 2.39941 17.3004 2.39941 11.9984C2.39941 6.6965 6.69748 2.39844 11.9994 2.39844C17.3013 2.39844 21.5994 6.6965 21.5994 11.9984ZM13.1994 16.7984C13.1994 17.4612 12.6622 17.9984 11.9994 17.9984C11.3367 17.9984 10.7994 17.4612 10.7994 16.7984C10.7994 16.1357 11.3367 15.5984 11.9994 15.5984C12.6622 15.5984 13.1994 16.1357 13.1994 16.7984ZM11.9994 5.99844C11.3367 5.99844 10.7994 6.5357 10.7994 7.19844V11.9984C10.7994 12.6612 11.3367 13.1984 11.9994 13.1984C12.6622 13.1984 13.1994 12.6612 13.1994 11.9984V7.19844C13.1994 6.5357 12.6622 5.99844 11.9994 5.99844Z" fill="#9B2FAC"/>
                            </svg>
                        </div>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label className='font-normal'>
                            Password
                        </label>

                        <div className={`flex items-center  border-[1px] ${passwordColor}  rounded-lg`}>
                            <input 
                                type='password' 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='Enter Password'
                                className='p-3 outline-none w-[90%] rounded-lg'    
                            />

                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${passwordAlert}`}>
                                <path fillRule="evenodd" clipRule="evenodd" d="M21.5994 11.9984C21.5994 17.3004 17.3013 21.5984 11.9994 21.5984C6.69748 21.5984 2.39941 17.3004 2.39941 11.9984C2.39941 6.6965 6.69748 2.39844 11.9994 2.39844C17.3013 2.39844 21.5994 6.6965 21.5994 11.9984ZM13.1994 16.7984C13.1994 17.4612 12.6622 17.9984 11.9994 17.9984C11.3367 17.9984 10.7994 17.4612 10.7994 16.7984C10.7994 16.1357 11.3367 15.5984 11.9994 15.5984C12.6622 15.5984 13.1994 16.1357 13.1994 16.7984ZM11.9994 5.99844C11.3367 5.99844 10.7994 6.5357 10.7994 7.19844V11.9984C10.7994 12.6612 11.3367 13.1984 11.9994 13.1984C12.6622 13.1984 13.1994 12.6612 13.1994 11.9984V7.19844C13.1994 6.5357 12.6622 5.99844 11.9994 5.99844Z" fill="#9B2FAC"/>
                            </svg>
                        </div>
                    </div>

                    <div className={`bg-[#EBD5EE] rounded-lg p-4 ${alertBox}`}>
                        <div className='flex gap-2'>
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M21.5994 11.9984C21.5994 17.3004 17.3013 21.5984 11.9994 21.5984C6.69748 21.5984 2.39941 17.3004 2.39941 11.9984C2.39941 6.6965 6.69748 2.39844 11.9994 2.39844C17.3013 2.39844 21.5994 6.6965 21.5994 11.9984ZM13.1994 16.7984C13.1994 17.4612 12.6622 17.9984 11.9994 17.9984C11.3367 17.9984 10.7994 17.4612 10.7994 16.7984C10.7994 16.1357 11.3367 15.5984 11.9994 15.5984C12.6622 15.5984 13.1994 16.1357 13.1994 16.7984ZM11.9994 5.99844C11.3367 5.99844 10.7994 6.5357 10.7994 7.19844V11.9984C10.7994 12.6612 11.3367 13.1984 11.9994 13.1984C12.6622 13.1984 13.1994 12.6612 13.1994 11.9984V7.19844C13.1994 6.5357 12.6622 5.99844 11.9994 5.99844Z" fill="#9B2FAC"/>
                            </svg>

                            <div className='text-[#9B2FAC]'>
                                Login failed. Please ensure your <br/> email and password are correct
                            </div>

                        </div>
                    </div>

                    <button 
                        type='submit'
                        className='bg-[#2F5FAC] text-white py-[18px] px-8 rounded-2xl font-bold mt-2 cursor-pointer hover:bg-blue-600'
                    >
                        Log in
                    </button>
                </form>


                <h4 className='pt-6 font-medium text-base'>
                        Don’t have an account?
                    <span className='ml-2 text-[#2F5FAC]'>
                        <Link href={'/register'} className='font-bold'>Register</Link>
                    </span>
                </h4>

                <div className='z-[-1] w-[30px] lg:w-[75px] lg:h-[75px] h-[30px] rounded-full bg-[#C6D6EF]
                        absolute left-[-4%] sm:left-0 lg:left-[10%] top-[-1%] lg:top-16'
                >

                </div>
            
                <svg width="153" height="587" viewBox="0 0 153 587" fill="none" xmlns="http://www.w3.org/2000/svg" 
                    className='z-[-1] absolute right-0 top-[-5%] lg:top-[-10%] w-[33px] lg:w-[153px] h-[117px] lg:h-[587px]'>
                    <path d="M59.1396 374C126.262 454 161.306 557.5 172.64 617V0C139.973 1.16669 68.8265 40.0145 30.2626 105.5C-22.7376 195.5 -1.70853 301.478 59.1396 374Z" fill="#2F5FAC"/>
                </svg>


                <div className='absolute top-[38%] lg:top-[68%] right-[5%] sm:right-[3%] lg:right-[5%] 
                        w-[10px] lg:w-[35px] lg:h-[35px] h-[10px] rounded-full border-[3px] border-[#F47E20]'
                >

                </div>

                <div className='z-[-1] absolute bottom-0 lg:bottom-[20%] left-[-23%] sm:left-[-10%] lg:left-[-30%] 
                        xl:left-[-25%] 2xl:left-[-20%] w-[110px] lg:w-[400px] lg:h-[420px] h-[110px] bg-[#FBAA1C] rounded-full'
                >

                </div>

                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" 
                    className='hidden lg:block absolute top-[20%] left-[18%]'>
                    <path d="M13.843 1.99998L8.83754 20.6805" stroke="#2FAC61" strokeWidth="3" strokeLinecap="round"/>
                    <path d="M2.00035 8.83751L20.6809 13.8429" stroke="#2FAC61" strokeWidth="3" strokeLinecap="round"/>
                </svg>

            </div>
            {loading && <div className="absolute inset-0 flex items-center justify-center min-h-screen">
                    <Loading/>
                </div>}
        </div>
    </div>
   
  )
}
