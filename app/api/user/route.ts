import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'

export async function POST(req:Request){
    const {fullname, email, password} = await req.json();
    const existuserEmail = await prisma.user.findFirst({
        where: {
            email: email
        }
    }) 
    if(existuserEmail){
        return new Response(JSON.stringify({message: "Email already exist"}), {
            status: 400,
            
        }
       )
    }
    //Hash the password 
    const hashedPassword = bcrypt.hashSync(password, 8);
    //create in database
    try{
    const user = await prisma.user.create({
        data: {
            fullname,
            email,
            password:hashedPassword,
        }
    })
    return NextResponse.json({})
}catch(error){
    return new NextResponse('internal error', {status:500})
}
}