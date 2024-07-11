import * as React from "react";
interface Props {
  width?: number;
  height?: number;
}
export function HomeIcon(props: Props) {
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        opacity="0.4"
        d="M20.54 6.82006L14.78 2.79006C13.21 1.69006 10.8 1.75006 9.28999 2.92006L4.27999 6.83006C3.27999 7.61006 2.48999 9.21006 2.48999 10.4701V17.3701C2.48999 19.9201 4.55999 22.0001 7.10999 22.0001H17.89C20.44 22.0001 22.51 19.9301 22.51 17.3801V10.6001C22.51 9.25006 21.64 7.59006 20.54 6.82006Z"
        fill="#0F172A"
      />
      <path
        d="M12.5 18.75C12.09 18.75 11.75 18.41 11.75 18V15C11.75 14.59 12.09 14.25 12.5 14.25C12.91 14.25 13.25 14.59 13.25 15V18C13.25 18.41 12.91 18.75 12.5 18.75Z"
        fill="#0F172A"
      />
    </svg>
  );
}
