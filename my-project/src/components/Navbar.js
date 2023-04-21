import Link from "next/link";
import React, { useEffect, useState } from "react";
import data from "../object.json";

export default function Navbar() {
  const [projets, setProjets] = useState(data);
  return (
    <div className="fixed bottom-[2dvh] w-full text-sm justify-center font-display z-10 flex flex-row sm:items-center  sm:sticky sm:bottom-full sm:top-4 sm:text-lg">
      <div className="flex flex-row space-x-4 w-3/4 h-10 justify-center ">
        <Link href="./#sectionApropos">
          <button className="sm:w-36 sm:h-12">à propos</button>
        </Link>
        <Link href="./#sectionContact">
          <button className="sm:w-36">contact</button>
        </Link>
        <div className="dropdown hidden sm:flex sm:flex-col">
          <button className="sm:w-36 ">projets</button>
          <div className="dropdown-content hidden sm:w-36 sm:h-full pb-3 ">
            <div className="flex flex-col-reverse sm:w-36 bg-white/75">
              {projets.map((projet) => (
                <Link key={projet.id} href={`./#section_${projet.id}`}>
                  <p className="text-black text-sm p-2 cursor-pointer hover:text-[#F2511B] hover:font-medium">
                    {projet.title}{" "}
                    <span className="text-xs font-thin">- {projet.techno}</span>
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Link href={`./#section_${projets.length}`}>
          <button className="sm:hidden flex">projets</button>
        </Link>
      </div>
    </div>
  );
}
