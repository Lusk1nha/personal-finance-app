import * as React from "react";

const IconSortMobile: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="15"
    fill="currentColor" 
    viewBox="0 0 16 15"
    {...props}
  >
    <path
      
      d="M14.25 0H1.75A1.25 1.25 0 0 0 .5 1.25v12.5A1.25 1.25 0 0 0 1.75 15h12.5a1.25 1.25 0 0 0 1.25-1.25V1.25A1.25 1.25 0 0 0 14.25 0M3.625 3.125h7.5a.625.625 0 1 1 0 1.25h-7.5a.625.625 0 0 1 0-1.25m3.125 8.75H3.625a.625.625 0 1 1 0-1.25H6.75a.625.625 0 1 1 0 1.25m.625-3.75h-3.75a.625.625 0 0 1 0-1.25h3.75a.625.625 0 0 1 0 1.25m6.067 2.317-1.875 1.875a.627.627 0 0 1-.884 0l-1.875-1.875a.625.625 0 0 1 .884-.884l.808.808V6.875a.625.625 0 1 1 1.25 0v3.491l.808-.808a.625.625 0 0 1 .884.884"
    ></path>
  </svg>
);

export default React.memo(IconSortMobile);
