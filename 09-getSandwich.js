const getSandwich = (str) => {
    let firstBread = str.indexOf("bread");
    let lastBread = str.lastIndexOf("bread");
    
    if (firstBread !== -1 && lastBread !== -1 && firstBread !== lastBread) {
        return str.substring(firstBread + 5, lastBread);
    }
    return "";
}

module.exports = getSandwich;