import mongoose from "mongoose";
import bcryptjs from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/\S+@\S+\.\S+/, "Please use a valid email"],
    },
    password: {
      type: String,
      required: true,
      minlength: 4,
    },
  },
  { timestamps: true },
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next;
  }
  try {
    const salt = await bcryptjs.genSalt(10);
    this.password = await bcryptjs.hash(this.password, salt);
    next;
  } catch (error) {
    next(error);
  }
});

// 🔑 Compare password during login
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcryptjs.compare(candidatePassword, this.password);
};
// 🚫 Remove password from API responses
userSchema.methods.toJSON = function () {
  const user = this.toObject();

  delete user.password;

  return user;
};
const userModel = mongoose.models.User || mongoose.model("User", userSchema);

export default userModel;    