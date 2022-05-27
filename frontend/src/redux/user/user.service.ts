import { httpApi } from '../http.api';
import { UserType } from '~src/types/data.type';
import { ResponseAjax } from '~src/types/response.type';

const fetchUsers = () => httpApi.getJSON<ResponseAjax<UserType[]>>({
  url: '/users',
});

export const userService = {
  fetchUsers,
};
