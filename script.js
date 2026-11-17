function calcularQuest(tempoEmMinutos){

const blocosTempo = Math.floor(tempoEmMinutos / 30);
let xp;
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

return {tipo: TipoDeQuest, xp: xp};

}

console.log(calcularQuest(20));
console.log(calcularQuest(120));
console.log(calcularQuest(121));
console.log(calcularQuest(479));
console.log(calcularQuest(480));
console.log(calcularQuest(630));