import * as React from "react";

const IconNavRecurringBills: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="17"
    fill="currentColor" 
    viewBox="0 0 20 17"
    {...props}
  >
    <path
      
      d="M18.25.51H1.75a1.5 1.5 0 0 0-1.5 1.5v14.25a.75.75 0 0 0 1.086.67L4 15.598l2.664 1.332a.75.75 0 0 0 .672 0L10 15.598l2.664 1.332a.75.75 0 0 0 .672 0L16 15.598l2.664 1.332a.75.75 0 0 0 1.086-.67V2.01a1.5 1.5 0 0 0-1.5-1.5m-3.75 9.75h-9a.75.75 0 1 1 0-1.5h9a.75.75 0 1 1 0 1.5m0-3h-9a.75.75 0 0 1 0-1.5h9a.75.75 0 1 1 0 1.5"
    ></path>
  </svg>
);

export default React.memo(IconNavRecurringBills);
