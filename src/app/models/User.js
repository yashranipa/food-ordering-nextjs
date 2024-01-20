import { model, models, Schema } from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: true,
      validate: (password) => {
        if (!password?.length || password.length < 5) {
          new Error("pasword must be at least 5 characters");
        }
      },
    },
  },
  { timestamps: true }
);

UserSchema.post("validate", async function (user) {
  const saltRounds = 10;
  const plainTextPassword = user.password;
  user.password = bcrypt.hashSync(plainTextPassword, saltRounds);
});

export const User = models?.User || model("User", UserSchema);
