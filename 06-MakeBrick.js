const makeBricks = (small, big, goal)=>{
    let maxBigLength = big * 5;
    if (maxBigLength > goal) {
        maxBigLength = Math.floor(goal / 5) * 5;
    }
    return goal - maxBigLength <= small;
}

module.exports = makeBricks;