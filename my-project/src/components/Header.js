import Link from "next/link"

export default function Header (){
    return(
      <div className='bg-white py-2 sm:py-6 drop-shadow-md sticky top-0 z-10'>
          <div className='flex justify-end space-x-4 pr-8'>
          <Link href="#sectionProjets">
            <button> projets</button>
          </Link>
          <Link href="#sectionApropos">
            <button>à propos</button>
          </Link>
          </div>
      </div>
    )
}
