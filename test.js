
// const recommendations = [
//     {
//       Area: 1,
//       Zone: 2,
//       Bank: 48,
//       Stand: 1,
//       Asset: 1097,
//       Letter: "d"
//     },
//     {
//       Area: 1,
//       Zone: 5,
//       Bank: 48,
//       Stand: 2,
//       Asset: 1095,
//       Letter: "a"
//     },
//     {
//         Area: 1,
//         Zone: 2,
//         Bank: 48,
//         Stand: 4,
//         Asset: 1225,
//         Letter: "b"
//     },
//     {
//       Area: 1,
//       Zone: 8,
//       Bank: 48,
//       Stand: 3,
//       Asset: 1227,
//       Letter: "c"
//     }
// ]

// const sort = (items, sortBy) => {
//     return items.sort( (a,b) => {
//         for(let item in items) {
//             items[item] = sortBy
//             console.log("items[item] = ", items[item])
            
//         }

//         a.sortBy = a.sortBy
//         b.sortBy = a.sortBy
//         return a.sort - b.sort;
//     })
// }

// console.log(sort(recommendations, 'stand'))

const people = [
    {
        name: "darren",
        age: 4,
    },
    {
        name: "john",
        age: 9
    },
    {
        name: "mike",
        age: 1
    },
]

let sorted = [];

let temp = 0;

Object.keys(people).forEach(item => {
    console.log(people[item].age)
    if(people[item].age < temp) {
        sorted.unshift(people[item])
        temp = people[item].age
    } else {
        sorted.push(people[item])
        temp = people[item].age
    }
})

console.log(sorted)