import React, { memo } from "react";

function ListGroup(props) {
  const { items = [], itemKey, itemLabel, selected, onSelect } = props;

  const onSelected = nextSelected => {
    if (selected === nextSelected) {
      onSelect();
    } else {
      onSelect(nextSelected);
    }
  };

  return (
    <ul className="list-group">
      {items.map(item => {
        return (
          <li
            className={`list-group-item ${
              item[itemKey] === selected ? "active" : ""
            }`}
            key={item[itemKey]}
            onClick={() => onSelected(item[itemKey])}
          >
            {item[itemLabel]}
          </li>
        );
      })}
    </ul>
  );
}

export default memo(ListGroup);
