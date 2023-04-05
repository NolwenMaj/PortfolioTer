

export default function Test(){
    return(
      <>
        <div id="firstSection" className="h-24"></div>
      <div className=" flex sm:flex-row pl-24 py-10 flex-col"> 
      <div  className='w-[50%] text-xl text-[#F2511B] flex flex-col justify-center gap-2'>
              <div className="flex flex-col flex-wrap gap-2">
                <h1 className="text-6xl font-bold">(TITLE)</h1>
                <h2>(year) - (type) fait avec (colleagues) dans le cadre de (subtitle) </h2>
                <p className='font-thin text-base py-8 text-black'>(mainText)compiled client and server successfully in 321 ms (204 modules)compiled client and server successfully in 321 ms (204 modules)compiled client and server successfully in 321 ms (204 modules)compiled client and server successfully in 321 ms (204 modules)compiled client and server successfully in 321 ms (204 modules)</p>
              </div>
              <div className="flex flex-row flex-wrap gap-3">
                <img className="max-w-[30%] rounded-lg border-2 cursor-pointer hover:scale-110 transition duration-700 " src="/ACCUEIL.png" alt="2e visuel de l'article"></img>
                <img className="max-w-[30%] rounded-lg border-2 cursor-pointer hover:scale-110 transition duration-700 " src="/ACCUEIL.png" alt="3e visuel de l'article"></img>
                <img className="max-w-[30%] rounded-lg border-2 cursor-pointer hover:scale-110 transition duration-700 " src="/ACCUEIL.png" alt="4e visuel de l'article"></img>
              </div>
              <div className="flex flex-row gap-2 text-sm pt-8">
                <button className="py-1 ">(theme)</button>
                <button className="py-1 ">(theme)</button>
                <button className="py-1 ">(theme)</button>
                <button className="py-1 ml-20">(git)</button>
                <button className="py-1 ">(link)</button>
              </div>
            </div>
      <div className="w-1/2 h-[50vh] justify-end items-center">
        <div className="" id="testImage">
           <img className="border-2 "src="/ACCUEIL.png"></img> 
        </div>
      </div>
      </div>
      </>
    )
}
