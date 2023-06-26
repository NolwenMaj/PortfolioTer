import Image from 'next/image';
import Icon from '@mdi/react';
import { mdiArrowTopRight } from '@mdi/js';
import { mdiRayStartArrow } from '@mdi/js';
import { mdiArrowURightBottom } from '@mdi/js';
import { mdiGamepadSquare } from '@mdi/js';
import { mdiMapMarkerAlert } from '@mdi/js';



export default function Informations(){
    return(
        <>
            <div id="sectionApropos" className="font-display w-full min-h-screen flex py-24 justify-center">
                <div className="flex flex-col justify-center items-center w-2/3 space-y-24">
                        <div className="flex sm:flex-row flex-col gap-4">
                            <div className="flex sm:flex-row flex-col sm:items-center items-start gap-6">
                                    <h1 className="text-4xl text-[#F2511B] font-medium ">A PROPOS </h1> 
                                    <div className="flex flex-row space-x-10 sm:space-x-4">
                                     <div className="flex flex-row  font-semibold text-2xl">
                                        <p>CV</p>
                                        <a target="_blank" href="https://drive.google.com/file/d/1Du1Wwb-06d6GmwmOcmC79Rvm4H3NAm5n/view?usp=sharing"><Icon className=" hover:animate-bounce" path={mdiArrowTopRight} size={1} /></a>
                                    </div>
                                    <div className="flex flex-row">
                                        <Image 
                                            src ="/pictoGit.png"
                                            height={30}
                                            width={30}
                                            alt="logo Linkedin"/>
                                        <a target="_blank" href="https://github.com/NolwenMaj"><Icon className="hover:animate-bounce" path={mdiArrowTopRight} size={1} /></a>
                                    </div>
                                    </div>
                            </div>
                        </div>
                        <div className="flex flex-col sm:grid sm:grid-cols-4 gap-10 font-thin ">
                        <div className="flex flex-col gap-4">
                            <h2 className=" font-bold  text-xl"><span><Icon path={mdiRayStartArrow} size={2}/></span>POINT DE DÉPART : LE DESIGN  </h2> 
                            <p> J’ai étudié le Design d’espace, orienté Eco-Social, à l’Ecole Supérieure d’Art et de Design de Valenciennes. La pédagogie orientée projet de l’école m’a permis de développer de multiples compétences en <b>graphisme</b>, <b>méthodologies de recherche</b>, <b>prototypage</b>, et <b>gestion de projet</b>. 
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h2 className=" font-bold  text-xl"><span><Icon path={mdiArrowURightBottom} size={2} /></span>VIRAGE : LE DÉVELOPPEMENT D’APPLICATIONS </h2>
                            <p>J’avais envie de comprendre le monde parallèle que constitue le numérique dans nos vie, alors j’ai pris la décision de me reconvertir. Pas n’importe où : à Ada Tech School, une école du numérique inclusive, avec une pédagogie orientée projet de groupes, un cadre bienveillant tout cela en format “long” de 9 mois de cours suivis de 12 mois d’alternance.
                            Je m’épanouis en Front mais je ne boude pas le Back ! 
                            <b> J’aime débugger, l’algorithmie, le clean code et la conception de base de donnée relationnelle.</b>
                            </p>
                        </div>
                        
                        <div className="flex flex-col gap-4">
                            <h2 className=" font-bold  text-xl"><span><Icon path={mdiGamepadSquare} size={2} /></span>PAYSAGE : CONCEPTION LUDIQUE</h2>
                            <p> <b>J’aime les jeux : y jouer, en étudier, en critiquer, en conseiller, en illustrer et bien sûr en concevoir.</b> Ainsi, j’ai eu l’occasion développer un ensemble de compétences de la conception de la mécanique de jeu, au prototypage en passant par l'illustration lors de la conception et prototypage de plusieurs jeux :
                                - le projet « Les Récréateurs » comprenant un ensemble de jeux pour faciliter la participation citoyenne en urbanisme, réalisés en binôme dans le cadre de mon Diplôme National Supérieur d'Expression Plastique.
                                - une variété de prototypes de jeux sérieux, du jeu de carte à l'escape game lors de mon service civique auprès de l'association d'architectes de quartier ICI !
                                - le jeu de société Mola Mola, en cours.</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h2 className=" font-bold  text-xl"><span><Icon path={mdiMapMarkerAlert} size={2} /></span>PROCHAIN ARRÊT : L'ALTERNANCE DE MES RÊVES</h2>
                            <p>Je cherche une alternance, en <b>contrat d'apprentissage</b>, d'un an à partir de septembre, au <b>rythme 4jours en entreprise / 1jour </b>(vendredi)<b> à l'école</b>. Je souhaite travailler pour des entreprise de <b>l'ESS, de la transition écologique ou dans les services publics</b>. N'hésitez pas à me contacter si mon profil vous parle !</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}