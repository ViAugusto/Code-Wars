function isPangram(str){
    const alphabet = new Set("abcdefghijklmnopqrstuvwxyz");

    const allLetters = new Set(str.toLowerCase().match(/[a-z]/g));

    for (let letter of alphabet) {
        if (!allLetters.has(letter)){
            return false;
        }
    }

    return true;
}

//Melhor solução que achei aqui
// function isPangram(string){
//     return 'abcdefghijklmnopqrstuvwxyz'
//       .split('')
//       .every((x) => string.toLowerCase().includes(x));
//   }
