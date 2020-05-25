import React, { useState } from "react";

export default function useDropdown(label, defaultState, options) {
  const [state, setState] = useState(defaultState);

  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;

  const Dropdown = () => (
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        value={state}
        onChange={(e) => e.target.value}
        onBlur={(e) => e.target.value}
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
