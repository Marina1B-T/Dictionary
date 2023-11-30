const whom = document.querySelector('#whom');
const enormity = document.querySelector('#enormity');
const handkerchief = document.querySelector('#handkerchief');
const zucchini = document.querySelector('#zucchini');
const jewelry = document.querySelector('#jewelry');
const avocado = document.querySelector('#avocado');
const agrochemical = document.querySelector('#agrochemical');
const laugh = document.querySelector('#laugh');
const through = document.querySelector('#through');
const live = document.querySelector('#live');
const t1 = document.querySelector('#t1');
const t2 = document.querySelector('#t2');
const text1 = document.querySelector('#text1');
const text2 = document.querySelector('#text2');
const btn = document.querySelector('#botao');
const modal = document.querySelector('#modal');
const dialogo = document.querySelector('.dialogo');
const frase = document.querySelector('#pessoa1');
const conto = document.querySelector('#conto')
const d1 = document.querySelector('#definicaoe');
const d2 = document.querySelector('#definicaop');
const close = document.querySelector('#close');
const audio1 = document.querySelector('#audioe');
const audio2 = document.querySelector('#audiop');
const whoma = new Audio('./audio/whom.ogg');
const aquem = new Audio('./audio/a quem.ogg');
const avocadoa = new Audio('./audio/avocado.ogg');
const abacate = new Audio('./audio/abacate.ogg');
const througha = new Audio('./audio/through.ogg');
const atraves = new Audio('./audio/através.ogg');
const enormitya = new Audio('./audio/enormity.ogg');
const enormidade = new Audio('./audio/enormidade.ogg');
const laugha = new Audio('./audio/laugh.ogg');
const risada = new Audio('./audio/risada.ogg');
const jewelrya = new Audio('./audio/jewelry.ogg');
const joia = new Audio('./audio/joia.ogg');
const handkerchiefa = new Audio('./audio/handkerchief.ogg');
const lenco = new Audio('./audio/lenço.ogg');
const zucchinia = new Audio('./audio/zucchini.ogg');
const abobrinha = new Audio('./audio/abobrinha.ogg');
const livea = new Audio('./audio/live.ogg');
const aovivo = new Audio('./audio/ao vivo.ogg');
const agrochemicala = new Audio('./audio/agrochemical.ogg');
const agroquimico = new Audio('./audio/agroquímico.ogg');
let visibilidade = true;

function ocultarExibir(){
    if(visibilidade){
        dialogo.style.visibility = "visible";
        visibilidade = false;
        btn.innerHTML = "&#9650;";
    }
    else{
        dialogo.style.visibility = "hidden";
        visibilidade = true;
        btn.innerHTML = "&#9660;";
    }
}
btn.addEventListener('click', (e) => {
    ocultarExibir();

})

close.addEventListener('click', (e) => {
    e.preventDefault();

    modal.style.visibility = "hidden";
    audio1.removeEventListener('mouseover', audioIngles);
    audio2.removeEventListener('mouseover', audioPortugues);
})

let audioIngles;
let audioPortugues;
whom.addEventListener('click', (e) => {
    e.preventDefault();

    modal.style.visibility = "visible";
    t1.textContent = "Whom";
    t2.textContent = "A quem";
    d1.textContent = "Pronoun";
    d2.textContent = "Pronome";
    text1.textContent = "Used instead of “who” as the object of a verb or preposition. ";
    text2.textContent = "Qualquer pessoa que; alguém que.";
    frase.textContent = " ” They are the neighbors with whom I spoke.” "
    conto.textContent = " Ethan caminhava pelo circo abandonado em seus sonhos, onde risadas ecoavam entre as tendas sombrias. “A quem pertence esse lugar?“, ele se perguntou, ajustando nervosamente o lenço em volta do pescoço."

    audio1.addEventListener('mouseover', audioIngles = function() {
        whoma.play();
    })
    audio2.addEventListener('mouseover', audioPortugues = function() {
        aquem.play();
    })
})

