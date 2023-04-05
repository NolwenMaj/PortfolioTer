import Link from "next/link"

export default function Header (){
    return(
      <div className='bg-white py-6 drop-shadow-md sticky top-0 z-10'>
          <div className='flex justify-end space-x-4 pr-8'>
          <a href="/">
            <button>Nolwen MAJOR FRANCES</button>
          </a>
          <Link href="#firstSection">
            <button> projets</button>
          </Link>
          <a href="/apropos">
            <button>à propos</button>
          </a>
          </div>
      </div>
    )
}
