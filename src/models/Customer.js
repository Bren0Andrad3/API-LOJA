import mongoose from "mongoose";


const customerSchema = new mongoose.Schema(
    {
      
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        roles: [{
            type: String,
            required: false,
            enum: ['user', 'admin'],
            default: 'user'
        }]
      
    }
  );


const customers= mongoose.model('customers', customerSchema);

  export default customers;