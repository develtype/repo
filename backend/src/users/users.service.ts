import { util } from "@utils/util";

export type UserType = {
  id: number;
  name: string;
  email: string;
}

const usersData: { [id: string]: UserType; } = Array.from(Array(10).keys()).reduce<{ [id: string]: UserType; }>(
  (res, item) => {
    const name = util.generateRandomString();
    const userItem = {
      id: item + 1,
      name,
      email: name + '@test.com',
    };
    res[item] = userItem;
    return res;
  },
  {},
);

const fetchUsers = async () => {
  await new Promise((r) => setTimeout(r, Math.random() * 50 + 90));
  return Object.values(usersData);
};

const createUser = async (name: string, email: string) => {
  const newId = Math.max(...Object.values(usersData).map((user) => +user.id)) + 1;

  usersData[newId] = {
    id: newId,
    name,
    email,
  };

  await new Promise((r) => setTimeout(r, Math.random() * 80 + 80));
  return { id: newId };
};

const updateUser = async (id: number, name: string, email: string) => {
  usersData[id] = {
    id,
    name,
    email,
  };

  await new Promise((r) => setTimeout(r, Math.random() * 70 + 70));
  return usersData[id];
};

export const usersService = {
  fetchUsers,
  createUser,
  updateUser,
};
