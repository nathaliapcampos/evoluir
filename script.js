const tempoEmMinutos = 500;
const blocosTempo = Math.floor(tempoEmMinutos / 30);
console.log("Blocos de Tempo:", blocosTempo);

let xp=0;
let tipoDeQuest;
if (tempoEmMinutos <= 120) { 
    tipoDeQuest = "Anomalia";
    if (blocosTempo === 0 ){
        xp = 30;
        }  else {
            xp = blocosTempo * 30;
        }}

//Titã
else if (tempoEmMinutos >= 480) {
    tipoDeQuest = "Titã";

    const blocosExtras = blocosTempo - 16;
    xp = 1440 + (blocosExtras * 240);
}


// Guardião
else {
    tipoDeQuest = "Guardião";

    const blocosExtras = blocosTempo - 4;
    xp = 240 + (blocosExtras * 80);

}

console.log("Tipo de Quest:", tipoDeQuest);
console.log("xp:", xp);


// Regra de XP para uma Anomalia

