import 'react-toastify/dist/ReactToastify.css';

import { toast, ToastOptions } from 'react-toastify';

const errorOptions: ToastOptions = {
  autoClose: 3000,
};

const warningOptions: ToastOptions = {
  autoClose: 2000,
};

const infoOptions: ToastOptions = {
  autoClose: 1000,
};

export const toastTool = {
  ...toast,
  error: (msg: string, options?: ToastOptions) => toast.error(msg, { ...options, ...errorOptions }),
  warning: (msg: string, options?: ToastOptions) => toast.warning(msg, { ...options, ...warningOptions }),
  info: (msg: string, options?: ToastOptions) => toast.info(msg, { ...options, ...infoOptions }),
};
