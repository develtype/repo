import { map } from 'rxjs';
import { ajax, AjaxConfig } from 'rxjs/ajax';

const apiUrl = 'http://localhost:5000';

function GETJSON<T>(config: AjaxConfig) {
  const {
    url,
    queryParams,
  } = config;

  return ajax<T>({
    ...config,
    url: `${apiUrl}${url}`,
    queryParams,
    method: 'GET',
  }).pipe<T>(
    map(({ response }) => response),
  );
}

function POST<T>(config: AjaxConfig) {
  const {
    url,
    queryParams,
    body,
  } = config;

  return ajax<T>({
    ...config,
    url: `${apiUrl}${url}`,
    queryParams,
    body,
    method: 'POST',
  }).pipe<T>(
    map(({ response }) => response),
  );
}

function PUT<T>(config: AjaxConfig) {
  const {
    url,
    queryParams,
    body,
  } = config;

  return ajax<T>({
    ...config,
    url: `${apiUrl}${url}`,
    queryParams,
    body,
    method: 'PUT',
  });
}

function DELETE<T>(config: AjaxConfig) {
  const {
    url,
    queryParams,
  } = config;

  return ajax<T>({
    ...config,
    url: `${apiUrl}${url}`,
    queryParams,
    method: 'DELETE',
  });
}

export const httpApi = {
  getJSON: GETJSON,
  post: POST,
  put: PUT,
  delete: DELETE,
};
