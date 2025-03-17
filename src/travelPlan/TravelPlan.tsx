import { useState } from "react";
import { initialTravelPlan } from "./data";
export default function TravelPlan() {
  //   const planets = initialTravelPlan.childPlaces;
  const [places, setPlaces] = useState<PlaceProps>(initialTravelPlan);
  function handleDelete(id: number) {
    console.log("here");

    function recur(place: PlaceProps): PlaceProps | null {
      if (place.id === id) {
        return null;
      }

      const updatedChildren = place.childPlaces
        .map(recur)
        .filter(Boolean) as PlaceProps[];

      return { ...place, childPlaces: updatedChildren };
    }

    const updated = recur(places);
    console.log("updated", updated);

    if (updated) setPlaces(updated);
  }
  return (
    <>
      <h1>Places to visit</h1>
      <ol>
        {places.childPlaces.map((planet) => {
          return (
            <PlaceTree key={planet.id} place={planet} onDelete={handleDelete} />
          );
        })}
      </ol>
    </>
  );
}

type PlaceProps = {
  id: number;
  title: string;
  childPlaces: PlaceProps[];
};

function PlaceTree({
  place,
  onDelete,
}: {
  place: PlaceProps;
  onDelete: (id: number) => void;
}) {
  return (
    <li key={place.id}>
      {place.title}
      <button onClick={() => onDelete(place.id)}>Complete</button>
      {place.childPlaces.length > 0 && (
        <ol key={place.id}>
          {place.childPlaces.map((country) => {
            return (
              <PlaceTree key={country.id} place={country} onDelete={onDelete} />
            );
          })}
        </ol>
      )}
    </li>
  );
}
