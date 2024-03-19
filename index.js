// const arr = [1,2,3]

// const obj1 = {
//     key1: '1',
//     key2: '1',
//     key3: '1'
// }

// console.log(Object.entries(obj1))


// const arr1 = arr.map((item) => {
//     return item + 1
// }).map((item) => {
//     return item * 2
// }).join('').charAt(1)

// console.log(arr1)


// const arr = [1, 2, 3, 4]

// const arr1 = arr.map((item) => {
//     if (item > 1) {
//         return item - 1
//     }
//     return item
// })

// console.log(arr1)



const arr = [7, 562, 3897, 423, 5568, 63, 71]
const strArr = ['str', 'str1', 'str2', 'str3']

const arrObj = [
    {
        nume: 'Dima'
    },
    {
        nume: 'Diana'
    },
    {
        nume: 'Irina'
    }
]


// const someValue = arr.some((item, index) => {
//     console.log(index)
//     return item > 3;
// })

// console.log(someValue)

// const strArrayValue = strArr.some((item) => item.length > 3)

// console.log(strArrayValue)


// const everyValue = arr.every((item) => typeof item === 'number')

// const everyValue = arr.every((item, index) => {
//     console.log(index)
//     return typeof item === 'number'
// }
// )

// const everyValue = arr.every((item, index) => {
//     console.log(index)
//     return item.length > 3
// }
// )

// console.log(everyValue)


// const findItem = arr.find((item) => {
//     return item > 4
// })

// console.log(findItem)


// const findItem = strArr.find((item) => {
//     return item.includes('1')
// })

// console.log(findItem)

// const findItem = arr.find((item) => {
//     const convertedItem = item.toString()
//     return convertedItem.includes('5')
// })

// console.log(findItem)



// const indexOfItem = arr.findIndex((item) => {
//     return item > 13
// })

// console.log(indexOfItem)

// const sorted = arr.sort((a, b) => {
//     return b - a > 0 ? -1 : 1
// })

// console.log(sorted)

const sorted = arrObj.sort(a, b) => {
    return a.nume < b.nume ? -1 : 1
}

console.log(sorted)