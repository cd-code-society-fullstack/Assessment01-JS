const nTwice = (str, n) => {
    return str.substring(0, n) + str.substring(str.length - n);
}

module.exports = nTwice;
