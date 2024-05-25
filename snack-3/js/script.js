const bici = [
    { nome: 'Bianchi Oltre XR4', peso: 7.2 },
    { nome: 'Pinarello Dogma F12', peso: 6.8 },
    { nome: 'Specialized S-Works Tarmac', peso: 7.0 },
    { nome: 'Canyon Ultimate CF SLX', peso: 6.7 },
    { nome: 'Trek Emonda SLR', peso: 6.5 }

];

// Bici con peso minore

let biciLeggera = bici[0];
bici.forEach(bicicletta => {
    if (bicicletta.peso < biciLeggera.peso) {
        biciLeggera = bicicletta;
    }
});
const { nome, peso } = biciLeggera;

console.log(nome, peso);