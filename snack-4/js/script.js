//SNACK 4

//mi creo una funzione generica che mmi permetta di ottenere dei  numeri random.
function numeriRandom(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

//creo un array di squadre di calcio con le relative caratteristiche
const squadre =[
    { nome: 'Juventus', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Inter', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Milan', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Napoli', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Roma', puntiFatti: 0, falliSubiti: 0 }
];

