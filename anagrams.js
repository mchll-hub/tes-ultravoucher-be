function groupAnagrams(words) {
    const anagrams = {};

    for (let i = 0; i < words.length; i++) {
        let word = words[i];

        let sortedWord = sortWord(word);

        if (anagrams[sortedWord] === undefined) {
            anagrams[sortedWord] = [];
        }
        anagrams[sortedWord].push(word);
    }
    let result = [];
    for (let key in anagrams) {
        result.push(anagrams[key]);
    }
    return result;
}

function sortWord(word) {
    let characters = [];
    for (let i = 0; i < word.length; i++) {
        characters.push(word[i]);
    }

    for(let i = 0; i < characters.length; i++) {
        for (let j = i + 1; j < characters.length; j++) {
            if (characters[i] > characters[j]) {
                let temp = characters[i];
                characters[i] = characters[j];
                characters[j] = temp;
            }
        }
    }

    let sortedWord = "";
    for (let i = 0; i < characters.length; i++) {
        sortedWord += characters[i];
    }
    return sortedWord;
}

let words = ['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map'];
let groupedAnagrams = groupAnagrams(words);
console.log(groupedAnagrams);