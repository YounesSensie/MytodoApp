"use server"
import { z } from "zod"
import { LoginSchema } from ".."
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default async function loginAction(
    currentSatate: any,
    formData: z.infer<typeof LoginSchema>
):Promise<string>{
    const email = formData.email
    const password = formData.password
    const response = await fetch(process.env.ROOT_URL+"/api/login",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password}),
    });
    const data = await response.json()
    cookies().set('Authorization', data.token, {
        secure:true,
        httpOnly:true,
        expires: Date.now() + 24*60*60*1000*3 , // 3 days
        path:"/",
        sameSite:"strict",
    })
    if(response.ok){
        redirect("/user")
    }else{
        return "Invalid email or password"
    }

} 