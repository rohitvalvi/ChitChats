const mongoose = require("mongoose");
const Chat = require("./models/chat.js");


main().then((res) => {
    console.log("Connection successfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
        from: "Amit",
        to: "Sneha",
        msg: "Hello, how are you?",
        created_at: new Date()
    },
    {
        from: "Sneha",
        to: "Pooja",
        msg: "Did you finish the project?",
        created_at: new Date()
    },
    {
        from: "Pooja",
        to: "Ravi",
        msg: "Let’s meet tomorrow.",
        created_at: new Date()
    },
    {
        from: "Ravi",
        to: "Suresh",
        msg: "Good morning!",
        created_at: new Date()
    },
    {
        from: "Suresh",
        to: "Anjali",
        msg: "Can you share the notes?",
        created_at: new Date()
    },
    {
        from: "Anjali",
        to: "Vikas",
        msg: "Happy Birthday 🎉",
        created_at: new Date()
    },
    {
        from: "Vikas",
        to: "Priya",
        msg: "Join the meeting at 5 PM.",
        created_at: new Date()
    },
    {
        from: "Priya",
        to: "Arjun",
        msg: "I solved the problem you shared.",
        created_at: new Date()
    },
    {
        from: "Arjun",
        to: "Meera",
        msg: "Let’s work on the assignment together.",
        created_at: new Date()
    },
    {
        from: "Meera",
        to: "Amit",
        msg: "All the best for exams!",
        created_at: new Date()
    }
];

Chat.insertMany(allChats);

 