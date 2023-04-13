import Link from "next/link";
import React, {useEffect, useState} from "react";
import data from '../object.json';

export default function Navbar(){
    const [projets, setProjets] = useState(data) 
    return(
        <div className='sm:justify-start sm:max-h-[10dvh] fixed bottom-[2dvh] w-full text-sm justify-center font-display z-10 flex sm:w-1/12 sm:flex-col sm:sticky sm:bottom-full sm:top-2 sm:left-full sm:mx-2 sm:text-lg'>
            <div className="flex flex-row space-x-2 sm:flex-col sm:space-y-2 sm:space-x-0">                
                <Link href="#sectionApropos">
                    <button className="sm:w-full">à propos</button>
                </Link>
                <Link href={`#section_${projets.length}`}>
                    <button className="sm:hidden flex"> projets</button>
                </Link>
                <div className="sm:w-full dropdown hidden sm:flex sm:flex-col">
                    <button className="sm:w-full">projets</button>
                    <div className="dropdown-content hidden sm:w-full sm:h-full">
                        <div className="flex flex-col-reverse space-y-1 sm:w-full">
                            {projets.map((projet) => ( 
                            <Link key={projet.id} href={`#section_${projet.id}`}><button className="bg-white text-xs sm:w-full p-2">{projet.title}</button></Link>
                            ))}
                        </div>
                    </div>
                </div>
             </div>
        </div>         
    )};