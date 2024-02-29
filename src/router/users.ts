import express from 'express';


import { getAllUsers } from '../controller/UserController';


export default (router: express.Router) => {
  router.get('/users', getAllUsers);
}