import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";

export default function SearchParams() {
  const [location, setLocation] = useState("Santo Domingo");

  const handleChange = (event) => {
    setLocation(event.target.value);
  };
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={handleChange}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
