import { LoginSchema } from "@/app/(authentification)"
import prisma from "@/lib/db"
import bcrypt from 'bcryptjs'
import { SignJWT } from "jose"
import { NextResponse } from "next/server"

export async function POST(req:Request){
    //Extract data sent in 
    const body = await req.json()
    const {email , password} = body
   
    //Validate data
    const validatedFields = LoginSchema.safeParse({
        email,
        password
    })
    if(!validatedFields.success){
        return NextResponse.json(
            {
                error:"Invalide email or password"
            },
            {status : 400}
        )
    }
    // lookup the user
    const user = await prisma.user.findFirst({
        where:{
            email:email
        }
    });
    if(!user){
        return NextResponse.json(
            {
                error:"User not found"
            },
            {status : 400}
        )
    }
    //compare password
    const isCorrectPassword = bcrypt.compareSync(password,user.password)
    
    if(!isCorrectPassword){
        return NextResponse.json(
            {
                error:"Invalide password"
            },
            {status : 400}
        )
    }
    //create jwt 
    const key = new TextEncoder().encode(process.env.SECRET)
    const alg = "HS256"
    const jwt = await new SignJWT({})
    .setProtectedHeader({ alg })
    .setExpirationTime("72h")
    .setSubject(user.id.toString())
    .sign(key)
  return NextResponse.json({ token: jwt})
}