const mongoose = require('mongoose');

// Connect to MongoDB
main()
  .then(() => {
    console.log("Connection successful");
  })
  .catch(err => {
    console.log("Connection error:", err);
  });

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}                                                  // database name

// Define the schema
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 20
  },
  author: {
    type: String
  },
  price: {
    type: Number,
    min:[1,"too low price"] ,
  },
  discount: {
    type: Number,
    default: 0
  },
  category: {
    type: String,
    enum: ["fiction", "Non-fiction"]
  },
  genre: [String] // Array of strings
});

// Create the model
const Book = mongoose.model("Book", bookSchema);



// Create the model
// const book = mongoose.model("book", bookSchema);
// let book1 = new book({
//   title: "Mathematics XII",
//   author: "RD Sharma",
//   price: 1200,
// });

// book1
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });.
// const Book = mongoose.model("Book", bookSchema);

// const book2 = new Book({
//   title: "Physics XII",
//   author: "HC Verma",
//   price: 950,
//   discount: 100
// });

// book2
//   .save()
//   .then((res) => {
//     console.log("Saved book2:", res);
//   })
//   .catch((err) => {
//     console.log("Save error:", err);
//   });
// const book3 = new Book({
//   title: "Atomic Habits",
//   author: "James Clear",
//   price: 399,
//   discount: 50,
//   category: "Non-fiction",
//   genre: ["self help", "motivation"]
// });


// book3
//   .save()
//   .then((res) => {
//     console.log("Saved book3:", res);
//   })
//   .catch((err) => {
//     console.log("Save error:", err);
//   });
Book.findByIdAndUpdate("68d8de17644fbf659f412d51", { price: -100 },{runValidators:true})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.errors.price.properties.message);
  });



