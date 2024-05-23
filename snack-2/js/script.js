//SNACK 2:

const studentiFacoltà = [
    {
        id: 213,
        Name: 'Giuseppina della Rovere' ,
        Grades: 78,
    },

    {
        id: 110,
        Name: 'Paola Cortellesa',
        Grades: 96,
    },

    {
        id: 250,
        Name: 'Andrea Mantegna',
        Grades: 48,
    },

    {
        id: 145,
        Name: 'Gaia Borromini',
        Grades:74,
    },

    {
        id: 196,
        Name:'Luigi Grimaldell',
        Grades: 68,
    },

    {
        id: 102,
        Name: 'Piero della Francesca',
        Grades: 50,
    },

    {
        id: 120,
        Name: 'Francesca da Polenta ',
        Grades: 84,
    },
];
console.log(studentiFacoltà); //debugging

const nomiMaiuscoli = studentiFacoltà.map((student) => student.Name.toUpperCase());
console.log(nomiMaiuscoli);

const voto70 = studentiFacoltà.filter((voto) => voto.Grades > 70);
console.log(voto70);

const id120 = voto70.filter((iD) => iD.id > 120);
console.log(id120);

