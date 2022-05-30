import { css } from '@emotion/css';

const root = css({
  width: '100%',
  border: '0px solid',
  borderCollapse: 'collapse',
});

const cell = css({
  textAlign: 'center',
  border: '0px solid',
  padding: '5px 10px',
  cursor: 'pointer',
});

const header = css({
  fontSize: 15,
  fontWeight: 500,
  color: 'white',
  backgroundColor: '#cccccc',
});

const body = css({
  fontSize: 13,
  color: '#808080',
});

const headCell = css(
  cell,
);

const bodyCell = css(
  cell,
);

const seperateRow = css({
  borderBottom: '1px solid #dddddd',
});

const colorizedRow = css({
  backgroundColor: '#eeeeee',
});

const columnSeperate = css({
  borderRight: '1px solid white',
});

export default {
  root,
  cell,
  header,
  body,
  headCell,
  bodyCell,
  seperateRow,
  colorizedRow,
  columnSeperate,
};
