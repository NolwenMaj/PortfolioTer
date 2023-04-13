import React, {useEffect, useState} from "react";
import Image from 'next/image'
import data from '../object.json';
import Icon from '@mdi/react';
import { mdiArrowTopRight } from '@mdi/js';
import { mdiLinkBoxVariant } from '@mdi/js';

export default function Projects() {
  const [projets, setProjets] = useState(data); 


  return (
      <div className="flex flex-col-reverse">
        
            { projets.map((projet) => ( 
              <div id={`section_${projet.id}`} key={projet.id}>
                <div  className="font-display flex sm:flex-row sm:pl-32 sm:py-10 flex-col-reverse items-center sm:justify-between my-20"> 
                  <div  className='w-3/4 sm:w-[50%] text-xl text-[#F2511B] flex flex-col justify-center gap-2'>
                    <div className="flex flex-col flex-wrap gap-2">
                      <h1 className="text-4xl sm:text-6xl font-bold">{projet.title}</h1>
                      <div className="flex flex-row items-center space-x-2 ">
                        <h2 className="text-xl sm:text-2xl mr-8">{projet.type}</h2>
                        {projet.github && 
                             <a target="_blank" href={projet.github} className="flex flex-row">
                            <Image 
                                src ="/pictoGit.png"
                                height={30}
                                width={30}
                                alt="logo Linkedin"/>
                              <Icon className="hover:animate-bounce invisible sm:visible  text-black" path={mdiArrowTopRight} size={1} />
                            </a>}
                        {projet.link && 
                            <a target="_blank" href={projet.link} className="flex flex-row">
                              <Icon className=" text-black" path={mdiLinkBoxVariant} size={1.5} />
                              <Icon className="hover:animate-bounce invisible sm:visible text-black" path={mdiArrowTopRight} size={1} />
                            </a>
                          }
                        </div>
                      
                      <p className="text-sm sm:text-lg font-light">{projet.year}{projet.colleagues && <span> - avec <a target="_blank" href={projet.linkColleagues}>{projet.colleagues}</a></span>} {projet.subtitle && <span> - {projet.subtitle}</span>}</p>
                      <div className='font-thin sm:text-base py-8 text-black text-xs'>
                        {projet.paragraphe1 && <p className="pt-2">{projet.paragraphe1}</p>}
                        {projet.paragraphe2 && <p className="pt-2">{projet.paragraphe2}</p>}
                        {projet.paragraphe3 && <p className="pt-2">{projet.paragraphe3}</p>}
                        {projet.paragraphe4 && <p className="pt-2">{projet.paragraphe4}</p>}
                      </div>
                    </div>
                    <div className="flex sm:flex-row sm:flex-wrap gap-4 flex-col">
                      {projet.image2 &&<img className="sm:max-w-[45%] rounded-lg border-2 object-contain" src={projet.image2} alt="2e visuel de l'article"></img>}
                      {projet.image3 &&<img className="sm:max-w-[45%] rounded-lg border-2 object-contain" src={projet.image3}alt="3e visuel de l'article"></img>}
                      {projet.image4 && <img className="sm:max-w-[45%] rounded-lg border-2 object-contain" src={projet.image4} alt="4e visuel de l'article"></img>}
                      {projet.image5 && <img className="sm:max-w-[45%] rounded-lg border-2 object-contain" src={projet.image5} alt="5e visuel de l'article"></img>}
                    </div>
                    <div className="flex flex-row gap-2 sm:text-sm text-xs pt-8">
                      {projet.themes[0] && <p className="py-1text-lg font-light ">{projet.themes[0]}</p>}
                      {projet.themes[1] && <p className="py-1text-lg font-light ">{projet.themes[1]}</p>}
                      {projet.themes[2] && <p className="py-1text-lg font-light ">{projet.themes[2]}</p>}
                      {projet.themes[3] && <p className="py-1text-lg font-light ">{projet.themes[3]}</p>}
                      {projet.themes[4] && <p className="py-1text-lg font-light ">{projet.themes[4]}</p>}
                      {projet.themes[5] && <p className="py-1text-lg font-light ">{projet.themes[5]}</p>}
                    </div>
                  </div>
                {/*<a target="_blank" href={`/${projet.title}`}> */}
                <Image 
                  id="cropImage" 
                  className=" h-[30vh] mb-4 sm:mb-0 ml-8 sm:ml-0 sm:border-2 sm:max-w-[40%] sm:h-[60vh] sm:overflow-clip object-cover object-bottom" 
                  src={projet.image1}
                  width ={2000} 
                  height ={2000} 
                  alt="visuel principal de l'article"
                /> 
                {/*</a> */} 
             </div>
            </div>
           ))}
         </div>

  );
}
