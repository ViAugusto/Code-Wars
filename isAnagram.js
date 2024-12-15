function isAnagram(word1, word2){
    const normalize = (str) => str.toLowerCase().split('').sort().join('');

    return normalize(word1) === normalize(word2);
}