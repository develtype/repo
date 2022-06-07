import { css, cx } from '@emotion/css';
import React from 'react';
import InlineSVG from 'react-inlinesvg/esm';
import styles from './button.styles';
import { Space } from '~src/components/space/space';

export type PropsType = {
  name: string;
  sizeType?: 'sm' | 'md' | 'lg' | 'full';
  svgIconSrc?: string;
  buttonColor?: 'greenBlue' | 'gray' | 'dimedRed';
  fontColor?: 'greenBlue' | 'gray' | 'dimedRed' | 'white';
  outlineBorderwidth?: number;
  outlined?: boolean;
  disabled?: boolean;
  isRounded?: boolean;
  isFullFill?: boolean;
  onClickButton(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
};

export const Button = ({
  name,
  sizeType = 'md',
  svgIconSrc,
  buttonColor = 'greenBlue',
  fontColor,
  outlineBorderwidth,
  outlined = false,
  disabled = false,
  isRounded = true,
  onClickButton,
}: PropsType) => (
  <button
    type="button"
    className={css(
      cx(
        styles.root,
        { [styles.smSize]: sizeType === 'sm' },
        { [styles.mdSize]: sizeType === 'md' },
        { [styles.lgSize]: sizeType === 'lg' },
        { [styles.fullSize]: sizeType === 'full' },
        { [styles.rounded]: isRounded },
        { [styles.greenBlue]: buttonColor === 'greenBlue' },
        { [styles.gray]: buttonColor === 'gray' },
        { [styles.dimedRed]: buttonColor === 'dimedRed' },
        { [styles.greenBlueFontColor]: fontColor === 'greenBlue' },
        { [styles.grayFontColor]: fontColor === 'gray' },
        { [styles.dimedRed]: fontColor === 'dimedRed' },
        { [styles.whiteFontColor]: fontColor === 'white' },
        { [styles.outlined]: outlined },
      ),
      {
        borderWidth: outlineBorderwidth,
      },
    )}
    onClick={onClickButton}
    disabled={disabled}
  >
    {svgIconSrc && (
      <>
        <InlineSVG
          src={svgIconSrc}
          className={cx(
            { [styles.smIcon]: sizeType === 'sm' },
            { [styles.mdIcon]: sizeType === 'md' },
            { [styles.lgIcon]: sizeType === 'lg' },
            { [styles.lgIcon]: sizeType === 'full' },
          )}
        />
        <Space horizonal={10} />
      </>
    )}
    <span className={styles.label}>
      {name}
    </span>
  </button>
);
