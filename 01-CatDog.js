const catDog = (str)=> {
    let cats = str.match(/cat/g) || [];
    let dogs = str.match(/dog/g) || [];
    return cats.length === dogs.length;
}
 module.exports = catDog;