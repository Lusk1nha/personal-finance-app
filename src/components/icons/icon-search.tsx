import * as React from "react";

const IconSearch: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    fill="currentColor" 
    viewBox="0 0 14 14"
    {...props}
  >
    <path
      
      d="m13.354 13.146-3.13-3.129a5.507 5.507 0 1 0-.706.707l3.128 3.13a.5.5 0 1 0 .708-.708M1.5 6.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0"
    ></path>
  </svg>
);

export default React.memo(IconSearch);
