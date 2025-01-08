import mongoose from 'mongoose';

// Define schemas
const UserSchema = new mongoose.Schema({
  // Schema definition here
  username: {
    type: String,
    required: [true, "User name is required"]
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true
  },
  password: {
    type: String,
    required: [true, "Password is required"]
  },
  address: {
    type: Array,
    required: [true, "Address is required"]
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"]
  },
  answer: {
    type: String,
    required: [true, "Answer is required"]
  }
});

// Create model from the schema
const Users = mongoose.model('Users', UserSchema);

// Export the model
export default Users;
