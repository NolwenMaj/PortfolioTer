import Image from 'next/image'

export default function Home(){
    return(
    <main className='h-[80vh] w-full bg-[url("/pictosbg.jpg")] bg-cover bg-no-repeat bg-center'>
      <div className=' bg-white/75 h-full w-full flex justify-center'>
          <div className='flex flex-row justify-center items-center w-1/2 '>
            <div className='bg-white flex flex-row items-center justify-center space-x-8 p-24 rounded-2xl box-content'>
              <Image
                className='rounded-full border-[#F2511B] border-2 '
                src="/autoportrait.png"
                alt="Portrait dessine de Nolwen Major Frances"
                width={200}
                height={200}
                priority
              />
            <div className='text-4xl text-[#F2511B]'>
              <p className='font-thin text-2xl'>Salut, moi c’est Nolwen ! </p>
              <p>Apprenante <b>développeuse</b> full stack à ADA Tech School, <b>designer</b> de formation. </p>
            </div>
            </div>
          </div>
        </div>
      </main>
    )
}