//SNACK 1:

const nomeTavolo = 'Tavolo Vip';

const vips =[
    'Brad Pitt', 
    'Johnny Depp', 
    'Lady Gaga', 
    'Cristiano Ronaldo', 
    'Georgina Rodriguez', 
    'Chiara Ferragni',  
    'George Clooney', 
    'Amal Clooney', 
    'Fedez', 
    'Amadeus', 
    'Fiorello'
];

const invitoTavolo = vips.map((invitato,index) =>{
    return{
        tableName: nomeTavolo,
        guestName: invitato,
        place: index + 1
    };
});

console.log(invitoTavolo);