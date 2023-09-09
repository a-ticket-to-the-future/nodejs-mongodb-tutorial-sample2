const  mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,   //←これをつけると、nameの値を入れないとエラーになるらしい
        trim:true ,       // 空白削除  トリマーの意
        lowercase:true,   //小文字として設定される

    },
    calories:{
        type : Number,
        default:0,
        validate(value) {   //カロリーがマイナスだったらエラーを吐きたいから
            if(value < 0) throw new Error("マイナスのカロリーは存在しません")
       
        },
    },
});


const Food = mongoose.model("Food", FoodSchema);

module.exports = Food;