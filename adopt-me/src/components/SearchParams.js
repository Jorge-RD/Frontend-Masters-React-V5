import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";

import Location from "./Location";
import useDropdown from "./utils/useDropdown";

export default function SearchParams() {
  const [breeds, setBreeds] = useState([]);

  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);

  useEffect(() => {
    setBreeds([]);
    setBreed("");
    pet.breeds(animal).then(({ breeds }) => {
      const breedStrings = breeds.map(({ name }) => name);
      setBreeds(breedStrings);
    });
  }, [animal]);

  return (
    <div className="search-params">
      <form>
        <Location />
        <AnimalDropdown />
        <BreedDropdown />

        <button>Submit</button>
      </form>
    </div>
  );
}
