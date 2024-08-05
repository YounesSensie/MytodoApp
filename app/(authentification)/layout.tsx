import { cookies } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";

const AuthenticationLayout = async({
    children,
    
  }: {
    children: React.ReactNode;
  }) => {
     const cookie = cookies().get('Authorization')
     if(cookie){
      redirect('/user')
     }
    return (
           <div className="flex flex-col gap-2 p-4">
                <div className=" flex items-center  h-[50px] p-1">
                   <div className=" relative h-10 w-10 ">
                      <Image src={"/todo-logo.png"} alt="logo" fill sizes="864px" priority className=" "/>
                    </div> 
                    <h1 className=" text-colortext font-bold text-xl">TODO App</h1>

                </div>
                <main className=" flex flex-col items-center justify-center ">
                    <div className=" grid grid-cols-12 gap-7 p-7">
                        <div className=" col-span-6  p-7">
                             {children}
                        </div>
                        <div className="col-span-6 p-7">
                            <div className="relative h-full w-4/5 ">
                            <Image src="/welcome.jpg" alt=" side hoem page" sizes="864px" fill priority/>
                            </div>

                        </div>
                    </div>
                       
                </main>
            </div>
          
          
     );
  }
  export default AuthenticationLayout;