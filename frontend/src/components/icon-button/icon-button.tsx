import { cx, css } from '@emotion/css';
import * as React from 'react';
import InlineSVG from 'react-inlinesvg/esm';
import styles from './icon-button.styles';

type IconButtonPropType = {
  svgIconSrc: string;
  sizeType?: 'sm' | 'md' | 'lg';
  buttonColor?: 'greenBlue' | 'gray';
  iconColor?: 'greenBlue' | 'gray' | 'white';
  borderRadius?: number;
  outlined?: boolean;
  noShape?: boolean;
  isRounded?: boolean;
  isCircled?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export function IconButton({
  svgIconSrc,
  sizeType = 'md',
  buttonColor = 'greenBlue',
  iconColor = 'white',
  borderRadius,
  outlined = false,
  noShape = false,
  isRounded = true,
  isCircled = false,
  disabled = false,
  onClick,
}: IconButtonPropType) {
  return (
    <button
      className={cx(
        styles.root,
        { [styles.smSize]: sizeType === 'sm' },
        { [styles.mdSize]: sizeType === 'md' },
        { [styles.lgSize]: sizeType === 'lg' },
        { [styles.greenBlue]: buttonColor === 'greenBlue' },
        { [styles.gray]: buttonColor === 'gray' },
        { [styles.whiteIconColor]: iconColor === 'white' },
        { [styles.grayIconColor]: iconColor === 'gray' },
        { [styles.greenBlueIconColor]: iconColor === 'greenBlue' },
        { [styles.rounded]: isRounded },
        { [styles.circled]: isCircled },
        { [styles.outlined]: outlined },
        { [styles.noShapeButton]: noShape },
        css({
          borderRadius,
        }),
      )}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      <InlineSVG
        src={svgIconSrc}
        className={cx(
          { [styles.smIcon]: sizeType === 'sm' },
          { [styles.mdIcon]: sizeType === 'md' },
          { [styles.lgIcon]: sizeType === 'lg' },
        )}
      />
    </button>
  );
}
