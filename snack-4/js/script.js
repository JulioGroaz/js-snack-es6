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

// Impostazione di valori random per punti fatti e falli subiti
squadre.forEach(team => {
    team.puntiFatti = numeriRandom(0, 100);
    team.falliSubiti = numeriRandom(0, 100);
});

//estrappolo con map dall'array di squadre le caratteristiche nome e falli Subiti da oogni oggetto => creo partendo dall'estrapolazione un nuovo oggetto con le sole caratteristiche di nome e falliSubiti. 
const teamFalli = squadre.map(({nome, falliSubiti}) => ({nome, falliSubiti}));

//stampo i risultati 
console.log('tutte le squadre: ',squadre);
console.log('nomi delle squadre e falli subiti: ', teamFalli);

