
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

// const sorted = people.sort((a, b) => {
//  let aday = a.date.slice(8) 
//  let   bday = b.date.slice(8)
//  let  amonth = a.date.slice(5,7)
//  let  bmonth = b.date.slice(5,7)
//  let  ayear = a.date.slice(0,4)
//  let  byear = b.date.slice(0,4)

//     a.date = Date.parse(aday + "/" + amonth + "/" + ayear)
//     b.date = Date.parse(bday + "/" + bmonth + "/" + byear)
//     return a.date - b.date;

// })

const newpeople = people.map(person => {
    const day = person.date.slice(8);
    const month = person.date.slice(5,7);
    const year = person.date.slice(0,4);
    const newdate = Date.UTC(year, month, day)
    console.log(newdate)
    person.date = newdate.toLocaleString('en-GB')


    //console.log(typeof(person.age))
    return person;
})

console.log(newpeople)

// const sortedPeople = newpeople.sort((a,b) => (a.date < b.date))

// console.log(sortedPeople)

// people.forEach(person => {
//     day = person.date.slice(8) 
//     console.log(day)
//     week = person.date.slice(5,7)
//     console.log(week)
//     year = person.date.slice(0,4)
//     console.log(year)
    
// })


// const activities = [
//     { title: 'Hiking', date: new Date('2019-06-28') },
//     { title: 'Shopping', date: new Date('2019-06-10') },
//     { title: 'Trekking', date: new Date('2019-06-22') }
//   ]
  
  


