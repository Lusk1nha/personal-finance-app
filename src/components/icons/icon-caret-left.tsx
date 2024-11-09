import * as React from "react";

const IconCaretLeft: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="6"
    height="11"
    fill="currentColor" 
    viewBox="0 0 6 11"
    {...props}
  >
    <path
      
      d="m5.147 10.854-5-5a.5.5 0 0 1 0-.708l5-5A.5.5 0 0 1 6 .5v10a.5.5 0 0 1-.853.354"
    ></path>
  </svg>
);

export default React.memo(IconCaretLeft);
