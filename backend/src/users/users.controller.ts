import { Request, Response } from 'express';
import { usersService } from './users.service';

const fetchUsers = async (req: Request, res: Response): Promise<Response> => {
  try {
    const data = await usersService.fetchUsers();
    return res.status(200).json({ status: 200, data });
  }
  catch (e) {
    if (e instanceof Error) {
      return res.status(400).json({ status: 400, message: e.message });
    } else {
      return res.status(500);
    }
  }
};

export const usersController = {
  fetch: fetchUsers,
};
