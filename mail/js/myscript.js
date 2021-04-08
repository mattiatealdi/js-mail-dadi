var arrayMail = [
    "enniomorriconi@gmail.com",
    "mattiatealdi@gmail.com",
    "alicecavalli@libero.it",
    "sabrinamondellini@polimi.it"
]

var mailUtente;

mailUtente = prompt("Inserire la propria mail");

var isIn = false;

for(i = 0; i < arrayMail.length; i++){
    mailCorrente = arrayMail[i];
    if(mailUtente == mailCorrente){
        isIn = true
        break;
    }
}

presente = "La mail è presente nel database!";
nonpresente = "La mail non è presente nel database :("

if(isIn == true){
    document.getElementById('presente').innerHTML =presente;
}else{
    document.getElementById('presente').innerHTML =nonpresente;
}