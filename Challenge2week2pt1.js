function countVowels(text) {
    const vowels = ["a", "e", "i", "o", "u"];
    const result = [];
    let counter = 0;
    for (let letter of text) {
        if (vowels.includes(letter)) {
            result.push(letter);
            counter++;
        }
    }
    console.log(result);

    const reSult = [];
    const strArr = text.toLowerCase().split("").sort().join("").match(/(.)\1+/g);

    if (strArr != null) {
        strArr.forEach((elem) => {
            reSult.push(elem[0]);
        });
        console.log(reSult.length);
    }

}