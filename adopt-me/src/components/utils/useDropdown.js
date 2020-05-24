import React, { useState } from "react";

export default function useDropdown(label, defaultState, options) {
  const [state, setState] = useState(defaultState);

  const id = `use-dropdonw-${label.replace(" ", "").toLowerCase()}`;

  const handleChangeState = (event) => {
    setState(event.taget.value);
  };

  const Dropdown = () => (
    <label htmlFor={id}>
      <select
        id={id}
        value={state}
        onChange={handleChangeState}
        onBlur={handleChangeState}
        disabled={!options.length}
      >
        <option>All</option>
        {options.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </label>
  );

  return [state, Dropdown, setState];
}
