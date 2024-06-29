import * as React from "react";
interface Props {
  width?: number;
  height?: number;
}
export function PlayIcon(props: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.width ?? 25} height={props.height ?? 24} fill="none" {...props}>
      <path
        fill="#fff"
        d="m18.7 9.556-14.56 8.73c-.09-.33-.14-.68-.14-1.04v-9.34c0-3.08 3.33-5 6-3.46l4.04 2.33 4.05 2.34c.22.13.43.27.61.44Z"
      />
      <path
        fill="#fff"
        d="m18.09 16.036-4.05 2.34-4.04 2.33c-1.91 1.1-4.16.44-5.28-1.17l.42-.25 14.44-8.66c1 1.8.51 4.26-1.49 5.41Z"
        opacity={0.4}
      />
    </svg>
  );
}
