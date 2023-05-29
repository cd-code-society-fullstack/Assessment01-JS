# 01 - CatDog

**Problem Statement**

You are given a string. Your task is to implement a function named `catDog` that returns `true` if the string "cat" and "dog" appear the same number of times in the given string, and `false` otherwise.

The `catDog` function should accept one parameter:
1. `str`: a string value.

Here are some examples:

- `catDog("catdog")` should return `true`, as "cat" and "dog" each appear once.

{Try It!}(node .guides/secure/01-CatDog/try-it-01.js)

- `catDog("catcat")` should return `false`, as "cat" appears twice but "dog" does not appear.

{Try It!}(node .guides/secure/01-CatDog/try-it-02.js)

- `catDog("1cat1cadodog")` should return `true`, as "cat" and "dog" each appear once.

{Try It!}(node .guides/secure/01-CatDog/try-it-03.js)

**Hint**

Use the `match()` method with a regular expression to find all occurrences of "cat" and "dog". The `match()` method returns an array of all matches, so you can compare the lengths of the arrays.

## Submit 

**Test Runner**
```
node .guides/secure/01-CatDog/testRunner.js
catdog -> true
catcat -> false
1cat1cadodog -> true
```

# O2 Balanced String

**Problem Statement**

You are given a string. Your task is to implement a function named `balancedString` that returns `true` if the number of occurrences of each rap artist's name in the given string are equal, and `false` otherwise. A name is considered as a sequence of non-space characters. The names are case sensitive and the order in which they appear doesn't matter.

The `balancedString` function should accept one parameter:
1. `str`: a string value.

Here are some examples:

- `balancedString("Tupac Biggie Tupac Biggie")` should return `true`, as "Tupac" and "Biggie" each appear twice.

{Try It!}(node .guides/secure/02-BalancedString/try-it-01.js)

- `balancedString("Tupac Tupac Biggie")` should return `false`, as "Tupac" appears twice but "Biggie" appears only once.

{Try It!}(node .guides/secure/02-BalancedString/try-it-02.js)

- `balancedString("Tupac Biggie Tupac Biggie Tupac")` should return `false`, as "Tupac" appears three times and "Biggie" appears twice.

{Try It!}(node .guides/secure/02-BalancedString/try-it-03.js)

- `balancedString("Tupac Tupac Tupac Biggie Biggie Biggie")` should return `true`, as "Tupac" and "Biggie" each appear three times.

{Try It!}(node .guides/secure/02-BalancedString/try-it-04.js)

**Hint**

To solve this problem, you'll first need to split the string into words using the `split()` method. Then, you can use a map (or object in JavaScript) to count the number of occurrences of each word. Finally, you need to ensure that all words have the same count.

**Solution**

Here is a JavaScript function that solves the problem:

```javascript
function balancedString(str) {
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

console.log(balancedString("Tupac Biggie Tupac Biggie")); // Expected output: true
console.log(balancedString("Tupac Tupac Biggie")); // Expected output: false
console.log(balancedString("Tupac Biggie Tupac Biggie Tupac")); // Expected output: false
console.log(balancedString("Tupac Tupac Tupac Biggie Biggie Biggie")); // Expected output: true
```

**Command Line Inputs**

If you were to use command line inputs to test this function, you would run the JavaScript file in Node.js, passing the test string as a command line argument like so:

```bash
node myScript.js "Tupac Biggie Tupac Biggie"
node myScript.js "Tupac Tupac Biggie"
node myScript.js "Tupac Biggie Tupac Biggie Tupac"
node myScript.js "Tupac Tupac Tupac Biggie Biggie Biggie"
```

In `myScript.js`, you would use `process.argv[2]` to access the string argument. You could then pass this argument to the `balancedString` function to test it.

# Make Tags

**Problem Statement**

In HTML, tags are used to format and style text. A tag is defined by angle brackets, `<` and `>`, surrounding a keyword such as `i` for italic, `b` for bold, `u` for underline, etc. Your task is to implement a function named `makeTags` that returns an HTML string with the specified tag around the word.

The `makeTags` function should accept two parameters:
1. `tag`: a string representing the HTML tag.
2. `word`: a string representing the word to be enclosed by the tag.

Here are some examples:

- `makeTags("i", "Yay")` should return `"<i>Yay</i>"`
- `makeTags("b", "Hello")` should return `"<b>Hello</b>"`
- `makeTags("u", "World")` should return `"<u>World</u>"`
- `makeTags("cite", "Quote")` should return `"<cite>Quote</cite>"`

**Hint**

To solve this problem, you can simply concatenate the input parameters to form the HTML string with the specified tag around the word.

