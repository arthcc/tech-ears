import * as React from "react";
interface Props {
  width?: number;
  height?: number;
}
export function WrongIcon(props: Props) {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        opacity="0.4"
        d="M37.7767 4.66663H18.2234C9.73008 4.66663 4.66675 9.72996 4.66675 18.2233V37.7533C4.66675 46.27 9.73008 51.3333 18.2234 51.3333H37.7534C46.2467 51.3333 51.3101 46.27 51.3101 37.7766V18.2233C51.3334 9.72996 46.2701 4.66663 37.7767 4.66663Z"
        fill="#E53636"
      />
      <path
        d="M30.4734 28L35.8401 22.6333C36.5168 21.9566 36.5168 20.8366 35.8401 20.16C35.1634 19.4833 34.0434 19.4833 33.3668 20.16L28.0001 25.5266L22.6334 20.16C21.9568 19.4833 20.8368 19.4833 20.1601 20.16C19.4834 20.8366 19.4834 21.9566 20.1601 22.6333L25.5268 28L20.1601 33.3666C19.4834 34.0433 19.4834 35.1633 20.1601 35.84C20.5101 36.19 20.9534 36.3533 21.3968 36.3533C21.8401 36.3533 22.2834 36.19 22.6334 35.84L28.0001 30.4733L33.3668 35.84C33.7168 36.19 34.1601 36.3533 34.6034 36.3533C35.0468 36.3533 35.4901 36.19 35.8401 35.84C36.5168 35.1633 36.5168 34.0433 35.8401 33.3666L30.4734 28Z"
        fill="#E53636"
      />
    </svg>
  );
}
