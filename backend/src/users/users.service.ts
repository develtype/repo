import { util } from '../util/util';

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
      email: name + '@gmail.com',
    };
    res[item] = userItem;
    return res;
  },
  {},
);

const fetchUsers = async () => Object.values(usersData);

export const usersService = {
  fetchUsers,
};
