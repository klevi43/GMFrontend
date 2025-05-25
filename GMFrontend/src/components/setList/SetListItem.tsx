import React from "react";
interface Props {
  col1: string | number;
  col2: string | number;
  col3: string | number;
  col4: string;
  styles?: string;
}
const SetListItem = ({ col1, col2, col3, col4, styles }: Props) => {
  return (
    <li className="grid grid-cols-4 gap-4 text-text">
      <div className="text-center">{col1}</div>
      <div className="text-center">{col2}</div>
      <div className="text-center">{col3}</div>
      <div className="text-center">{col4}</div>
    </li>
  );
};

export default SetListItem;
