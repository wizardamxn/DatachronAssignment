const express = require('express');
const app = express();
const connectDB = require('./database/database')
const cookieparser = require('cookie-parser');
const authRouter = require('./Routes/auth');
const cors = require("cors");
const profileRouter = require('./Routes/profile')
const bookRoutes = require('./Routes/bookRoutes')



app.use(cors({
  origin: "http://localhost:8080", // frontend URL
  credentials:true
}));
app.use(express.json())
app.use(cookieparser())
app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/api/books", bookRoutes);



connectDB().then(() => {

    app.listen(2222, () => {
        console.log("started the server")
    })
})