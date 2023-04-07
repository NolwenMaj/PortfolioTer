import Image from 'next/image'

export default function Home(){
    return(
      <>
      <div className="absolute top-0" id="sectionTop"></div>
      <div  className='relative h-screen flex justify-start' >
        <div className='h-[80vh] w-full bg-[url("https://github.com/NolwenMaj/PortfolioTer/raw/main/my-project/public/backgroundPictos.jpg")] bg-cover bg-no-repeat bg-center'>
          <div  className=' bg-white/75 h-full w-full flex items-center justify-center'>
              {/* <div className='flex flex-row justify-center items-center w-1/2 '> */}
                <div className='relative w-3/4 sm:w-1/2 p-8 sm:p-24 sm:space-x-8 space-y-4 flex flex-col sm:flex-row items-center bg-white rounded-2xl'>
                  <div className='w-60 h-60'>
                  <Image
                    className='border-[#F2511B] border-2 rounded-full '
                    src="https://github.com/NolwenMaj/PortfolioTer/raw/main/my-project/public/autoportrait.PNG" 
                    width={300}
                    height={300}
                    alt="Portrait dessiné de Nolwen Major Frances"
                  />
                  </div>
                <div className='sm:max-w-[50%] text-center sm:text-left text-2xl text-[#F2511B]'>
                  <p className='font-normal text-xl italic'>Salut, moi c’est Nolwen ! </p>
                  <p className=' font-thin'>Apprenante <span className='font-bold text-4xl'>développeuse</span> full stack à <a target="_blank" href="https://adatechschool.fr" className=' underline'>ADA Tech School</a>, <span className='font-bold text-4xl'>designer</span> de formation. </p>
                </div>
                </div>
             {/*  </div> */}
            </div>
        </div>
      </div>
      </>
    )
}