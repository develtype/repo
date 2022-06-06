import { ValidationErrors } from '../types/validator.type';

export const validatorsErrkeys = {
  required: 'isRequired',
};

function isRequired<T>(formValue: T): ValidationErrors | null {
  return ((typeof formValue !== 'number' && !formValue) || (typeof formValue === 'number' && isNaN(formValue)))
    ? { [validatorsErrkeys.required]: true }
    : null;
}

export const validators = {
  isRequired,
};
