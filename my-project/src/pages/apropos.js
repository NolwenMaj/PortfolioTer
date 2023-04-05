import Header from "@/components/Header"

export default function Apropos (){
    return(
        <>
        <Header/>
        <div className="w-full min-h-screen flex justify-center pt-12 bg-slate-50">
        <div className="flex flex-col w-1/2 space-y-6">
        <h1 className="text-4xl text-[#F2511B] font-medium">A PROPOS </h1>
        <h2>  🚦POINT DE DÉPART : LE DESIGN  </h2>

       <p> J’ai étudié le Design d’espace, orienté Eco-Social, à l’Ecole Supérieure d’Art et de Design de Valenciennes. La pédagogie orientée projet de l’école m’a permis de développer de multiples compétences en graphisme, méthodologies de recherche, prototypage, et gestion de projet. 
        </p>

        <h2>  ↪️ VIRAGE : LE DÉVELOPPEMENT D’APPLICATIONS </h2>

        <p>J’avais envie de comprendre le monde parallèle que constitue le numérique dans nos vie, alors j’ai pris la décision de me reconvertir. Pas n’importe où : à Ada Tech School, une école du numérique inclusive, avec une pédagogie orientée projet de groupes, un cadre bienveillant tout cela en format “long” de 9 mois de cours suivis de 12 mois d’alternance.
        Je m’épanouis en Front mais je ne boude pas le Back ! 
        J’aime débugger, l’algorithmie, le clean code et la conception de base de donnée relationnelle.
        </p>

       <h2> 🧩 PAYSAGE : CONCEPTION LUDIQUE</h2>

       <p> J’aime les jeux : y jouer, en étudier, en critiquer, en conseiller, en illustrer et bien sûr en concevoir. Ainsi, j’ai eu l’occasion développer un ensemble de compétences de la conception de la mécanique de jeu, au prototypage en passant par l'illustration lors de la conception et prototypage de plusieurs jeux :
        - le projet « Les Récréateurs » comprenant un ensemble de jeux pour faciliter la participation citoyenne en urbanisme, réalisés en binôme dans le cadre de mon Diplôme National Supérieur d'Expression Plastique.
        - une variété de prototypes de jeux sérieux, du jeu de carte à l'escape game lors de mon service civique auprès de l'association d'architectes de quartier ICI !
        - le jeu de société Mola Mola, en cours.</p>

        <p>Pour en savoir plus sur mon parcours professionnel et compétences c’est ici  : </p>
        </div>
        </div>
        </>
    )
}