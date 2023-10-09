console.log(document.title);

//1
let gen1 = document.getElementById('gen-1');
gen1.innerHTML = 'Generation 1 Pokimon';

//2
let gen1Group = document.querySelector('.infocard-list');
let gen1Cards = gen1Group.querySelectorAll('.infocard');
for (let i = 0; i < gen1Cards.length; i++) {
    gen1Cards[i].style.backgroundColor = "#F9F77A";
}

//3
let urlPagina = document.URL;
console.log(`La URL de la página es ${urlPagina}`);

//4
let dominioPagina = location.hostname;
console.log(`El dominio de la página es ${dominioPagina}`);

//5
let imagenes = document.getElementsByTagName('img');
for (let i = 0; i < imagenes.length; i++) {
    console.log(imagenes[i]);
}

//6
for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].src = 'https://media.giphy.com/media/2v170e71aanfi/giphy.gif';
}

//7
let cajetines = document.getElementsByClassName('infocard-lg-data text-muted');
for (let i = 0; i < cajetines.length; i++) {
    if (cajetines[i].innerHTML.includes('Flying')) {
        cajetines[i].style.backgroundColor = '#666';
    }
}
