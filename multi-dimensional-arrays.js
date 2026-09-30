// Task 1: Create a multi-dimensional array with nine books and/or movies of your choice
let movies = [
  [
    "Harry Potter and the Sorcerer Stone",
    "Obsession",
    "Spider-Man: Brand New Day",
  ],
  ["Matrix", "The Wizard of Oz", "Star Wars"],
  ["Jurassic Park", "Titanic", "The Dark Knight"],
];

// Task 2: Access and log all the elements in the array using bracket notation with numbers
for (let i = 0; i < movies.length; i++) {
  for (let j = 0; j < movies[i].length; j++) {
    console.log(`${movies[i][j]}`);
  }
}

// Task 3: Access and log all the elements in the array using bracket notation with variables as indices. Use the variables row and item.
for (let row = 0; row < movies.length; row++) {
  for (let item = 0; item < movies[row].length; item++) {
    console.log(`${movies[row][item]}`);
  }
}

// Task 4: Write a loop that prints all the items on the second shelf
for (let column = 0; column < movies[1].length; column++) {
  console.log(`${movies[1][column]}`);
}
