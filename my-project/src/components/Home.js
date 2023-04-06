import Image from 'next/image'

export default function Home(){
    return(
    <div className='h-[80vh] w-full  bg-[url("https://github.com/NolwenMaj/PortfolioTer/raw/main/my-project/public/backgroundPictos.jpg")] bg-cover bg-no-repeat bg-center'>
      <div id="sectionTop" className=' bg-white/75 h-full w-full flex justify-center'>
          <div className='flex flex-row justify-center items-center w-1/2 '>
            <div className='bg-white flex flex-row items-center justify-center space-x-8 p-24 rounded-2xl box-content'>
              <img
                className='max-w-[40%] rounded-full border-[#F2511B] border-2 '
                src="https://github.com/NolwenMaj/PortfolioTer/raw/main/my-project/public/autoportrait.PNG" 
                alt="Portrait dessiné de Nolwen Major Frances"
              ></img>
            <div className='text-2xl text-[#F2511B]'>
              <p className='font-normal text-xl italic'>Salut, moi c’est Nolwen ! </p>
              <p className=' font-thin'>Apprenante <span className='font-bold text-4xl'>développeuse</span> full stack à <a href="https://adatechschool.fr">ADA Tech School</a>, <span className='font-bold text-4xl'>designer</span> de formation. </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    )
}