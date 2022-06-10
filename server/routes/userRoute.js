// const express = require("express");
import express from "express";
import { Signup, Login } from "../controllers/user.js";
import dotenv from "dotenv";
dotenv.config();

const userRouter = express.Router();
// const userController = require("../controllers/user");
// import * as userController from ".. /controllers/user.js";

// import { login } from "../controllers/user.js";
const signup = new Signup();
const login = new Login();
userRouter.post("/signup", signup.execute);
userRouter.post("/login", login.execute);

export default userRouter;
// console.log(userRouter);
