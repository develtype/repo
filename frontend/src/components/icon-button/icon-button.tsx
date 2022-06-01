import { cx, css } from '@emotion/css';
import * as React from 'react';
import InlineSVG from 'react-inlinesvg/esm';
import styles from './icon-button.styles';

type IconButtonPropType = {
  svgIconSrc: string;
  sizeType?: 'sm' | 'md' | 'lg';
  buttonColor?: 'greenBlue';
  iconColor?: 'greenBlue' | 'white';
  borderRadius?: number;
  outlined?: boolean;
  noShape?: boolean;
  isRounded?: boolean;
  isCircled?: boolean;
  disabled?: boolean;
  onClickButton?: () => void;
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
  onClickButton,
}: IconButtonPropType) {
  return (
    <button
      className={cx(
        styles.root,
        { [styles.smSize]: sizeType === 'sm' },
        { [styles.mdSize]: sizeType === 'md' },
        { [styles.lgSize]: sizeType === 'lg' },
        { [styles.greenBlue]: buttonColor === 'greenBlue' },
        { [styles.whiteIconColor]: iconColor === 'white' },
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
      onClick={onClickButton}
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