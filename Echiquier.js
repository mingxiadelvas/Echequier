/*Ming-Xia Delvas
2018-02-02
Le code permet d'imprimer l'échiquier 
*/
var largeur = 6; //Largeur de ma chaine de caractère
var hauteur = 3; 
var N = 8; //Grandeur de mon échiquier

var blanc = ""; 
var noire = "";

var miniBlockBlanc = ""; //Chaine de caractère pour mes espaces
var miniBlockNoir = ""; //Chaine de caractèere pour mes 
var echiquier = "";

for(var a=0; a<largeur; a++){ //Faire mon block noir et blanc
    miniBlockNoir += "#";
    miniBlockBlanc += " ";
}

for(var i=0; i<N; i++){
 //Rajouter un bloc blanc ou noir dépendemment de mon i
    if(i%2==0){
       blanc += miniBlockBlanc;
        noire += miniBlockNoir;
    } else {
        noire += miniBlockBlanc;
        blanc += miniBlockNoir;
    }
}

//rajoute saut de ligne dans la chaine de caractère
blanc+="\n";
noire+="\n";

//Créer des blocks de trois lignes

for(var k=0; k<N; k++){
//Si pair = hauteur*ligne blanc sinon  ligne noire*hauteur
    if(k%2==0){
       for(var l=0; l<hauteur; l++){
           echiquier+=blanc;
       }
    } else {
        for(var m=0; m<hauteur; m++){
            echiquier+=noire;
        }
    }

}
print(echiquier);

