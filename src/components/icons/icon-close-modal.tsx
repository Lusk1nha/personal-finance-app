import * as React from "react";

const IconCloseModal: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="26"
    fill="currentColor" 
    viewBox="0 0 26 26"
    {...props}
  >
    <path
      
      d="M17.53 9.53 14.06 13l3.47 3.47a.75.75 0 1 1-1.06 1.06L13 14.06l-3.47 3.47a.75.75 0 0 1-1.06-1.06L11.94 13 8.47 9.53a.75.75 0 0 1 1.06-1.06L13 11.94l3.47-3.47a.75.75 0 0 1 1.06 1.06M25.75 13A12.75 12.75 0 1 1 13 .25 12.765 12.765 0 0 1 25.75 13m-1.5 0A11.25 11.25 0 1 0 13 24.25 11.26 11.26 0 0 0 24.25 13"
    ></path>
  </svg>
);

export default React.memo(IconCloseModal);
