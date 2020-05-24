import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";

import Location from "./Location";
import useDropdown from "./utils/useDropdown";

export default function SearchParams() {
  const [breeds, setBreeds] = useState([]);

  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", []);

  useEffect(async () => {
    setBreeds([]);
    setBreed("");
    const { breeds } = await pet.breeds(animal);
    const breedString = breeds.map(({ name }) => name);
    setBreed(breedString);
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
