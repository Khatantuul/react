import {type Color} from './lib/types';
//making it clear that it is not regular component but rather custom type
//so as to prevent from doing new Color() or something

interface ButtonProps {
  style: React.CSSProperties;
  color?: Color
}

type URL = string;
// interface URL {
//     url: string
// }
const url: URL = "https://google.com";

export default function Button({ style }: ButtonProps) {
  console.log("Button is re-rendering");
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e.target);
  };

  return (
    <>
      <div>
        <button style={style} onClick={handleClick}>
          Submit
        </button>
      </div>
    </>
  );
}
