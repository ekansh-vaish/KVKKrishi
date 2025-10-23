const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT || 8080;
const Auth = require("./Routes/Auth");
const cookieParser = require("cookie-parser");
const product = require("./Routes/product");
const Query = require("./Routes/Query");
const DB_URL = process.env.ATLASDB_URL;
const session = require('express-session');
const MongoStore = require('connect-mongo');
async  function main()
{
await mongoose.connect(DB_URL);
}

main().then(() =>
{
console.log("Connected");
}).catch((err) =>
{
console.log(err);    
})

app.use(cors(
{
origin: 'https://kvk-krishi-kv3v.vercel.app', // allow your frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],// ✅ must match your frontend origin
credentials: true        
}
));


app.use(express.json()); 
app.use("/uploads", express.static("uploads"));

app.use(session({
  secret: "mysupercode",
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: DB_URL,
    crypto: { secret: "mysupercode" },
    touchAfter: 24 * 3600,
  }),
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "none",
    maxAge: 24 * 60 * 60 * 1000,
  }
}));



app.use(cookieParser());
app.use("/auth",Auth)
app.use("/product",product);
app.use("/query",Query);
app.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "none"
  });
  res.status(200).json({ message: "Logged out successfully" });
});



app.listen(PORT, () =>
{
console.log("Server is running on port 8080");
})
