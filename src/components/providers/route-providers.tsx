import { ReactNode } from "react";
import { TooltipProvider } from "../ui/tooltip";

interface IRouteProvidersProps {
  children: ReactNode;
}

export function RouteProviders(props: Readonly<IRouteProvidersProps>) {
  const { children } = props;

  return <TooltipProvider>{children}</TooltipProvider>;
}
