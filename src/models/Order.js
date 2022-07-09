import mongoose from "mongoose";


const orderSchema = new mongoose.Schema(
    {
      customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customers'
    },
    number: {
        type: String,
        required: true
    },
    createDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    status: {
        type: String,
        required: true,
        enum: ['created', 'done'],
        default: 'created'
    },
    items: [{
        quantity: {
            type: Number,
            required: true,
            default: 1
        },
        price: {
            type: Number,
            required: true
        },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'products'
        } 
    }]
      
  });


  const orders= mongoose.model('orders', orderSchema);

  export default orders;