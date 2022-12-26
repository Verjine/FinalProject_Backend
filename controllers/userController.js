import  express  from "express";
import user from "../schema/userSchema.js";
import bcrypt from "bcrypt";
import  jwt  from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config()


const secret = process.env.SECRET

export const generateAccessToken = (id, roles) => {
  const payload = {
    id,
    roles,
  };
  return jwt.sign(payload, secret, { expiresIn: "24h" });
};

export const Check = async (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ message: "sxal grancumic", errors });
//   }
  const candidate = await user.findOne({ email });
  if (candidate) {
    return res.status(400).json({ message: "Email already registred" });
  }
  const hashPassword = bcrypt.hashSync(password, 7);
  const User = new user({ username, email, password: hashPassword });
  console.log(username, email, password);
  try {
    User.save();
    res.status(200).send("User Registered successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const User = await user.findOne({ email });
    console.log(User);

    if (!User) {
      return res.status(400).json({ message: "This ${email} does not exist" });
    }

    const validPassword = bcrypt.compareSync(password, User.password);
    if (!validPassword) {
      return res.status(400).json({ message: "Wrong password" });
    }
    const token = generateAccessToken(User._id, User.roles);
    return res.json({ token: token, username:User.username });
  } catch (error) {
    console.log(error)
    return res.status(400).json({ message: "Something went wrong" });
  }
};
