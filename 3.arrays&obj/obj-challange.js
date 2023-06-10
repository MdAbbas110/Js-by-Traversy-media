const library = [
    {Title: 'Quran',
    author: 'Allah',
    status: {
        own: true,
        reading: false,
        read: false
    }
    },
    {
        title: 'Nahjul Balagah',
        author: 'Imam Ali',
        status:{
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'Nahjul Balagah',
        author: 'Imam Ali',
        status:{
            own: true,
            reading: false,
            read: false
        }
    }
]

let x = library[0].status.read = true;
let x1 = library[1].status.read = true;
let x2 = library[2].status.read = true;
console.log(x,x1,x2);