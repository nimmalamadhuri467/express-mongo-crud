const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

// Create and save a chat document
// Chat.insertMany = new Chat([
//    {
//   from: "neha",
//   to: "priya",
//   msg: "Send me your exam sheets",
//   created_at: new Date()
//    }
// ]);

let allChats = [
  {
    from: "neha",
    to: "priya",
    msg: "Send me your exam sheets",
    created_at: new Date()
  },
  {
    from: "arjun",
    to: "meera",
    msg: "Did you finish the lab report?",
    created_at: new Date()
  },
  {
    from: "sana",
    to: "ravi",
    msg: "Let’s meet at the canteen",
    created_at: new Date()
  },
  {
    from: "vikram",
    to: "isha",
    msg: "Project deadline is tomorrow!",
    created_at: new Date()
  },
  {
    from: "tanya",
    to: "dev",
    msg: "Can you share the notes?",
    created_at: new Date()
  }
];
Chat.insertMany(allChats);

// chat1.save()
//   .then((res) => {
//     console.log("Chat saved:", res);
//   })
//   .catch((err) => {
//     console.error("Error saving chat:", err);
//   });