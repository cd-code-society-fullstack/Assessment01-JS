const evenlySpaced = (a, b, c) => {
    let arr = [a, b, c];
    arr.sort((a, b) => a - b);
    
    if (arr[1] - arr[0] === arr[2] - arr[1]) {
        return true;
    }
    return false;
}

module.exports = evenlySpaced;