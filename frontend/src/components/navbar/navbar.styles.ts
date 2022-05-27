import { css } from '@emotion/css';

const root = css({
  position: 'sticky',
  top: 0,
  width: '100%',
  height: 60,
  backgroundColor: '#39544b',
  display: 'flex',
  flexDirection: 'row',
});

const navItem = css({
  width: 150,
  fontSize: 20,
  fontWeight: 'bold',
  lineHeight: 1,
  color: 'white',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: 'inset -1px 0 0 0 white',
  ':hover': {
    cursor: 'pointer',
    backgroundColor: '#689988',
  },
});

const activeItem = css({
  backgroundColor: '#a5cfc0',
});

export default {
  root,
  navItem,
  activeItem,
};
