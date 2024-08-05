"use client"
import React, { useState } from 'react'
import { LoginSchema } from '..'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import loginAction from './loginAction'

const SignInForm = () => {
    const [Message, SetMessage]=useState("")
    const [alert, Setalert]=useState(false)
    const form =  useForm<z.infer<typeof LoginSchema>>({
        resolver:zodResolver(LoginSchema),
        defaultValues:{
            email:"",
            password:""
        }
    })    
    // function used to send form data to the backend or for display the request data
    const onSubmit = async(formData: z.infer<typeof LoginSchema>)=>{
        try{
            await loginAction(null , formData)
            SetMessage('Succesfuly login to his soace ')
            Setalert(true)
            setTimeout(()=>{
                Setalert(false)
            },
           2000)
        }catch(erro){
            SetMessage(" Invalide email or password")
            Setalert(true)
            setTimeout(()=>{
                Setalert(false)
            },
           2000)
        }
    }
  return (
    <div className=' bg-white rounded-lg p-7'>
        <h1 className=' flex items-center justify-center px-2 text-lg font-semibold text-colortext'> Begin your journey </h1>
        <Form {...form}>

            <form onSubmit={form.handleSubmit(onSubmit)} className=' py-4 flex flex-col gap-4 '>
 
                <FormField
                 control={form.control}
                 name='email'
                 render={({field})=>(
                    <FormItem className=' flex flex-col gap-2'>
                        <FormLabel className=' text-colortext font-semibold text-sm'> Email</FormLabel>
                        <FormControl>
                           <input
                             type='text'
                             {...field}
                             className=' w-full px-2 rounded py-1 bg-backcolor'
                          />  
                        </FormControl>
                        <FormMessage className='text-red-500'/>
                    </FormItem>
                 )}
            
                />
                <FormField
                 control={form.control}
                 name='password'
                 render={({field})=>(
                    <FormItem className=' flex flex-col gap-2'>
                        <FormLabel className=' text-colortext font-semibold text-sm'>Password</FormLabel>
                        <FormControl>
                           <input
                             type='password'
                             {...field}
                             className=' w-full px-2 rounded py-1 bg-backcolor'
                          />  
                        </FormControl>
                        <FormMessage className='text-red-500'/>
                    </FormItem>
                 )}
            
                />
                <div className=' flex items-center gap-2'>
                    <input
                    type='checkbox'
                    checked
                    onChange={
                        (e)=>{}
                    }
                    />
                    <span className='text-sm font-medium text-colortext flex '>
                        By signin, I agree with the, <p className=' text-deep_purple'> Terms of Use & Privacy Policy</p>
                    </span>
                </div>
                  <Button className=' text-white bg-deep_purple px-4 hover:bg-violet-200 hover:text-deep_purple'> Login </Button>
                  <div className={` items-center justify-center py-2 ${alert ? "flex":"hidden"}`}>
                                <p className=' text-worning_text'>{Message}</p>
                    </div>
            </form>

        </Form>
        <div className=' text-sm text-colortext font-light flex gap-2 '>
            <span>
                Don&apos;t have an account? 
            </span>
            <Link href='/' className='font-bold text-deep_purple'>register</Link>

        </div>
    </div>
  )
}

export default SignInForm
