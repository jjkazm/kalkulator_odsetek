'use strict';
function oblicz() {
    var wplata = parseInt(document.getElementById('wplata').value);
    var iloscLat = parseInt(document.getElementById('ilosc_lat').value);
    var okresKapitalizacji = parseInt(document.getElementById('okres_kapitalizacji').value);
    var oprocentowanie = parseInt(document.getElementById('oprocentowanie').value) / 100;
    var podatek = (document.getElementById('podatek').checked);
    var wynik;
    if (podatek) {
        wynik = (wplata * Math.pow((1 + oprocentowanie / okresKapitalizacji*0.81), (okresKapitalizacji * iloscLat)));
        
    } else {
        wynik = wplata * Math.pow((1 + oprocentowanie / okresKapitalizacji), (okresKapitalizacji * iloscLat));
    }
    document.getElementById("rezultat").innerHTML = wynik.toFixed(2);
}
document.getElementById('oblicz').onclick = oblicz;