import * as React from "react";

const IconFilterMobile: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="16"
    fill="currentColor" 
    viewBox="0 0 18 16"
    {...props}
  >
    <path
      
      d="m16.798 2.716-.007.007-5.291 5.65v4.335a1.25 1.25 0 0 1-.557 1.042l-2.5 1.667A1.25 1.25 0 0 1 6.5 14.375V8.373l-5.291-5.65-.007-.007A1.25 1.25 0 0 1 2.125.625h13.75a1.25 1.25 0 0 1 .925 2.09z"
    ></path>
  </svg>
);

export default React.memo(IconFilterMobile);
