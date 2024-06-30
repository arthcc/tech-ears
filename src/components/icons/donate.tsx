import * as React from "react";
interface Props {
  width?: number;
  height?: number;
}
export function DonateIcon(props: Props) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.66675 7.33333L14.1334 1.86667"
        stroke="#4581F4"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.6666 4.53334V1.33334H11.4666"
        stroke="#4581F4"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.33325 8.66V10C1.33325 13.3333 2.66659 14.6667 5.99992 14.6667H9.99992C13.3333 14.6667 14.6666 13.3333 14.6666 10V8.66667"
        stroke="#4581F4"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.33325 1.33334H5.99992C2.66659 1.33334 1.33325 2.66668 1.33325 6.00001"
        stroke="#4581F4"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
