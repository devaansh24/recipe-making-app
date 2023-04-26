import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/user.js";
import { recipesRouter } from "./routes/recipes.js";
const app = express();

app.use(express.json()); //data from frontend converted into json

app.use(cors()); //used when making api request from frontend

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);
mongoose.connect(
  "mongodb+srv://devaansh11111:recipeapppassword@recipecluster.a4ac84g.mongodb.net/recipecluster?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
app.listen(3001, () => console.log("Server Started")); //telling api to start
