import React, { ComponentType } from 'react';
import { Modal } from '~src/components/modal/modal';

type ModalWrapperPropsType = {
  onClose(): void;
  modalOptions?: {
    alignV?: 'top' | 'bottom' | 'center';
    alignH?: 'left' | 'right' | 'center';
  };
};

export function withModalWrapper<T>(
  title: string,
  Component: ComponentType<T>,
) {
  const WrappedComp = (props: T & ModalWrapperPropsType) => (
    <Modal
      title={title}
      alignV={props.modalOptions?.alignV}
      alignH={props.modalOptions?.alignH}
      onClose={props.onClose}
    >
      <Component {...props} />
    </Modal>
  );

  return WrappedComp;
}
