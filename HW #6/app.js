// Array.from(document.querySelector('.list'));
//you need .children to call the items from the list

let htmlArr = Array.from(document.querySelector('ul').children)

let filteredArr = htmlArr.filter(el => el.textContent.includes('Flexbox'))

let filtered = htmlArr.map(el => el.dataset.time)

let filteredSeconds = filtered.map(el => {
    return Number(el.split(':')[0]) * 60 + Number(el.split(':')[1])
})
let filteredTotal = (secondsArr => {
    let num = 0
    for (let i in secondsArr) {
        num += secondsArr[i]
    }
    return num
})(filteredSeconds)



console.log(filteredTotal)


//Q2

let numbers = [3,62,234,7,23,74,23,76,92].filter(el => el > 70)