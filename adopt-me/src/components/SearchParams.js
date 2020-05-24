import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";

export default function SearchParams() {
  const [location, setLocation] = useState("Santo Domingo");
  const [animal, setAnimal] = useState("dog");
  const [breed, setBreed] = useState("");
  const [breeds, setBreeds] = useState([]);

  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  };

  const handleChangeAnimal = (event) => {
    setAnimal(event.target.value);
  };

  const handleChangeBreed = (event) => {
    setBreed(event.target.value);
  };

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={handleChangeLocation}
          />
        </label>
        <label>
          Animal
          <select
            id="animal"
            value={animal}
            onChange={handleChangeAnimal}
            onBlur={handleChangeAnimal}
          >
            <option>All</option>
            {ANIMALS.map((animal, key) => (
              <option value={animal} key={key}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label>
          Breed
          <select
            id="breed"
            value={breed}
            onChange={handleChangeBreed}
            onBlur={handleChangeBreed}
            disabled={!breeds}
          >
            <option>All</option>
            {breeds.map((breed, key) => (
              <option value={breed} key={key}>
                {breed}
              </option>
            ))}
          </select>
        </label>

        <button>Submit</button>
      </form>
    </div>
  );
}
