const mongoose = require('mongoose');

main()
  .then(() => {
    console.log("Connection successful");
  })
  .catch(err => {
    console.log("Connection error:", err);
  });

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

// Define the schema
const usernameSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

// Create the model
const User = mongoose.model("User", usernameSchema);

User.findOneAndUpdate(
  { name: "Bruce" },
  { age: 25 },
  { new: true }
)
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
});

//  User.deleteOne({ name: "Bruce" })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


User.deleteMany({ age: { $gt: 45 } })

  .then((res) => {
    // console.log(res[0].name);
    console.log(res);
  })
  .catch((err) => {
    console.log("Find error:", err);
  });


// User.find({ age: { $gt: 45 } })

//   .then((res) => {
//     // console.log(res[0].name);
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log("Find error:", err);
//   });
  // User.findById("68d8c2b400a209a2ebb7f708")
  // .then((res) => {
  //   console.log(res);
  // })
  // .catch((err) => {
  //   console.log("Find error:", err);
  // });

  // User.updateOne({ name: "Bruce" }, { age: 49 })
  // .then((res) => {
  //   console.log(res);
  // })
  // .catch((err) => {
  //   console.log(err);
  // });

   User.findOneAndDelete({ name: "eve" })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });


  // User.findByIdAndDelete("68d8c2b400a209a2ebb7f708")
  // .then((res) => {
  //   console.log(res);
  // })
  // .catch((err) => {
  //   console.log(err);
  // });

// User.updateMany({ age: { $gt: 48 } }, { age: 55 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// User.insertMany([
//   { name: "Tony", email: "tony@gmail.com", age: 50 },
//   { name: "Peter", email: "peter@gmail.com", age: 30 },
//   { name: "Bruce", email: "bruce@gmail.com", age: 47 }
// ])
// .then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log("Insert error:", err);
// });

// Create a new user document
// const user2 = new User({
//   name: "eve",
//   email: "eve@gmail.com",
//   age: 23
// });

// user2.save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
