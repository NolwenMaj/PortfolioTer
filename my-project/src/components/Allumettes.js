

export default function Allumettes(){
    let nbrPlayer = 0
    let allumettesTas = 0
    let number = 0
    let player = 1
    
    function initialisation(){
    
        nbrPlayer = prompt(" A combien voulez vous jouer ? ", 2);
        allumettesTas = 50
        document.getElementById("allumettesRestantes").innerHTML = "Allumettes restantes : " + allumettesTas
        document.getElementById('joueurOn').innerHTML= "Joueu.r.se " + player + ", à toi de jouer !";
    } 
    
    function retirerAllumettes (num) {
        num = document.getElementById("jeu").value 
        if (num != null && num <=6 && num >= 1){
            allumettesTas-=num 
            if (allumettesTas<=0) {
             document.getElementById("allumettesRestantes").innerHTML = "Joueu.r.se " + player + " as gagné !"
             document.getElementById("playNow").innerHTML = "Rejouer !"
            }
            else {document.getElementById("allumettesRestantes").innerHTML = "Allumettes restantes : " + allumettesTas
                if (player<nbrPlayer){
                    player +=1
                }
                else if (nbrPlayer == player){
                    player =1
                }
                document.getElementById('joueurOn').innerHTML= "Joueu.r.se " + player + ", à toi de jouer !";
            }  
        }
            
    }
    
    return(
    <section id="game">
        <div class="divs"> 
            <h1> ALLUMETTES </h1>
            <h2>Il y a un tas de 50 allumettes. Chacun à son tour, les joueu.r.euse.s ôtent obligatoirement entre 1 et 6 allumettes. Celui qui ôte la dernière allumette gagne.</h2>
            <button class = "buttons" id="playNow" onclick=" initialisation()"> Jouons ! </button>    
        </div>      
        <div id="input">
            <label class="texteBasique" for="jeu" id="min"> 1 inférieur à  </label>
            <input id="jeu" type="number" name="jeu" min="1" max="6" autocomplete ="off" onfocus=" "></input>
            <label class="texteBasique" for="jeu" id="max"> inférieur à 6 </label>
            <input class="buttons" type="submit" id = "send" onclick="retirerAllumettes()"></input>
        </div>
        <div class="divs">
            <p id= "allumettesRestantes" class="texteBasique" ></p>
            <p id="joueurOn" class="texteBasique"></p>
        </div> 
    </section>  
    )
}