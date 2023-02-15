const saat = document.querySelector(".saat");
const isim = document.querySelector(".isim");
const cont = document.querySelector(".container");

let günler = ["PAZARTESİ", "SALI", "ÇARŞAMBA", "PERŞEMBE", "CUMA", "CUMARTESİ", "PAZAR"];

let sor = prompt("Lütfen İsminizi Giriniz...");

isim.innerHTML = `${sor}!`;
isim.style.color = `grey`;
isim.style.fontSize = `65px`;


function whatTime() {
    let saatKac = new Date();
    let st = saatKac.getHours()
    let dakika = saatKac.getMinutes();
    let saniye = saatKac.getSeconds();
    let gün = saatKac.getDay();
    // console.log(gün);
    saat.innerHTML = `${st}:${dakika < 10 ? "0" + dakika : dakika}:${saniye < 10 ? "0" + saniye : saniye} ${günler[gün-1 ]}`;
}

setInterval(whatTime); 



