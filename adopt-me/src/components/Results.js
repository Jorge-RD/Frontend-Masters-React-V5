import React from "react";
import Pet from "./Pet";

export default function Results({ pets }) {
  const content = !pets.length ? (
    <h1>No Pets Found</h1>
  ) : (
    pets.map(({ type, id, name, breeds, photos, contact }) => {
      const { primary } = breeds;
      const { state, city } = contact.address;
      return (
        <Pet
          animal={type}
          key={id}
          id={id}
          name={name}
          breed={primary}
          media={photos}
          location={`${state} - ${city}}`}
        />
      );
    })
  );
  return <div className="search">{content}</div>;
}