**Solution**

Here is a JavaScript function that solves the problem:

```javascript
function makeTags(tag, word) {
    return `<${tag}>${word}</${tag}>`;
}

console.log(makeTags("i", "Yay")); // Expected output: "<i>Yay</i>"
console.log(makeTags("b", "Hello")); // Expected output: "<b>Hello</b>"
console.log(makeTags("u", "World")); // Expected output: "<u>World</u>"
console.log(makeTags("cite", "Quote")); // Expected output: "<cite>Quote</cite>"
```

**Command Line Inputs**

If you were to use command line inputs to test this function, you would run the JavaScript file in Node.js, passing the test tag and word as command line arguments like so:

```bash
node myScript.js "i" "Yay"
node myScript.js "b" "Hello"
node myScript.js "u" "World"
node myScript.js "cite" "Quote"
```

In `myScript.js`, you would use `process.argv[2]` to access the tag argument and `process.argv[3]` to access the word argument. You could then pass these arguments to the `makeTags` function to test it.

# makeOutWord

**Problem Statement**

In this problem, you're given an "out" string of length 4 and a "word" string. Your task is to implement a function called `makeOutWord` that returns a new string where the "word" string is placed in the middle of the "out" string.

The `makeOutWord` function should accept two parameters:
1. `out`: a string of length 4.
2. `word`: a string that needs to be placed in the middle of the "out" string.

Here are some examples:

- `makeOutWord("<<>>", "Yay")` should return `"<<Yay>>"`.
- `makeOutWord("<<>>", "WooHoo")` should return `"<<WooHoo>>"`.
- `makeOutWord("[[]]", "word")` should return `"[[word]]"`.

**Hint**

Use string concatenation or string interpolation to construct the new string. Remember that strings are indexed like arrays, so you can access individual characters using square brackets `[]`.

**Solution**

Here is the JavaScript function that solves the problem:

```javascript
function makeOutWord(out, word) {
    return out.substring(0, 2) + word + out.substring(2);
}

console.log(makeOutWord("<<>>", "Yay")); // Expected output: "<<Yay>>"
console.log(makeOutWord("<<>>", "WooHoo")); // Expected output: "<<WooHoo>>"
console.log(makeOutWord("[[]]", "word")); // Expected output: "[[word]]"
```

**Command Line Inputs**

If you were to use command line inputs to test this function, you would run the JavaScript file in Node.js, passing the test "out" string and "word" as command line arguments like so:

```bash
node myScript.js "<<>>" "Yay"
node myScript.js "<<>>" "WooHoo"
node myScript.js "[[]]" "word"
```

In `myScript.js`, you would use `process.argv[2]` to access the "out" argument and `process.argv[3]` to access the "word" argument. You could then pass these arguments to the `makeOutWord` function to test it.

# nTwice

**Problem Statement**

In this problem, you're given a string and an integer `n`. Your task is to implement a function called `nTwice` that returns a new string made of the first and last `n` characters from the given string. It is guaranteed that the length of the given string will be at least `n`.

The `nTwice` function should accept two parameters:
1. `str`: a string.
2. `n`: an integer that indicates the number of characters to take from the start and end of the string.

Here are some examples:

- `nTwice("Hello", 2)` should return `"Helo"`.
- `nTwice("Chocolate", 3)` should return `"Choate"`.
- `nTwice("Chocolate", 1)` should return `"Ce"`.

**Hint**

Use the `substring()` string method to extract the required number of characters from the start and end of the string.

**Solution**

Here is the JavaScript function that solves the problem:

```javascript
function nTwice(str, n) {
    return str.substring(0, n) + str.substring(str.length - n);
}

console.log(nTwice("Hello", 2)); // Expected output: "Helo"
console.log(nTwice("Chocolate", 3)); // Expected output: "Choate"
console.log(nTwice("Chocolate", 1)); // Expected output: "Ce"
```

**Command Line Inputs**

If you were to use command line inputs to test this function, you would run the JavaScript file in Node.js, passing the test string and integer as command line arguments like so:

```bash
node myScript.js "Hello" 2
node myScript.js "Chocolate" 3
node myScript.js "Chocolate" 1
```

In `myScript.js`, you would use `process.argv[2]` to access the string argument and `Number(process.argv[3])` to access the integer argument. You could then pass these arguments to the `nTwice` function to test it.

# makeBricks

**Problem Statement**

In this problem, you're given a number of small bricks (each 1 inch long), a number of big bricks (each 5 inches long), and a goal length in inches. Your task is to implement a function called `makeBricks` that returns true if it is possible to reach the goal length by choosing from the given bricks.

