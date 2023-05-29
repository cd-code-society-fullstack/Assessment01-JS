const bobThere = (str) => {
    for (let i = 0; i < str.length - 2; i++) {
        if (str[i] === 'b' && str[i + 2] === 'b') {
            return true;
        }
    }
    return false;
}

module.exports = bobThere;
