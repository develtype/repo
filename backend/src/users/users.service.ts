export type UserType = {
  id: number;
  name: string;
  email: string;
}

const users: UserType[] = [
  {
    id: 1,
    name: 'test',
    email: 'test@gmail.com',
  },
];

const fetchUsers = async () => users;

export const usersService = {
  fetchUsers,
};
