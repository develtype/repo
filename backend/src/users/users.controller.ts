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

const createUser = async (req: Request<unknown, unknown, { name: string; email: string; }>, res: Response): Promise<Response> => {
  try {
    const { name, email } = req.body;
    const data = await usersService.createUser(name, email);
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

const updateUser = async (req: Request<{ id: string; }, unknown, { name: string; email: string; }>, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    const data = await usersService.updateUser(id, name, email);
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

const deleteUser = async (req: Request<{ id: string; }, unknown, unknown>, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const data = await usersService.deleteUser(id);
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
  create: createUser,
  update: updateUser,
  delete: deleteUser,
};
