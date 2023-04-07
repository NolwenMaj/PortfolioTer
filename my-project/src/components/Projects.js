import React, {useEffect, useState} from "react";
import data from '../object.json';

export default function Projects() {
  const [projets, setProjets] = useState(data); 


  return (
    <div id="sectionProjets" >
      <div className="flex flex-col-reverse">
        
            { projets.map((projet) => ( 
              <>
                <div className="flex sm:flex-row sm:pl-32 sm:py-10 flex-col-reverse items-center sm:justify-between my-20"> 
                  <div  className='w-2/3 sm:w-[50%] text-xl text-[#F2511B] flex flex-col justify-center gap-2'>
                    <div className="flex flex-col flex-wrap gap-2">
                      <h1 className="text-4xl sm:text-6xl font-bold">{projet.title}</h1>
                      <div className="flex sm:flex-row flex-col sm:items-center items-start">
                        <h2 className="text-xl sm:text-2xl">{projet.type}</h2>
                        <div className="space-x-2">
                          {projet.github && <a target="_blank" href={projet.github}><button className="sm:ml-10 text-xs py-1 object-contain"><input className="w-6" type="image" src="../pictoGit.png" /></button></a>}
                          {projet.link && <a target="_blank" href={projet.link}><button className="text-xs py-1 text-black">https://</button></a>}
                        </div>
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
                  <img id="testImage2" className=" h-[30vh] mb-4 sm:mb-0 ml-8 sm:ml-0 sm:border-2 sm:max-w-[40%] sm:h-[80vh] sm:overflow-clip object-cover object-center" src={projet.image1} alt="visuel principal de l'article"></img> 
                {/*</a> */} 
             </div>
            </>
           ))}
         </div>
    </div>
  );
}
