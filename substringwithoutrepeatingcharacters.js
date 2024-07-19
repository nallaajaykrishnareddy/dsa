const countOfSubstring = (str) => {
    const len = str.length
    const map = new Map()
    let right = 0
    let maxLength = 0;

    for (let left = 0; left < len; left++) {
        const char = str[left];
        if (map.has(char)) {
            right = Math.max(map.get(char) + 1, right)
        }

        map.set(char, left)
        maxLength = Math.max(maxLength, left - right + 1)
    }

    return maxLength
}

const strOfSubstring = (str) => {
    const len = str.length
    const map = new Map()
    let right = 0
    let maxLength = 0;
    let start = 0

    for (let left = 0; left < len; left++) {
        const char = str[left];
        if (map.has(char) && map.get(char) >= right) {
            right = Math.max(map.get(char) + 1, right)
        }

        map.set(char, left)
        if (left - right + 1 > maxLength) {
            maxLength = left - right + 1
            start = left
        }
    }

    return str.substr(start, maxLength)
}



console.log(countOfSubstring("abcabcbb"))
console.log(strOfSubstring("abcabcbb"))