The `makeBricks` function should accept three parameters:
1. `small`: an integer representing the number of small bricks.
2. `big`: an integer representing the number of big bricks.
3. `goal`: an integer representing the goal length in inches.

Here are some examples:

- `makeBricks(3, 1, 8)` should return `true`.
- `makeBricks(3, 1, 9)` should return `false`.
- `makeBricks(3, 2, 10)` should return `true`.

**Hint**

You can solve this problem without using any loops. Calculate the maximum length that can be made using the big bricks, then check if the remaining length can be covered by the small bricks.

**Solution**

Here is the JavaScript function that solves the problem:

```javascript
function makeBricks(small, big, goal) {
    let maxBigLength = big * 5;
    if (maxBigLength > goal) {
        maxBigLength = Math.floor(goal / 5) * 5;
    }
    return goal - maxBigLength <= small;
}

console.log(makeBricks(3, 1, 8)); // Expected output: true
console.log(makeBricks(3, 1, 9)); // Expected output: false
console.log(makeBricks(3, 2, 10)); // Expected output: true
```

**Command Line Inputs**

If you were to use command line inputs to test this function, you would run the JavaScript file in Node.js, passing the number of small bricks, big bricks, and the goal length as command line arguments like so:

```bash
node myScript.js 3 1 8
node myScript.js 3 1 9
node myScript.js 3 2 10
```

In `myScript.js`, you would use `Number(process.argv[2])` to access the number of small bricks, `Number(process.argv[3])` to access the number of big bricks, and `Number(process.argv[4])` to access the goal length. You could then pass these arguments to the `makeBricks` function to test it.

# roundSum

**Problem Statement**

The problem is to create a function `roundSum` which takes three integers as input and returns their sum. However, before adding, each number should be rounded to the nearest multiple of 10. If the last digit of the number is 5 or more, round up to the next multiple of 10. If it's less than 5, round down to the previous multiple of 10.

The `roundSum` function should accept three parameters:
1. `a`: an integer value.
2. `b`: an integer value.
3. `c`: an integer value.

Additionally, to avoid repetition, write a helper function `round10` which will perform the rounding operation.

Here are some examples:

- `roundSum(16, 17, 18)` should return `60`.
- `roundSum(12, 13, 14)` should return `30`.
- `roundSum(6, 4, 4)` should return `10`.

**Hint**

Use the modulo operator (%) to obtain the last digit of each number, then use simple conditionals to perform the rounding.

**Solution**

Here is the JavaScript function that solves the problem:

```javascript
function round10(num) {
    let lastDigit = num % 10;
    if (lastDigit >= 5) {
        return num + (10 - lastDigit);
    } else {
        return num - lastDigit;
    }
}

function roundSum(a, b, c) {
    return round10(a) + round10(b) + round10(c);
}

console.log(roundSum(16, 17, 18)); // Expected output: 60
console.log(roundSum(12, 13, 14)); // Expected output: 30
console.log(roundSum(6, 4, 4)); // Expected output: 10
```

**Command Line Inputs**

If you were to use command line inputs to test this function, you would run the JavaScript file in Node.js, passing the three integers as command line arguments:

```bash
node myScript.js 16 17 18
node myScript.js 12 13 14
node myScript.js 6 4 4
```

In `myScript.js`, you would use `Number(process.argv[2])`, `Number(process.argv[3])`, and `Number(process.argv[4])` to access the three integers, and then pass these arguments to the `roundSum` function to test it.

# Bob

**Problem Statement**

The task here is to implement a function `bobThere` that checks if a given string contains a substring in the format "b_b", where the underscore can be any character. In other words, we are looking for a 'b', followed by any character, followed by another 'b'.

The `bobThere` function should accept one parameter:
1. `str`: a string value.

Here are some examples:

- `bobThere("abcbob")` should return `true`, as it contains both "bob" and "bcb".
- `bobThere("b9b")` should return `true`, as it contains "b9b".
- `bobThere("bac")` should return `false`, as it doesn't contain a "b_b" pattern.

**Hint**

You can use a loop to iterate through the string and check for this pattern. Make sure to stop the loop before the second last character to avoid going out of bounds.

**Solution**

Here is the JavaScript function that solves the problem:

```javascript
function bobThere(str) {
    for (let i = 0; i < str.length - 2; i++) {
        if (str[i] === 'b' && str[i + 2] === 'b') {
            return true;
        }
    }
    return false;
}

console.log(bobThere("abcbob")); // Expected output: true
console.log(bobThere("b9b")); // Expected output: true
console.log(bobThere("bac")); // Expected output: false
```

