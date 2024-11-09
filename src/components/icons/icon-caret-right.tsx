import * as React from "react";

const IconCaretRight: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="6"
    height="11"
    fill="currentColor" 
    viewBox="0 0 6 11"
    {...props}
  >
    <path
      
      d="m.854.146 5 5a.5.5 0 0 1 0 .708l-5 5A.5.5 0 0 1 0 10.5V.5A.5.5 0 0 1 .854.146"
    ></path>
  </svg>
);

export default React.memo(IconCaretRight);
