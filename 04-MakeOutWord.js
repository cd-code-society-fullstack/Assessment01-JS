const makeOutWord = (out, word) => {
    return out.substring(0, 2) + word + out.substring(2);
}

module.exports = makeOutWord;