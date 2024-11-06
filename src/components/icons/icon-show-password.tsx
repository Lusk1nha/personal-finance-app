import * as React from "react";

const IconShowPassword: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="10"
    fill="currentColor" 
    viewBox="0 0 16 10"
    {...props}
  >
    <path
      
      d="M15.457 4.798c-.022-.05-.551-1.224-1.728-2.401C12.16.829 10.18 0 8 0S3.84.829 2.271 2.397C1.094 3.574.562 4.75.543 4.797a.5.5 0 0 0 0 .407c.022.05.551 1.223 1.728 2.4C3.84 9.17 5.82 10 8 10s4.16-.829 5.729-2.396c1.177-1.177 1.706-2.35 1.728-2.4a.5.5 0 0 0 0-.407M8 7.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5"
    ></path>
  </svg>
);

export default React.memo(IconShowPassword);
