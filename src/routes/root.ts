import express, { Request, Response } from "express";

const rootPath = (req: Request, res: Response) => {
  res.send("Hello World from /");
};

export default rootPath;