import React, {useEffect, useState} from "react";
import data from '../object.json';

export default function Projects() {
  const [projets, setProjets] = useState(data); 


  return (
    <div id="sectionProjets" >
      <div className="flex flex-col-reverse">
        
            { projets.map((projet) => ( 
              <>
              <div id="firstSection" className="h-24"></div>
                <div className=" flex sm:flex-row pl-32 py-10 flex-col justify-between"> 
                  <div  className='w-[50%] text-xl text-[#F2511B] flex flex-col justify-center gap-2'>
                    <div className="flex flex-col flex-wrap gap-2">
                      <h1 className="text-6xl font-bold">{projet.title}</h1>
                      <h2 className="text-2xl">{projet.type}<span className="ml-10">
                      {projet.github && <a target="_blank" href={projet.github}><button className=" text-xs py-1 m-1 object-contain"><input className="w-6" type="image" src="../pictoGit.png" /></button></a>}
                      {projet.link && <a target="_blank" href={projet.link}><button className="text-xs py-1 text-black">https://</button></a>}</span></h2>
                      <p className="text-lg font-light">{projet.year}{projet.colleagues && <span> - avec {projet.colleagues}</span>} {projet.subtitle && <span> - {projet.subtitle}</span>}</p>
                      <p className='font-thin text-base py-8 text-black'>{projet.mainText}</p>
                    </div>
                    <div className="flex flex-row flex-wrap gap-4">
                    {projet.image2 &&<img className="max-w-[45%] rounded-lg border-2 cursor-pointer hover:scale-110 transition duration-700 object-contain" src={projet.image2} alt="2e visuel de l'article"></img>}
                    {projet.image3 &&<img className="max-w-[45%] rounded-lg border-2 cursor-pointer hover:scale-110 transition duration-700 object-contain" src={projet.image3}alt="3e visuel de l'article"></img>}
                    {projet.image4 && <img className="max-w-[45%] rounded-lg border-2 cursor-pointer hover:scale-110 transition duration-700 object-contain" src={projet.image4} alt="4e visuel de l'article"></img>}
                    {projet.image5 && <img className="max-w-[45%] rounded-lg border-2 cursor-pointer hover:scale-110 transition duration-700 object-contain" src={projet.image5} alt="5e visuel de l'article"></img>}
                    </div>
                    <div className="flex flex-row gap-2 text-sm pt-8">
                      {projet.themes[0] && <p className="py-1text-lg font-light ">{projet.themes[0]}</p>}
                      {projet.themes[1] && <p className="py-1text-lg font-light ">{projet.themes[1]}</p>}
                      {projet.themes[2] && <p className="py-1text-lg font-light ">{projet.themes[2]}</p>}
                      {projet.themes[3] && <p className="py-1text-lg font-light ">{projet.themes[3]}</p>}
                      {projet.themes[4] && <p className="py-1text-lg font-light ">{projet.themes[4]}</p>}
                      {projet.themes[5] && <p className="py-1text-lg font-light ">{projet.themes[5]}</p>}
                      
                    </div>
                  </div>
                {/*<a target="_blank" href={`/${projet.title}`}> */}
                  <img id="testImage2" className="border-2 max-w-[40%] h-[80vh] overflow-clip object-cover object-center" src={projet.image1} alt="visuel principal de l'article"></img> 
                {/*</a> */} 
             </div>
            </>
           ))}
         </div>
    </div>
  );
}
