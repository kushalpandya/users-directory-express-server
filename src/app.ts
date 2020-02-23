import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import rootRoute from "./routes/root";
import userRoute from "./routes/user";

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.set("port", process.env.PORT || 3000);

mongoose.connect("mongodb://127.0.0.1:27017/local", (err: any) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Successfully Connected to MongoDB");
  }
});

// API Endpoints
app.get("/", rootRoute);
app.get("/users", userRoute.allUsers);
app.put("/user", userRoute.addUser);
app.post("/user/:id", userRoute.updateUser);
app.delete("/user/:id", userRoute.deleteUser);

const expressServer = app.listen(app.get("port"), () => {
  console.log("App is running on http://127.0.0.1:%d", app.get("port"));
});

export default app;
