import * as React from "react";

const IconRecurringBills: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="28"
    fill="currentColor" 
    viewBox="0 0 32 28"
    {...props}
  >
    <path
      
      d="M24.438 10.25a.94.94 0 0 1-.938.938h-15a.938.938 0 0 1 0-1.876h15a.937.937 0 0 1 .938.938m-.938 4.063h-15a.938.938 0 0 0 0 1.874h15a.938.938 0 0 0 0-1.875M31.938 2.75V26.5a.938.938 0 0 1-1.357.84L26 25.047l-4.581 2.291a.94.94 0 0 1-.838 0L16 25.05l-4.581 2.29a.94.94 0 0 1-.838 0L6 25.05l-4.581 2.29A.938.938 0 0 1 .063 26.5V2.75A2.19 2.19 0 0 1 2.25.562h27.5a2.187 2.187 0 0 1 2.188 2.188m-1.875 0a.31.31 0 0 0-.313-.312H2.25a.31.31 0 0 0-.312.312v22.233L5.58 23.16a.94.94 0 0 1 .838 0L11 25.45l4.581-2.29a.94.94 0 0 1 .838 0L21 25.45l4.581-2.29a.94.94 0 0 1 .838 0l3.643 1.822z"
    ></path>
  </svg>
);

export default React.memo(IconRecurringBills);