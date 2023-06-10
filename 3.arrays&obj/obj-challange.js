// step 1
const library = [
    {title: 'Quran',
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
        title: 'Nahjul Balagah 2',
        author: 'Imam Ali',
        status:{
            own: true,
            reading: false,
            read: false
        }
    }
]

// step 2//
let x = library[0].status.read = true;
let x1 = library[1].status.read = true;
let x2 = library[2].status.read = true;
//console.log(x,x1,x2)

const {title: FirstBook } = library[0]
//console.log(FirstBook);

// step 4

const libraryJSON = JSON.stringify(library);
console.log(libraryJSON);
