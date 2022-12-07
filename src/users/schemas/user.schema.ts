import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  interests: String,
  grewUpIn: String,
  currentlyLiveIn: String,
  favouriteAnimal: String,
});
