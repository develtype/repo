import { css } from '@emotion/css';

const root = css({
  position: 'absolute',
  zIndex: 90,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  minWidth: 800,
  minHeight: 700,
  backgroundColor: 'rgb(0 0 0 / 0.45)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 20,
});

const alignVModalTop = css({
  alignItems: 'start',
});

const alignVModalCenter = css({
  alignItems: 'center',
});

const alignVModalBottom = css({
  alignItems: 'end',
});

const alignHModalLeft = css({
  justifyContent: 'start',
});

const alignHModalCenter = css({
  justifyContent: 'center',
});

const alignHModalRight = css({
  justifyContent: 'end',
});


const modal = css({
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow: '0px 5px 10px 0 rgba(0, 0, 0, 0.15)',
});

const header = css({
  height: 50,
  borderBottom: 'solid 1px #dddddd',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 20px',
  borderRadius: '6px 6px 0 0',
});

const headerTitle = css({
  color: '#444444',
  fontSize: 18,
  fontWeight: 'bold',
  textTransform: 'capitalize',
});

const whiteFontColor = css({
  color: '#white',
});

const closeButton = css({
  color: '#444444',
  '&:hover': {
    cursor: 'pointer',
    opacity: 0.5,
  },
});

export default {
  root,
  alignVModalTop,
  alignVModalCenter,
  alignVModalBottom,
  alignHModalLeft,
  alignHModalCenter,
  alignHModalRight,
  modal,
  header,
  headerTitle,
  whiteFontColor,
  closeButton,
};
