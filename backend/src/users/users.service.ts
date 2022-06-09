import { util } from '@utils/util';

export type UserType = {
  id: string;
  name: string;
  email: string;
}

const usersData: { [id: string]: UserType; } = Array.from(Array(10).keys()).reduce<{ [id: string]: UserType; }>(
  (res) => {
    const name = util.generateRandomString();
    const userItem = {
      id: name,
      name,
      email: name + '@test.com',
    };
    res[name] = userItem;
    return res;
  },
  {},
);

const fetchUsers = async () => {
  await new Promise((r) => setTimeout(r, Math.random() * 50 + 140));
  return Object.values(usersData);
};

const createUser = async (name: string, email: string) => {
  const newId = util.generateRandomString();

  usersData[newId] = {
    id: newId,
    name,
    email,
  };

  await new Promise((r) => setTimeout(r, Math.random() * 80 + 120));
  return { id: newId };
};

const updateUser = async (id: string, name: string, email: string) => {
  usersData[id] = {
    id,
    name,
    email,
  };

  await new Promise((r) => setTimeout(r, Math.random() * 70 + 100));
  return usersData[id];
};

const deleteUser = async (id: string) => {
  delete usersData[id];

  await new Promise((r) => setTimeout(r, Math.random() * 60 + 100));
  return usersData[id];
};

export const usersService = {
  fetchUsers,
  createUser,
  updateUser,
  deleteUser,
};
