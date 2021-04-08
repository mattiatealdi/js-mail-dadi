var numPlayer;
var numComputer;

numPlayer = Math.ceil(Math.random() * 6);
console.log(numPlayer);
numComputer = Math.ceil(Math.random() * 6);
console.log(numComputer);

var computerWins = "Hai perso";
var playerWins = "Hai vinto";
var tie = "Nessuno ha vinto"

introMsg = "Vince chi genera il numero più grande!"
document.getElementById('intro').innerHTML= introMsg;

if(numPlayer > numComputer){
    document.getElementById('msg').innerHTML =playerWins
}else if(numPlayer < numComputer){
    document.getElementById('msg').innerHTML = computerWins;
}else{
    document.getElementById('msg').innerHTML = tie;
}