const mongoose = require("mongoose")


const orderSchema = new mongoose.Schema(
    {
        paymentId:{type:String,required:true},
        paid_at:{type:Number,required:true},
        total_price:{type:Number,required:true},
        is_paid:{type:String,required:true},
        is_delivered:{type:Boolean,default: false},
        order_items:[],
        payment_result:[],
        quantity:{type:Number,required:true}
    },
    { timestamps: true }
);

module.exports = mongoose.model('orders',orderSchema)