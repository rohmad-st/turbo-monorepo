import { Request, Response } from 'express';
import {
  updateUser,
  fetchUser,
  fetchUsers
} from '../repository/userCollection';

export const updateUserData = async (req: Request, res: Response) => {
  try {
    const { id, data } = req.body;
    await updateUser(id, data);
    res.status(200).send({ success: true });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

export const fetchUsersData = async (req: Request, res: Response) => {
  try {
    const users = await fetchUsers();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

export const fetchUserData = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await fetchUser(id as string);
    if (!user) {
      res.status(404).send({ error: 'User not found' });
      return;
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
