import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email is already existed!'],
    required: [true, 'Required field!'],
  },
  password: {
    type: String,
    required: [true, 'Required field!'],
  },
  avatar: {
    type: String,
  },
  joined_at: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
