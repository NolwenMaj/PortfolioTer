import Image from 'next/image';
import Icon from '@mdi/react';
import { mdiArrowTopRight } from '@mdi/js';



export default function Contact(){
    return(
            <div id="sectionContact" className="font-display w-full flex py-24 justify-center">
                <div className='flex flex-row space-x-10'>
                    <button><a href = "mailto:majorfrancesn@gmail.com">M'envoyer un mail </a></button>
                    <div className="flex flex-row h-full items-center">
                        <Image 
                            src ="/pictoLinkedin.png"
                            height={30}
                            width={30}
                            alt="logo Linkedin"/>
                        <a target="_blank" href="https://www.linkedin.com/in/nolwenmajorfrances/"><Icon className="hover:animate-bounce" path={mdiArrowTopRight} size={1} /></a>
                    </div>
                </div>
            </div>
    )
}