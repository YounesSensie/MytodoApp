import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req:Request){
    const token = cookies().get("Authorization");
    cookies().set('Authorization', token?.value as string,{
        secure:true,
        httpOnly:true,
        expires: new Date(0) , // 3 days
        path:"/",
        sameSite:"strict",
    })
    return NextResponse.json({ message: 'Logged out successfully' });

}