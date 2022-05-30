import { Dispatch, SetStateAction, useState } from 'react';
import { ValidationErrors } from '~src/types/validator.type';

/**
 * Custom input form control hooks
 * @param initValue initial form state
 * @param validateFn form validator function array (optional)
 * @returns [ formState, setFormState, formError ]
 */
export function useStateControl<T>(
  initValue: T,
  validateFn?: ((formValue: T) => ValidationErrors | null)[],
): [T, Dispatch<SetStateAction<T>>, ValidationErrors | null] {
  const [value, setValue] = useState(initValue);
  let stateError: ValidationErrors | null = null;

  if (validateFn && validateFn.length > 0) {
    stateError = validateFn
      .map((fn) => fn(value))
      .reduce<ValidationErrors | null>(
        (res, error) => {
          if (error) {
            if (!res) {
              res = {};
            }
            Object.assign(res, error);
          }
          return res;
        },
        null,
      );
  }

  return [value, setValue, stateError];
}
