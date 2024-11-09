import * as React from "react";

const IconEllipses: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="4"
    fill="currentColor" 
    viewBox="0 0 14 4"
    {...props}
  >
    <path
      
      d="M8.75 2a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0M2 .25a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m10 0a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5"
    ></path>
  </svg>
);

export default React.memo(IconEllipses);
