
for (let i = 0; i <= 222; i++) {
    if (i % 5 == 0 && i % 7 == 0) {
        console.log("Foobar");
    } else if (i % 5 == 0) {
        console.log("Foo");
    } else if (i % 7 == 0) {
        console.log("Bar");
    }
    else {
        console.log(i);
    }
}