enormity.addEventListener('click', (e) => {
    e.preventDefault();

    modal.style.visibility = "visible";
    t1.textContent = "Enormity";
    t2.textContent = "Enormidade";
    d1.textContent = "Noun";
    d2.textContent = "Substantivo";
    text1.textContent = "The great or extreme scale, seriousness, or extent of something perceived as bad or morally wrong. ";
    text2.textContent = "Excesso de grandeza; desmesura.";
    frase.textContent = " ” We were shocked at the enormity of the crime.” "
    conto.textContent = "”Quem é você? O que está fazendo nos meus sonhos?”, questionou Ethan, sentindo um arrepio percorrer sua espinha ao encarar tamanha enormidade."

    audio1.addEventListener('mouseover', audioIngles = function() {
        enormitya.play();
    })
    audio2.addEventListener('mouseover', audioPortugues = function() {
        enormidade.play();
    })
})

handkerchief.addEventListener('click', (e) => {
    e.preventDefault();

    modal.style.visibility = "visible";
    t1.textContent = "Handkerchief";
    t2.textContent = "Lenço";
    d1.textContent = "Noun";
    d2.textContent = "Substantivo";
    text1.textContent = "A square of cotton or other finely woven material, typically carried in one's pocket and intended for blowing or wiping one's nose. ";
    text2.textContent = "Peça de tecido que serve, principalmente, para assoar o nariz: lenço de bolso.";
    frase.textContent = " ” She would spit on her handkerchief and scrub my face clean.”  "
    conto.textContent = "De repente, uma figura enigmática apareceu, segurando um lenço manchado."

    audio1.addEventListener('mouseover', audioIngles = function() {
        handkerchiefa.play();
    })
    audio2.addEventListener('mouseover', audioPortugues = function() {
        lenco.play();
    })
})

zucchini.addEventListener('click', (e) => {
    e.preventDefault();

    modal.style.visibility = "visible";
    t1.textContent = "Zucchini";
    t2.textContent = "Abobrinha";
    d1.textContent = "Noun";
    d2.textContent = "Substantivo";
    text1.textContent = "A green variety of smooth-skinned summer squash. ";
    text2.textContent = " Variedade de abóbora pequena usada para fins culinários antes de ser amadurecida";
    frase.textContent = " ” Fry the zucchini, then season.” "
    conto.textContent = "A batalha se desenrolou em um campo vasto, coberto por abacates e abobrinhas deformados. "

    audio1.addEventListener('mouseover', audioIngles = function() {
        zucchinia.play();
    })
    audio2.addEventListener('mouseover', audioPortugues = function() {
        abobrinha.play();
    })
})

jewelry.addEventListener('click', (e) => {
    e.preventDefault();

    modal.style.visibility = "visible";
    t1.textContent = "Jewelry";
    t2.textContent = "Jóia";
    d1.textContent = "Noun";
    d2.textContent = "Substantivo";
    text1.textContent = "Personal ornaments, such as necklaces, rings, or bracelets, that are typically made from or contain jewels and precious metal. ";
    text2.textContent = "Objeto de material precioso finamente trabalhado, us. como adorno.";
    frase.textContent = " ” Looks like a piece of jewelry to me.” "
    conto.textContent = "Com determinação, Ethan lembrou-se de uma joia brilhante que trazia consigo. ”Minha avó sempre disse que essa joia tinha o poder de purificar. Talvez seja a chave para restaurar a beleza dos meus sonhos.”"

    audio1.addEventListener('mouseover', audioIngles = function() {
        jewelrya.play();
    })
    audio2.addEventListener('mouseover', audioPortugues = function() {
        joia.play();
    })
})

