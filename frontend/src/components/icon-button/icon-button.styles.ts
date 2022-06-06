import { css } from '@emotion/css';

const root = css({
  border: 0,
  margin: 0,
  padding: 0,
  borderRadius: 3,
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#9595a5',
  outline: 'none',
  cursor: 'pointer',
  '&:hover': {
    opacity: 0.5,
  },
  ':disabled': {
    cursor: 'not-allowed',
    opacity: 0.5,
  },
});

const smSize = css({
  width: 28,
  height: 28,
});

const mdSize = css({
  width: 32,
  height: 32,
});

const lgSize = css({
  width: 40,
  height: 40,
});

const smIcon = css({
  width: 18,
  height: 18,
});

const mdIcon = css({
  width: 22,
  height: 22,
});

const lgIcon = css({
  width: 30,
  height: 30,
});

const outlined = css({
  backgroundColor: 'unset',
});

const circled = css({
  borderRadius: '100%',
});

const rounded = css({
  borderRadius: 4,
});

const noShapeButton = css({
  backgroundColor: 'unset',
  border: 'none',
});

const greenBlue = css({
  border: 'solid 2px #6dabb1',
  backgroundColor: '#6dabb1',
});

const whiteIconColor = css({
  color: 'white',
});

const greenBlueIconColor = css({
  color: '#6dabb1',
});

export default {
  root,
  smSize,
  mdSize,
  lgSize,
  smIcon,
  mdIcon,
  lgIcon,
  outlined,
  circled,
  rounded,
  noShapeButton,
  greenBlue,
  whiteIconColor,
  greenBlueIconColor,
};
