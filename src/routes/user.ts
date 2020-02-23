import { Request, Response } from "express";
import User from "../models/user";

const addUser = (req: Request, res: Response) => {
  let user = new User({
    ...req.body,
    created: Date.now()
  });
  user.save((err: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send(user);
    }
  });
};

const updateUser = (req: Request, res: Response) => {
  let user = User.findOneAndUpdate(
    req.params.id,
    {
      ...req.body,
      updated: Date.now()
    },
    (err: any, user: any) => {
      if (err) {
        res.send(err);
      } else {
        res.send(user);
      }
    }
  );
};

const deleteUser = (req: Request, res: Response) => {
  let user = User.deleteOne({ id: req.params.id }, (err: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send("Successfully Deleted User");
    }
  });
};

const allUsers = (req: Request, res: Response) => {
  const findCallback = (err: any, users: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send(users);
    }
  };

  if (req.query.search) {
    let users = User.find({ name: req.query.search }, findCallback);
  } else {
    let users = User.find(findCallback);
  }
};

export default { allUsers, addUser, updateUser, deleteUser };
