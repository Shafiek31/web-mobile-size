/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

var knop = document.querySelector(".filterlijst");
var aside = document.querySelector('aside');
var downloadToggle = document.querySelector('#download-toggle');
var balkRood = document.querySelector('.balk.rood');
var resultaat = document.querySelector('.download-resultaat');
var melding = document.querySelector('.melding');
var pijl = document.querySelector('.reactie-pijl');

//filter open
function filterAside() {
    aside.classList.add('open');
}

//filter gesloten
function closeFilter(e) {
    if (e.target.tagName === 'ASIDE') {
        aside.classList.remove('open');
    }
}

knop.addEventListener('click', filterAside);
aside.addEventListener('click', closeFilter);


//Event: Het klik-event, wat is er gebeurd, ik heb geklikt
function download(e) {

    //Target is het element waar ik op heb geklikt
    //Hulp bron: https://developer.mozilla.org/en-US/docs/Web/API/Event/target
    e.target.src = '/image/png/html-iconen_Tekengebied 1 kopie 12.png';
    balkRood.classList.add("animated");

    //Hier wacht die 1 sec
    setTimeout(function () {
        resultaat.innerHTML = "U heeft dit verhaal gedownload";

        melding.classList.remove('invisible');
        melding.classList.add('bounce');

    }, 1000);

}
downloadToggle.addEventListener('click', download);

function reactieErbij() {
    //Dit gebeurt pas als je klikt, het gaat gelijk met de sectie mee
    var berichten = document.querySelector('.bericht');
    berichten.classList.add('active');
}

pijl.addEventListener('click', reactieErbij);
