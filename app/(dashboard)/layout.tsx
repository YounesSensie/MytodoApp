import Header from "./_component/header";
const protectedLayout = async({
    children,
    
  }: {
    children: React.ReactNode;
  }) => {
   
    return (
           
           <div>
               <Header/>
               <main className=" flex p-7 h-screen overflow-auto w-full">
                 <div className=" mt-16 py-2 min-w-full px-9">   
                  {children}
                  </div>
              </main>
            </div>
          
          
     );
  }
  export default protectedLayout;