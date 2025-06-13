//Pius hat bisschen geholfen

let input = "5 1 -2 -8 4 -5";
let zahlen = input.split(" ").map(Number);
let Betragzahlen = zahlen.map(Betrag);

function Betrag(zahl) {
    if (zahl < 0) {
        zahl * -1;
        return zahl;
    } else {
        return zahl;
    }
}

function nahnull(zahlen, Betragzahlen) {
    let nahezahl = zahlen[0];
    let nahebetrag = Betragzahlen[0];

    for (let index = 0; index < zahlen.length; index++) {
        if (Betragzahlen[index] < nahebetrag) {
            nahebetrag = Betragzahlen[index];
            nahezahl = zahlen[index];
        } else if (nahebetrag === Betragzahlen[index]) {
            if (zahlen[index] > nahezahl) {
                nahezahl = zahlen[index];
            }
        }
    }

    console.log(nahezahl);
    return nahezahl;
}

nahnull(zahlen, Betragzahlen);
