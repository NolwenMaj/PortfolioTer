import Link from "next/link"
import Icon from '@mdi/react';
import { mdiArrowUp } from '@mdi/js';



export default function Header (){
    return(
      <div className='font-display fixed sm:top-6 top-2 right-2 sm:right-6 z-10 text-[10px] sm:text-sm flex flex-col sm:w-24 h-[95vh] w-16 justify-between items-end'>
        <div className="">
          <Link href="#sectionProjets">
            <button className="w-full mb-2 sm:mb-4"> projets</button>
          </Link>
          <Link href="#sectionApropos">
            <button className="w-full" >à propos</button>
          </Link>
          </div>
          <Link href="#sectionTop">
            <button className=""><Icon path={mdiArrowUp} size={1} /></button>
          </Link>
      </div>
    )
}
