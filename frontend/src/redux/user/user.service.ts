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
) => httpApi.post({
  url: '/users',
  body: data,
});

export const userService = {
  fetchUsers,
  createUser,
};
