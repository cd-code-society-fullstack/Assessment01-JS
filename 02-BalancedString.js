const balancedString = (str) => {
    let words = str.split(' ');
    let wordCounts = {};

    for (let word of words) {
        if (wordCounts[word]) {
            wordCounts[word]++;
        } else {
            wordCounts[word] = 1;
        }
    }

    let counts = Object.values(wordCounts);
    return counts.every(count => count === counts[0]);
}

module.exports = balancedString;