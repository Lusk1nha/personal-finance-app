import * as React from "react";

const IconBillDue: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    fill="currentColor" 
    viewBox="0 0 14 14"
    {...props}
  >
    <path
      
      d="M7 .5A6.5 6.5 0 1 0 13.5 7 6.507 6.507 0 0 0 7 .5m2.854 5.354-3.5 3.5a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L6 8.293l3.146-3.147a.5.5 0 1 1 .708.708"
    ></path>
  </svg>
);

export default React.memo(IconBillDue);
