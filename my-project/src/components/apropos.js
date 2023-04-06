export default function Apropos (){
    return(
        <>
            <div id="sectionApropos" className="h-24"></div>
            <div className="w-full min-h-screen flex pt-12 justify-center bg-slate-50">
                <div className="flex flex-col justify-center items-center w-2/3 space-y-24">
                        <div className="flex flex-row gap-4">
                            <h1 className="text-4xl text-[#F2511B] font-medium">A PROPOS </h1>
                            <span><a target="_blank" href="https://www.linkedin.com/in/nolwenmajorfrances/"><button className="text-sm w-24">LINKEDIN</button></a>
                            </span>
                            <span>
                            <a target="_blank" href="https://www.linkedin.com/in/nolwenmajorfrances/"><button className="text-sm w-24">CV</button></a>
                            </span>
                            <span>
                            <a target="_blank" href="https://www.linkedin.com/in/nolwenmajorfrances/"><button className="text-sm w-24" >GITHUB</button></a>
                            </span>
                        </div>
                        <div className=" grid grid-cols-3 gap-12 font-thin ">
                        <div className="flex flex-col gap-4">
                            <h2 className=" font-bold  text-xl">  🚦POINT DE DÉPART : LE DESIGN  </h2>
                            <p> J’ai étudié le Design d’espace, orienté Eco-Social, à l’Ecole Supérieure d’Art et de Design de Valenciennes. La pédagogie orientée projet de l’école m’a permis de développer de multiples compétences en <b>graphisme</b>, <b>méthodologies de recherche</b>, <b>prototypage</b>, et <b>gestion de projet</b>. 
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h2 className=" font-bold  text-xl">  ↪️ VIRAGE : LE DÉVELOPPEMENT D’APPLICATIONS </h2>
                            <p>J’avais envie de comprendre le monde parallèle que constitue le numérique dans nos vie, alors j’ai pris la décision de me reconvertir. Pas n’importe où : à Ada Tech School, une école du numérique inclusive, avec une pédagogie orientée projet de groupes, un cadre bienveillant tout cela en format “long” de 9 mois de cours suivis de 12 mois d’alternance.
                            Je m’épanouis en Front mais je ne boude pas le Back ! 
                            <b> J’aime débugger, l’algorithmie, le clean code et la conception de base de donnée relationnelle.</b>
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h2 className=" font-bold  text-xl" > 🧩 PAYSAGE : CONCEPTION LUDIQUE</h2>
                            <p> <b>J’aime les jeux : y jouer, en étudier, en critiquer, en conseiller, en illustrer et bien sûr en concevoir.</b> Ainsi, j’ai eu l’occasion développer un ensemble de compétences de la conception de la mécanique de jeu, au prototypage en passant par l'illustration lors de la conception et prototypage de plusieurs jeux :
                                - le projet « Les Récréateurs » comprenant un ensemble de jeux pour faciliter la participation citoyenne en urbanisme, réalisés en binôme dans le cadre de mon Diplôme National Supérieur d'Expression Plastique.
                                - une variété de prototypes de jeux sérieux, du jeu de carte à l'escape game lors de mon service civique auprès de l'association d'architectes de quartier ICI !
                                - le jeu de société Mola Mola, en cours.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}