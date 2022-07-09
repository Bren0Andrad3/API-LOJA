import mongoose from "mongoose";


const productSchema = new mongoose.Schema(
    {
      
        title: {
            type: String,
            required: true,
            trim: true
        },
        slug: {
            type: String,
            required: [true, 'O slug é obrigatório'],
            trim: true,
            index: true,
            unique: true
        },
        description: {
            type: String,
            required: false
        },
        price: {
            type: Number,
            required: true
        },
        active: {
            type: Boolean,
            required: false,
            default: true
        },
        tags: [{
            type: String,
            required: false
        }],
        image: {
            type: String,
            required: false,
            trim: true
        }
      
    }
  );


const products= mongoose.model('products', productSchema);

  export default products;