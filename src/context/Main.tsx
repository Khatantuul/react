import { createContext, ReactNode, useContext, useState } from "react";
import { places } from "./data.js";
import "./style.css";

type Place = {
  id: number;
  name: string;
  description: string;
  imageId: string;
};

//--------------------------context 
const ImageSizeContext = createContext({
  imageSize: 100,
  changeImageSize: () => {},
});

export function ImageSizeContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [imageSize, setImageSize] = useState(100);
  const changeImageSize = () => {
    console.log("coming here");

    if (imageSize === 100) {
      setImageSize(150);
    } else {
      setImageSize(100);
    }
  };
  return (
    <ImageSizeContext.Provider value={{ imageSize, changeImageSize }}>
      {children}
    </ImageSizeContext.Provider>
  );
}

function useImageSizeContext() {
  const context = useContext(ImageSizeContext);
  if (context === undefined)
    throw new Error("You may have forgotten to wrap the provider");
  return context;
}
//--------------------------------------context


export default function ContextChallengeMain() {
//   const [isLarge, setIsLarge] = useState(false);
  //   const imageSize = isLarge ? 150 : 100;
  const { imageSize, changeImageSize } = useImageSizeContext();

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={imageSize === 150}
          onChange={() => {
            changeImageSize();
          }}
        />
        Use large images
      </label>
      <hr />
      <List />
    </>
  );
}

function List() {
  const listItems = places.map((place) => (
    <li key={place.id}>
      <Place
        place={place}
        // imageSize={imageSize}
      />
    </li>
  ));
  return <ul>{listItems}</ul>;
}

function Place({ place }: { place: Place }) {
  return (
    <>
      <PlaceImage
        place={place}
        // imageSize={imageSize}
      />
      <p>
        <b>{place.name}</b>
        {": " + place.description}
      </p>
    </>
  );
}

function PlaceImage({ place }: { place: Place }) {
  const { imageSize } = useImageSizeContext();
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}

function getImageUrl(place: Place) {
  return "https://i.imgur.com/" + place.imageId + "l.jpg";
}
