import Link from "next/link"

export default function Header (){
    return(
      <div className='fixed sm:top-6 top-4 right-16 sm:right-6 z-10 text-[8px] sm:text-sm flex flex-col sm:w-24 h-[95vh] w-16 justify-between items-end'>
        <div className="">
          <Link href="#sectionProjets">
            <button className="w-full mb-2 sm:mb-4"> projets</button>
          </Link>
          <Link href="#sectionApropos">
            <button className="w-full" >à propos</button>
          </Link>
          </div>
          <Link href="#sectionTop">
            <button className="">🔝</button>
          </Link>
      </div>
    )
}
