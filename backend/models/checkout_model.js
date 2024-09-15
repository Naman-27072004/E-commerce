const mongoose = require("mongoose")


const checkoutSchema = new mongoose.Schema(
    {
        userId:{type:String},
        orderId:{type:String},
        name:{type:String},
        street:{type:String},
        floor:{type:String},
        city:{type:String},
        phone:{type:Number},
        email:{type:String},
        upi:{type:String},
        card_no:{type:Number},
        ex_date:{type:String},
        cvc_cvv:{type:Number},
        name_card:{type:String},
        c_code:{type:String}
    },
    { timestamps: true }
);

module.exports = mongoose.model('Checkout',checkoutSchema)