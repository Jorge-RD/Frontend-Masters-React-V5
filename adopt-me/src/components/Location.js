import React, { useState } from "react";

export default function SearchParams() {
  const [location, setLocation] = useState("Santo Domingo");

  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  };

  return (
    <label htmlFor="location">
      <input
        id="location"
        value={location}
        placeholder="Location"
        onChange={handleChangeLocation}
      />
    </label>
  );
}
