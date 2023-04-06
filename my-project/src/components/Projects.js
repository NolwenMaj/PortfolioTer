import React, {useEffect, useState} from "react";
import data from '../object.json';

export default function Projects() {
  const [projets, setProjets] = useState(data); 


  return (
    <div id="sectionProjets" className="">
      <div className= "">
        
            { projets.map((projet) => ( 
              <>
              <div id="firstSection" className="h-24"></div>
                <div className=" flex sm:flex-row pl-24 py-10 flex-col justify-between"> 
                  <div  className='w-[50%] text-xl text-[#F2511B] flex flex-col justify-center gap-2'>
                    <div className="flex flex-col flex-wrap gap-2">
                      <h1 className="text-6xl font-bold">{projet.title}</h1>
                      <h2>{projet.year} - {projet.type} {projet.colleagues && <span className="font-normal not-italic">- avec {projet.colleagues}</span>} {projet.subtitle && <span className="font-normal not-italic">- {projet.subtitle}</span>}</h2>
                      <p className='font-thin text-base py-8 text-black'>{projet.mainText}
                        </p>
                      </div>
                    <div className="flex flex-row flex-wrap gap-4">
                    {projet.image2 &&<img className="max-w-[45%] rounded-lg border-2 cursor-pointer hover:scale-110 transition duration-700 object-contain" src={projet.image2} alt="2e visuel de l'article"></img>}
                    {projet.image3 &&<img className="max-w-[45%] rounded-lg border-2 cursor-pointer hover:scale-110 transition duration-700 object-contain" src={projet.image3}alt="3e visuel de l'article"></img>}
                    {projet.image4 && <img className="max-w-[45%] rounded-lg border-2 cursor-pointer hover:scale-110 transition duration-700 object-contain" src={projet.image4} alt="4e visuel de l'article"></img>}
                    {projet.image5 && <img className="max-w-[45%] rounded-lg border-2 cursor-pointer hover:scale-110 transition duration-700 object-contain" src={projet.image5} alt="5e visuel de l'article"></img>}
                    </div>
                    <div className="flex flex-row gap-2 text-sm pt-8">
                      
                  {/*     {{projet.themes}.forEach(element => (
                        <button className="py-1 ">{element}<span className="ml-20"></span></button>
                      ))} */}

                      {projet.github && <a href={projet.github}><button className="h-full py-1 object-contain"><input className="w-8" type="image" src="../pictoGit.png" /></button></a>}
                      {projet.link && <a href={projet.link}><button className="h-full py-1 text-black">https://</button></a>}
                    </div>
                  </div>
                {/*<a href={`/product/${projet.title}`}> */}
                  <img id="testImage2" className="border-2 max-w-[40%] h-[80vh] overflow-clip object-cover object-center" src={projet.image1} alt="visuel principal de l'article"></img> 
                {/*</a> */} 
             </div>
            </>
           ))}
         </div>
    </div>
  );
}
