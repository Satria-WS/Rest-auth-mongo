import express from 'express';

import { getUsers } from '../action/users';

export const getAllUsers = async (req: express.Request, res: express.Response) => {
  try {
    const users = await getUsers();
    return res.status(200).json({
      data: users,
      message:"get User succesfull"
    })
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}