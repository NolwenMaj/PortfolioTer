import Link from "next/link"
import Icon from '@mdi/react';
import { mdiArrowUp } from '@mdi/js';



export default function Header (){
    return(
      <div className='space-x-4 font-display sticky top-full z-10 text-sm flex-row flex w-full justify-center sm:h-[95vh] sm:w-24 sm:left-[93vw] sm:flex-col sm:top-6 sm:justify-between sm:items-end'>
        <div className="flex flex-row space-x-4 sm:flex-col sm:space-y-4 sm:space-x-0">
          <Link href="#sectionProjets">
            <button className="sm:w-full"> projets</button>
          </Link>
          <Link href="#sectionApropos">
            <button className="sm:w-full" >à propos</button>
          </Link>
          </div>
          <Link href="#sectionTop">
            <button className=""><Icon path={mdiArrowUp} size={1} /></button>
          </Link>
      </div>
    )
}
