let zahlen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let ergebnis = 0;
for (let i = 0; i < zahlen.length; i++) {
    if (zahlen[i] % 2 == 0) {
        ergebnis += zahlen[i];
    }
}

console.log(ergebnis);
