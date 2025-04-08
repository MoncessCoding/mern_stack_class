const book = {
    title: 'The Great Gatsby',
    author: {
        firstName: 'F. Scott',
        lastName: 'Fitzgerald',
        nationality: 'American'
    },
    publication: {
        year: 1925,
        publisher: {
            name: 'Charles Scribner\'s Sons',
            location: 'New York'
        }
    },
    genres: ['Novel', 'Fiction', 'Literature'],
    awards: [
        {
            name: 'Pulitzer Prize',
            year: null
        }
    ]
};
//Destructure
// Task 1: Extract the book title, author's full name, and publication year.
let {
    title,
    author : {firstName, lastName},
    publication: {year}
} = book

// console.log(`${title} by ${firstName} ${lastName}, published in ${year}`)


// Task 2: Extract the publisher's name and location.
let {
    publication : {
        // publisher : {name, location}
        publisher : {name: publisherName, location: publisherLocation}
    }
} = book
console.log(`Published by ${publisherName}, ${publisherLocation}`)
// console.log(name) // error

// Task 3: Extract the first genre.
let [firstGenre] = book.genres
console.log(firstGenre)

// Bonus: Extract the name of the first award if it exists.
const [firstAward] = book.awards
// console.log(firstAward)

// if(firstAward){
//     console.log(`Award: ${firstAward.name}`)
// } else {
//     console.log("No awards")
// }

//? Ternary Operator 

console.log(firstAward ? `Award: ${firstAward.name}` : "No awards")