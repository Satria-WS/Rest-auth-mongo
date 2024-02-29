import express from "express";
import { get, merge } from "lodash";


// import { getUserBySessionToken } from "../Models/users";
import { getUserBySessionToken } from "../action/users";

export const isAuthenticated = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    const sessionToken = req.cookies['APP-AUTH'];
  } catch (error) {
    console.log(error);
  }
}
