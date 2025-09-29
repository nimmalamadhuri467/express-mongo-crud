const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const Chat = require("./models/chat.js");

// Middleware & Config
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// MongoDB Connection
main()
  .then(() => console.log("MongoDB connection successful"))
  .catch((err) => console.log("MongoDB connection error:", err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

// Index Route
app.get("/chats", async (req, res) => {
  try {
    const chats = await Chat.find();
    res.render("index.ejs", { chats });
  } catch (err) {
    res.send("Error fetching chats");
  }
});

// New Chat Form
app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

// Create Chat
app.post("/chats", async (req, res) => {
  try {
    const { from, to, msg } = req.body;
    const newChat = new Chat({
      from,
      to,
      msg,
      created_at: new Date(),
    });
    await newChat.save();
    console.log("Chat saved");
    res.redirect("/chats");
  } catch (err) {
    console.log(err);
    res.send("Error creating chat");
  }
});

// Edit Chat Form
app.get("/chats/:id/edit", async (req, res) => {
  try {
    const { id } = req.params;
    const chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
  } catch (err) {
    res.send("Error loading edit form");
  }
});

// Update Chat
app.put("/chats/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { msg: newMsg } = req.body;
    const updatedChat = await Chat.findByIdAndUpdate(
      id,
      { msg: newMsg },
      { runValidators: true, new: true }
    );
    console.log(updatedChat);
    res.redirect("/chats");
  } catch (err) {
    console.log(err);
    res.send("Error updating chat");
  }
});
// Delete Route
app.delete("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
});


// Root Route
app.get("/", (req, res) => {
  res.send("Root is working");
});

// Start Server
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});