import * as React from "react";

const IconMinimizeMenu: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="currentColor" 
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      
      d="M14 5.26v9a.75.75 0 0 1-.75.75H11v3.75a.75.75 0 0 1-1.28.53l-9-9a.75.75 0 0 1 0-1.06l9-9A.75.75 0 0 1 11 .76v3.75h2.25a.75.75 0 0 1 .75.75m2.25-.75a.75.75 0 0 0-.75.75v9a.75.75 0 1 0 1.5 0v-9a.75.75 0 0 0-.75-.75m3 0a.75.75 0 0 0-.75.75v9a.75.75 0 1 0 1.5 0v-9a.75.75 0 0 0-.75-.75"
    ></path>
  </svg>
);

export default React.memo(IconMinimizeMenu);
