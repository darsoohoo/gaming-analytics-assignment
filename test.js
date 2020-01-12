
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
        age: 1,
        date: "2019/06/25"
    },
    {
        name: "john",
        age: 20,
        date: "2000/06/24"
    },
    {
        name: "mike",
        age: 2,
        date: "2018/04/20"
    },
    {
        name: "bob",
        age: 10,
        date: "2010/06/29"
    },
]


const newpeople = people.map(person => {
    person.date = new Date(person.date)
    console.log(typeof(person.age))
    return person;
})


const sortedPeople = newpeople.sort((a,b) => (a.date < b.date))

console.log(sortedPeople)


