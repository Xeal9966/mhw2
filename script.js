const a = document.querySelector('.box1');
for(let i=0; i<lista.length; i++){
    image= lista[i].img;
    nome=lista[i].nome;
    prezzo=lista[i].prezzo;
    icon=lista[i].icon;
    mostra=lista[i].show;
    desc=lista[i].des;

    const card=document.createElement('div');
    card.classList.add('card');
    card.classList.add('principale');
    const img=document.createElement('img');
    img.src=image;
    img.classList.add('pic');
    const intest=document.createElement('div');
    intest.classList.add('text');
    const title=document.createElement('span');
    title.textContent=nome;
    title.classList.add('nome');
    const acq=document.createElement('div');
    acq.classList.add('acquista');
    const pr=document.createElement('span');
    pr.textContent=prezzo;
    const ic=document.createElement('img');
    ic.src=icon;
    ic.classList.add('cart');
    const descrizione=document.createElement('div');
    descrizione.classList.add('comune');
    const show=document.createElement('h3');
    show.textContent=mostra;
    const testo=document.createElement('span');
    testo.textContent=desc;
    testo.classList.add('hidden');
    testo.classList.add('detail');

    a.appendChild(card);
    card.appendChild(img);
    card.appendChild(intest);
    intest.appendChild(title);
    title.appendChild(acq);
    acq.appendChild(pr);
    acq.appendChild(ic);
    intest.appendChild(descrizione);
    descrizione.appendChild(show);
    descrizione.appendChild(testo);
}

function mostradettagli(event) {
console.log("click");
const c=event.currentTarget.querySelector('h3');
const a=event.currentTarget.querySelector('.detail');
const b=event.currentTarget.querySelector('.hidden');

    if(b){
        a.classList.remove('hidden');
        c.textContent="Mostra meno";}
    else{
        a.classList.add('hidden');
        c.textContent="Mostra tutto";}
}

function aggiungicarrello(event) {
    let verifica=true;
    const d=document.querySelector('.carrello');
    const corr1=document.querySelector('.carrello, .hidden');
    if(corr1){
        d.classList.remove('hidden');
        document.querySelector('.carrellosecret').classList.add('hidden');
    }
    const a=event.currentTarget.parentNode.parentNode.parentNode.parentNode.querySelector('.pic');
    for(let i=0;i<array.length;i++){
        if(array[i]==a.src){
            verifica=false;
        }
    }
    if(verifica==true){
    const b=document.querySelector('.salvati');
    const nuovo=document.createElement('img');
    nuovo.classList.add('form');
    const x=document.createElement('span');
    x.textContent="X";
    x.classList.add('remove');
    x.addEventListener('click', rimuovicarrello);
    const card2=document.createElement('div');
    card2.classList.add('card2');
    nuovo.src=a.src;
    array.push(a.src);
    b.appendChild(card2);
    card2.appendChild(x);
    card2.appendChild(nuovo);
    }
}

function rimuovicarrello(event){
    console.log(array);
    const a = event.currentTarget.parentNode.querySelector('.form');
    for(let i=0;i<array.length;i++){
        if(array[i]==a.src){
        array.splice(i,1);
        }
    }
    event.currentTarget.parentNode.remove();
    console.log(array);
    if(array.length==0) document.querySelector('.carrello').classList.add('hidden');
}

function nascondicarrello(event){
    document.querySelector('.carrello').classList.add('hidden');
    document.querySelector('.carrellosecret').classList.remove('hidden');
}

function mostracarrello(){
    document.querySelector('.carrello').classList.remove('hidden');
    document.querySelector('.carrellosecret').classList.add('hidden');
}

function aggiornaelementi(event){
    var nomiprodotti=document.querySelectorAll('.nome');
    console.log("qui");
    var prodotti=document.querySelectorAll('.principale');
    for(let i=0;i<prodotti.length;i++){
        prodotti[i].classList.remove('hidden');
    }
    console.log("ok");
    for(let i=0;i<prodotti.length;i++){
        let a=nomiprodotti[i].textContent.toLowerCase();
        let b=event.target.value.toLowerCase();
        let count=0;
        if(a.includes(b)) count++;
        if(count==0) prodotti[i].classList.add('hidden');
        }
    console.log("fatto");
}

const dettagli=document.querySelectorAll('.comune');
for(dettaglio of dettagli){
dettaglio.addEventListener('click', mostradettagli);
}

let array=[];
const carrelli=document.querySelectorAll('.cart');
for(carrello of carrelli){
carrello.addEventListener('click', aggiungicarrello);
}

document.querySelector('.nascondi_carrello').addEventListener('click',nascondicarrello);
document.querySelector('.carrellosecret').addEventListener('click',mostracarrello);
document.querySelector('#input').addEventListener('input',aggiornaelementi);