avocado.addEventListener('click', (e) => {
    e.preventDefault();

    modal.style.visibility = "visible";
    t1.textContent = "Avocado";
    t2.textContent = "Abacate";
    d1.textContent = "Noun";
    d2.textContent = "Substantivo";
    text1.textContent = "A pear-shaped fruit with a rough leathery skin, smooth oily edible flesh, and a large stone. ";
    text2.textContent = "Fruto do abacateiro; abacado, pera-de-advogado.";
    frase.textContent = " ” Avocado is my favorite fruit!” "
    conto.textContent = "A batalha se desenrolou em um campo vasto, coberto por abacates e abobrinhas deformados. "

    audio1.addEventListener('mouseover', audioIngles = function() {
        avocadoa.play();
    })
    audio2.addEventListener('mouseover', audioPortugues = function() {
        abacate.play();
    })
})
agrochemical.addEventListener('click', (e) => {
    e.preventDefault();

    modal.style.visibility = "visible";
    t1.textContent = "Agrochemical";
    t2.textContent = "Agroquímico";
    d1.textContent = "Noun";
    d2.textContent = "Substantivo";
    text1.textContent = "A chemical used in agriculture, such as a pesticide or a fertilizer.";
    text2.textContent = "Relativo ou pertencente à agroquímica.";
    frase.textContent = " ” Certain agrochemicals such as urea are often supplied in prilled form.” "
    conto.textContent = "A risada sinistra ainda ecoava, uma lembrança de que a luta contra os agroquímicos da negatividade era contínua."

    audio1.addEventListener('mouseover', audioIngles = function() {
        agrochemicala.play();
    })
    audio2.addEventListener('mouseover', audioPortugues = function() {
        agroquimico.play();
    })
})

laugh.addEventListener('click', (e) => {
    e.preventDefault();

    modal.style.visibility = "visible";
    t1.textContent = "Laugh";
    t2.textContent = "Risada";
    d1.textContent = "Verb";
    d2.textContent = "Substantivo";
    text1.textContent = "Make the spontaneous sounds and movements of the face and body that are the instinctive expressions of lively amusement and sometimes also of contempt or derision. ";
    text2.textContent = "Ação ou efeito de rir, de achar algo engraçado e contrair os músculos da face expressando alegria.";
    frase.textContent = " ” I thought they were laughing at me because I was ugly.”  "
    conto.textContent = "”Bem-vindo, Ethan. Estava esperando por você”, disse a figura com uma risada sinistra."
    audio1.addEventListener('mouseover', audioIngles = function() {
        laugha.play();
    })
    audio2.addEventListener('mouseover', audioPortugues = function() {
        risada.play();
    })
})

through.addEventListener('click', (e) => {
    e.preventDefault();

    modal.style.visibility = "visible";
    t1.textContent = "Through";
    t2.textContent = "Através";
    d1.textContent = "Adverb";
    d2.textContent = "Advérbio";
    text1.textContent = "Expressing movement into one side and out of the other side of an opening, channel, or location. ";
    text2.textContent = "De lado, de través, transversalmente, de atravessado.";
    frase.textContent = " ” We drove through red traffic lights.” "
    conto.textContent = "Ao confrontar seus próprios demônios internos, Ethan finalmente neutralizou a influência negativa através de sua persistência."

    audio1.addEventListener('mouseover', audioIngles = function() {
        througha.play();
    })
    audio2.addEventListener('mouseover', audioPortugues = function() {
        atraves.play();
    })
})

live.addEventListener('click', (e) => {
    e.preventDefault();

    modal.style.visibility = "visible";
    t1.textContent = "Live";
    t2.textContent = "Ao vivo";
    d1.textContent = "Verb";
    d2.textContent = "Verbo";
    text1.textContent = "Make one's home in a particular place or with a particular person.";
    text2.textContent = "Com presença do público ou com transmissão no momento em que acontece";
    frase.textContent = " ” She has lived here for 10 years.” "
    conto.textContent = "Ethan estava determinado a cultivar pensamentos positivos e superar os obstáculos que surgiriam ao vivo em sua jornada pela paz interior."

    audio1.addEventListener('mouseover', audioIngles = function() {
        livea.play();
    })
    audio2.addEventListener('mouseover', audioPortugues = function() {
        aovivo.play();
    })
})