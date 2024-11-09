import * as React from "react";

const IconCaretDown: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="6"
    fill="currentColor"
    viewBox="0 0 12 6"
    {...props}
  >
    <path d="m11.354.854-5 5a.5.5 0 0 1-.708 0l-5-5A.5.5 0 0 1 1 0h10a.5.5 0 0 1 .354.854"></path>
  </svg>
);

export default React.memo(IconCaretDown);
