import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";

import Location from "./Location";
import Results from "./Results";
import useDropdown from "./utils/useDropdown";

export default function SearchParams() {
  const [breeds, setBreeds] = useState([]);
  const [pets, setPets] = useState([]);

  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);

  const requestPets = async () => {
    const { animals } = await pet.animals({ location, breed, type: animal });
    setPets(animals || []);
  };

  useEffect(() => {
    setBreeds([]);
    setBreed("");
    pet.breeds(animal).then(({ breeds }) => {
      const breedStrings = breeds.map(({ name }) => name);
      setBreeds(breedStrings);
    });
  }, [animal]);

  const handleSubmt = (event) => {
    event.preventDefault();
    requestPets();
  };
  return (
    <div className="search-params">
      <form onSubmit={(event) => handleSubmt(event)}>
        <Location />
        <AnimalDropdown />
        <BreedDropdown />

        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
}
