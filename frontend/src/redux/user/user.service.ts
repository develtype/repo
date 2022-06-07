import { httpApi } from '../http.api';
import { UserType } from '~src/types/data.type';
import { ResponseAjax } from '~src/types/response.type';

const fetchUsers = () => httpApi.getJSON<ResponseAjax<UserType[]>>({
  url: '/users',
});

export type CreateUserParamsType = {
  name: string;
  email?: string;
}
const createUser = (
  data: CreateUserParamsType,
) => httpApi.post<ResponseAjax<{ id: number; }>>({
  url: '/users',
  body: data,
});

export type UpdateUserParamsType = {
  id: number;
  name: string;
  email?: string;
}
const updateUser = (
  data: UpdateUserParamsType,
) => httpApi.put({
  url: `/users/${data.id}`,
  body: {
    name: data.name,
    email: data.email,
  },
});
});

export const userService = {
  fetchUsers,
  createUser,
  updateUser,
};
