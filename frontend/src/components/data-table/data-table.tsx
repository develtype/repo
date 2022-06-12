import { css, cx } from '@emotion/css';
import React from 'react';
import styles from './data-table.styles';

export type DataColDefType = {
  dataKey: string;
  label?: string;
  cellRender?: (cellData: string | number) => JSX.Element;
}
export type DataRowListType = {
  [key: string]: string | number;
}

type PropsType = {
  width?: number;
  headRowHeight?: number;
  bodyRowHeight?: number;
  dataColDef: DataColDefType[];
  dataList: DataRowListType[];
  seperateRow?: boolean;
  colorizedRow?: boolean;
  columnSeperate?: boolean;
  selectable?: boolean;
  selectedRowIndex?: number;
  onClickRow? : (index: number) => void;
}
export const DataTable = ({
  width,
  headRowHeight = 30,
  bodyRowHeight = 40,
  dataColDef,
  dataList,
  seperateRow = true,
  colorizedRow,
  columnSeperate,
  selectable,
  selectedRowIndex = 0,
  onClickRow,
}: PropsType) => (
  <table
    className={css(
      styles.root,
      {
        width,
      },
    )}
  >
    <thead className={styles.header}>
      <tr
        className={css({
          height: headRowHeight,
        })}
      >
        {dataColDef.map(
          (def, idx) => (
            <th
              key={`${def.dataKey}-${idx}`}
              className={cx(
                styles.headCell,
                { [styles.columnSeperate]: columnSeperate && idx !== dataColDef.length - 1 },
              )}
            >
              {def.label ?? def.dataKey}
            </th>
          ),
        )}
      </tr>
    </thead>
    <tbody className={styles.body}>
      {dataList.map(
        (row, rIdx) => (
          <tr
            key={rIdx}
            className={cx(
              { [styles.seperateRow]: seperateRow },
              { [styles.colorizedRow]: colorizedRow && (rIdx % 2 === 1) },
              { [styles.selectedRow]: !!selectable && selectedRowIndex === rIdx },
              { [styles.cursorPointer]: !!selectable },
              css({
                height: bodyRowHeight,
              }),
            )}
            onClick={(e) => {
              e.stopPropagation();
              onClickRow && onClickRow(rIdx);
            }}
          >
            {dataColDef.map(
              (col, cIdx) => (
                <td
                  key={`${row[col.dataKey]}-${cIdx}`}
                  className={cx(
                    styles.bodyCell,
                    { [styles.columnSeperate]: columnSeperate && cIdx !== dataColDef.length - 1 },
                  )}
                >
                  {col.cellRender ? col.cellRender(row[col.dataKey]) : row[col.dataKey]}
                </td>
              ),
            )}
          </tr>
        ),
      )}
    </tbody>
  </table>
);
