import axios from 'axios'
import { useRouter } from 'next/router'
import Link from 'next/link'
import React, { useState } from 'react'
import Loading from '@/components/Loding'
import Navbar from '@/components/navbar'

export default function Register() {

    const router = useRouter()

    const [name, setName] = useState('')
    const [date_of_birth, setDateOfBirth] = useState('')
    const [education_background, setEducationBackground] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const [nameColor, setNameColor] = useState('border-[#D6D9E4]')
    const [date_of_birthColor, setDateOfBirthColor] = useState('border-[#D6D9E4]')
    const [education_backgroundColor, setEducationBackgroundColor] = useState('border-[#D6D9E4]')
    const [emailColor, setEmailColor] = useState('border-[#D6D9E4]')
    const [passwordColor, setPasswordColor] = useState('border-[#D6D9E4]')

    const [nameAlert, setNameAlert] = useState('hidden')
    const [date_of_birthAlert, setDateOfBirthAlert] = useState('hidden')
    const [education_backgroundAlert, setEducationBackgroundAlert] = useState('hidden')
    const [emailAlert, setEmailAlert] = useState('hidden')
    const [passwordAlert, setPasswordAlert] = useState('hidden')



    const handleRegister = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
          const response = await axios.post('/api/auth', {
            name,
            date_of_birth,
            education_background,
            email,
            password,
            action:'signup'
          });

      
          if(response.status === 200){
            router.push('/login')
          }
        } catch (error) {
            if(name === ''){
                setNameColor('border-[#9B2FAC]')
                setNameAlert('block')
            }else{
                setNameColor('border-[#D6D9E4]')
                setNameAlert('hidden')
            }

            if(date_of_birth === ''){
                setDateOfBirthColor('border-[#9B2FAC]')
                setDateOfBirthAlert('block')
            }else{
                setDateOfBirthColor('border-[#D6D9E4]')
                setDateOfBirthAlert('hidden')
            }

            if(education_background === ''){
                setEducationBackgroundColor('border-[#9B2FAC]')
                setEducationBackgroundAlert('block')
            }else{
                setEducationBackgroundColor('border-[#D6D9E4]')
                setEducationBackgroundAlert('hidden')
            }

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
      };

  return (
    <div>
        <Navbar/>
        <div className='lg:flex lg:items-center lg:justify-center lg:py-10  relative overflow-hidden'>
            <div className='lg:w-[40%] pt-10 lg:py-20 pb-20 px-4'>
                <h3 className='text-2xl lg:text-4xl text-[#22269E] font-medium'>
                    Register to start learning!
                </h3>

                <form onSubmit={handleRegister}
                    className='z-10 flex flex-col gap-3 pt-4 lg:w-[80%]'>
                    <div className='flex flex-col gap-1'>
                        <label className='font-normal'>
                            Name
                        </label>

                        <div className={`flex items-center border-[1px] ${nameColor} rounded-lg ` } >
                            <input 
                                type='text'
                                value={name}
                                onChange={(e) => setName(e.target.value)} 
                                placeholder='Enter Name and Lastname'
                                className=' p-3  outline-none w-[90%] rounded-lg '
                            />

                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${nameAlert}`}>
                                <path fillRule="evenodd" clipRule="evenodd" d="M21.5994 11.9984C21.5994 17.3004 17.3013 21.5984 11.9994 21.5984C6.69748 21.5984 2.39941 17.3004 2.39941 11.9984C2.39941 6.6965 6.69748 2.39844 11.9994 2.39844C17.3013 2.39844 21.5994 6.6965 21.5994 11.9984ZM13.1994 16.7984C13.1994 17.4612 12.6622 17.9984 11.9994 17.9984C11.3367 17.9984 10.7994 17.4612 10.7994 16.7984C10.7994 16.1357 11.3367 15.5984 11.9994 15.5984C12.6622 15.5984 13.1994 16.1357 13.1994 16.7984ZM11.9994 5.99844C11.3367 5.99844 10.7994 6.5357 10.7994 7.19844V11.9984C10.7994 12.6612 11.3367 13.1984 11.9994 13.1984C12.6622 13.1984 13.1994 12.6612 13.1994 11.9984V7.19844C13.1994 6.5357 12.6622 5.99844 11.9994 5.99844Z" fill="#9B2FAC"/>
                            </svg>
                        </div>
                        
                        <p className={`text-sm text-[#9B2FAC] px-3 m-0 ${nameAlert}`}>Please fill out this field</p>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label className='font-normal'>
                            Date of Birth
                        </label>

                        <input 
                            type='date' 
                            value={date_of_birth}
                            onChange={(e) => setDateOfBirth(e.target.value)}
                            placeholder='DD/MM/YY'
                            className={`p-3 border-[1px] ${date_of_birthColor} rounded-lg text-[#9AA1B9] outline-none`}   
                        />

                        <p className={`text-sm text-[#9B2FAC] px-3 m-0 ${date_of_birthAlert}`}>Please fill out this field</p>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label className='font-normal'>
                            Educational Background
                        </label>

                        <div className={`flex items-center border-[1px] ${education_backgroundColor} rounded-lg ` } >
                            <input 
                                type='text' 
                                value={education_background}
                                onChange={(e) => setEducationBackground(e.target.value)}
                                placeholder='Enter Educational Background'
                                className='p-3 outline-none w-[90%] rounded-lg'  
                            />
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${education_backgroundAlert}`}>
                                <path fillRule="evenodd" clipRule="evenodd" d="M21.5994 11.9984C21.5994 17.3004 17.3013 21.5984 11.9994 21.5984C6.69748 21.5984 2.39941 17.3004 2.39941 11.9984C2.39941 6.6965 6.69748 2.39844 11.9994 2.39844C17.3013 2.39844 21.5994 6.6965 21.5994 11.9984ZM13.1994 16.7984C13.1994 17.4612 12.6622 17.9984 11.9994 17.9984C11.3367 17.9984 10.7994 17.4612 10.7994 16.7984C10.7994 16.1357 11.3367 15.5984 11.9994 15.5984C12.6622 15.5984 13.1994 16.1357 13.1994 16.7984ZM11.9994 5.99844C11.3367 5.99844 10.7994 6.5357 10.7994 7.19844V11.9984C10.7994 12.6612 11.3367 13.1984 11.9994 13.1984C12.6622 13.1984 13.1994 12.6612 13.1994 11.9984V7.19844C13.1994 6.5357 12.6622 5.99844 11.9994 5.99844Z" fill="#9B2FAC"/>
                            </svg>
                        </div>

                        <p className={`text-sm text-[#9B2FAC] px-3 m-0 ${education_backgroundAlert}`}>Please fill out this field</p>

                    </div>

                    <div className='flex flex-col gap-1'>
                        <label className='font-normal'>
                            Email
                        </label>

                        <div className={`flex items-center border-[1px] ${emailColor} rounded-lg ` } >
                            <input 
                                type='email' 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Enter Email'
                                className='p-3 outline-none w-[90%] rounded-lg'   
                            />

                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${emailAlert}`}>
                                <path fillRule="evenodd" clipRule="evenodd" d="M21.5994 11.9984C21.5994 17.3004 17.3013 21.5984 11.9994 21.5984C6.69748 21.5984 2.39941 17.3004 2.39941 11.9984C2.39941 6.6965 6.69748 2.39844 11.9994 2.39844C17.3013 2.39844 21.5994 6.6965 21.5994 11.9984ZM13.1994 16.7984C13.1994 17.4612 12.6622 17.9984 11.9994 17.9984C11.3367 17.9984 10.7994 17.4612 10.7994 16.7984C10.7994 16.1357 11.3367 15.5984 11.9994 15.5984C12.6622 15.5984 13.1994 16.1357 13.1994 16.7984ZM11.9994 5.99844C11.3367 5.99844 10.7994 6.5357 10.7994 7.19844V11.9984C10.7994 12.6612 11.3367 13.1984 11.9994 13.1984C12.6622 13.1984 13.1994 12.6612 13.1994 11.9984V7.19844C13.1994 6.5357 12.6622 5.99844 11.9994 5.99844Z" fill="#9B2FAC"/>
                            </svg>
                        </div>

                        <p className={`text-sm text-[#9B2FAC] px-3 m-0 ${emailAlert}`}>Please fill out this field</p>

                    </div>

                    <div className='flex flex-col gap-1'>
                        <label className='font-normal'>
                            Password
                        </label>

                        <div className={`flex items-center border-[1px] ${passwordColor} rounded-lg ` } >
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

                        <p className={`text-sm text-[#9B2FAC] px-3 m-0 ${passwordAlert}`}>Please fill out this field</p>

                    </div>

                    <button 
                        type='submit'
                        className='bg-[#2F5FAC] text-white py-4 px-8 rounded-xl mt-2 cursor-pointer hover:bg-blue-600'
                    >
                        Register
                    </button>
                </form>


                <h4 className='pt-6 font-medium text-base'>
                    Already have an account?
                    <span className='ml-2 font-bold text-[#2F5FAC]'>
                        <Link href={'/login'}>Login</Link>
                    </span>
                </h4>

                <div className='z-[-1] w-[30px] lg:w-[75px] lg:h-[75px] h-[30px] rounded-full bg-[#C6D6EF]
                        absolute left-[-4%] sm:left-0 lg:left-[10%] lg:top-[5%] top-[25%]'
                >

                </div>
            
                <svg width="153" height="587" viewBox="0 0 153 587" fill="none" xmlns="http://www.w3.org/2000/svg" 
                    className='z-[-1] absolute right-0 top-44 lg:top-[-10%] w-[33px] lg:w-[153px] h-[117px] lg:h-[587px]'>
                    <path d="M59.1396 374C126.262 454 161.306 557.5 172.64 617V0C139.973 1.16669 68.8265 40.0145 30.2626 105.5C-22.7376 195.5 -1.70853 301.478 59.1396 374Z" fill="#2F5FAC"/>
                </svg>


                <div className='absolute top-[49%] lg:top-[45%] right-[5%] lg:right-[5%] 
                        w-[10px] md:w-[35px] md:h-[35px] h-[10px] rounded-full border-[3px] border-[#F47E20]'
                >

                </div>

                <div className='z-[-1] absolute bottom-[8%] lg:bottom-[25%] left-[-20%] sm:left-[-10%] lg:left-[-30%] 
                        xl:left-[-25%] 2xl:left-[-20%] w-[110px] lg:w-[400px] lg:h-[420px] h-[110px] bg-[#FBAA1C] rounded-full'
                >

                </div>

                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" 
                    className='hidden lg:block absolute top-[15%] left-[18%]'>
                    <path d="M13.843 1.99998L8.83754 20.6805" stroke="#2FAC61" stroke-width="3" stroke-linecap="round"/>
                    <path d="M2.00035 8.83751L20.6809 13.8429" stroke="#2FAC61" stroke-width="3" stroke-linecap="round"/>
                </svg>

            {loading && <div className="absolute inset-0 flex items-center justify-center min-h-screen">
                    <Loading/>
                </div>}

            </div>
        </div>
    </div>
   
  )
}
