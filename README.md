# express-mongo-crud
# 📩 Express + MongoDB Chat App

A mini WhatsApp-style chat app built with **Node.js**, **Express**, **MongoDB (Mongoose)**, and **EJS**.  
Demonstrates full **CRUD operations**, RESTful routing, and server-side rendering.

---

## 🚀 Features
- Express + MongoDB integration with Mongoose  
- Full CRUD: Create, Read, Update, Delete chats  
- RESTful routes with Express  
- EJS templates for views (`index`, `new`, `edit`)  
- Method Override for PUT & DELETE in forms  

---

## 📂 Project Structure
├── models/chat.js # Chat schema & model
├── views/ # EJS templates
├── public/styles.css # Styling
├── index.js # Express app & routes
├── init.js # (Optional) seed data
└── package.json



## ⚡ Routes
| Method | Route            | Description         |
|--------|------------------|---------------------|
| GET    | `/chats`         | Show all chats      |
| GET    | `/chats/new`     | Form to add chat    |
| POST   | `/chats`         | Save new chat       |
| GET    | `/chats/:id/edit`| Edit chat form      |
| PUT    | `/chats/:id`     | Update chat         |
| DELETE | `/chats/:id`     | Delete chat         |

---

## 🛠️ Setup
```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
npm install
mongod   # start MongoDB locally
node index.js