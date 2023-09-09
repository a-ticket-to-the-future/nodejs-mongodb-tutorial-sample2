const express = require("express");

const app = express();

const mongoose = require("mongoose");

const foodRouter = require("./routes/foodRoutes"); //expressのルートの設定の基本の記述なので、覚えて！

require('dotenv').config();


app.use(foodRouter);


const url = process.env.DATABASE_URL;

// データベース接続

mongoose.connect(
    url
).then(() => console.log("データベース接続に成功しました"))
.catch((err) => console.log(err));
//.then(())データベース接続が成功したら、、、という非同期処理の意のthen

app.listen(3000, () => {
    console.log("サーバーが起動しました");
} )