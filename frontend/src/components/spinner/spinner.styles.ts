import { css, keyframes } from '@emotion/css';

const rotateAnime = keyframes({
  to: {
    transform: 'rotate(360deg)',
  },
});

const spinner = css({
  display: 'inline-block',
  width: 80,
  height: 80,
  border: '6px solid white',
  borderRadius: '50%',
  borderTopColor: '#689988',
  animation: `${rotateAnime} 1s ease-in-out infinite`,
});

export default {
  spinner,
};