This function loops through each character in the string, checking if it is a 'b' and if the character two positions ahead is also a 'b'. If this pattern is found, it returns true. If it goes through the entire string without finding this pattern, it returns false.

**Command Line Inputs**

If you were to use command line inputs to test this function, you would run the JavaScript file in Node.js, passing the string as a command line argument:

```bash
node myScript.js abcbob
node myScript.js b9b
node myScript.js bac
```

In `myScript.js`, you would use `process.argv[2]` to access the string, and then pass this argument to the `bobThere` function to test it.

# Bread 

**Problem Statement**

You are given a string. Your task is to implement a function called `getSandwich` that performs the following operation:

- The function finds two substrings "bread" in the string, and returns the string that is between the first and last occurrence of "bread". If there is only one or no occurrence of "bread", it should return an empty string.

The `getSandwich` function should accept one parameter:

1. `str`: a string value.

Here are some examples:

- `getSandwich("breadjambread")` should return `"jam"`, because "jam" is between the first and last occurrence of "bread".
- `getSandwich("xxbreadjambreadyy")` should return `"jam"`, because "jam" is between the first and last occurrence of "bread".
- `getSandwich("xxbreadyy")` should return `""`, because there is only one occurrence of "bread".

**Hint**

You can use the `indexOf()` and `lastIndexOf()` string methods to find the first and last occurrence of "bread". Then use the `substring()` method to extract the string between these two positions.

**Solution**

Here is the JavaScript function that solves the problem:

```javascript
function getSandwich(str) {
    let firstBread = str.indexOf("bread");
    let lastBread = str.lastIndexOf("bread");
    
    if (firstBread !== -1 && lastBread !== -1 && firstBread !== lastBread) {
        return str.substring(firstBread + 5, lastBread);
    }
    return "";
}

console.log(getSandwich("breadjambread")); // Expected output: "jam"
console.log(getSandwich("xxbreadjambreadyy")); // Expected output: "jam"
console.log(getSandwich("xxbreadyy")); // Expected output: ""
```

This function first checks if there are at least two distinct occurrences of "bread". If so, it uses `substring()` to extract and return the string between the two occurrences. If not, it returns an empty string.

**Command Line Inputs**

If you were to use command line inputs to test this function, you would run the JavaScript file in Node.js, passing the string as a command line argument:

```bash
node myScript.js breadjambread
node myScript.js xxbreadjambreadyy
node myScript.js xxbreadyy
```

In `myScript.js`, you would use `process.argv[2]` to access the string, and then pass this argument to the `getSandwich` function to test it.

# Evenly

**Problem Statement**

Given three integers, one is small, one is medium and one is large. Implement a function called `evenlySpaced` that checks if the three values are evenly spaced. The difference between small and medium should be the same as the difference between medium and large. The function should return `true` if the integers are evenly spaced and `false` if they are not.

The `evenlySpaced` function should accept three parameters:

1. `a`: an integer.
2. `b`: an integer.
3. `c`: an integer.

Here are some examples:

- `evenlySpaced(2, 4, 6)` should return `true`, because the difference between 2 (small) and 4 (medium), and between 4 (medium) and 6 (large) is the same (2).
- `evenlySpaced(4, 6, 2)` should return `true`, because the difference between 2 (small) and 4 (medium), and between 4 (medium) and 6 (large) is the same (2).
- `evenlySpaced(4, 6, 3)` should return `false`, because the difference between 3 (small) and 4 (medium) is not the same as the difference between 4 (medium) and 6 (large).

**Hint**

You should sort the integers in ascending order before checking if they are evenly spaced.

**Solution**

Here is the JavaScript function that solves the problem:

```javascript
function evenlySpaced(a, b, c) {
    let arr = [a, b, c];
    arr.sort((a, b) => a - b);
    
    if (arr[1] - arr[0] === arr[2] - arr[1]) {
        return true;
    }
    return false;
}

console.log(evenlySpaced(2, 4, 6)); // Expected output: true
console.log(evenlySpaced(4, 6, 2)); // Expected output: true
console.log(evenlySpaced(4, 6, 3)); // Expected output: false
```

This function sorts the three numbers in ascending order and then checks if the difference between the first and second number is the same as the difference between the second and third number.

**Command Line Inputs**

If you were to use command line inputs to test this function, you would run the JavaScript file in Node.js, passing the three integers as command line arguments:

```bash
node myScript.js 2 4 6
node myScript.js 4 6 2
node myScript.js 4 6 3
```

In `myScript.js`, you would use `process.argv[2]`, `process.argv[3]`, and `process.argv[4]` to access the integers, and then pass these arguments to the `evenlySpaced` function to test it.