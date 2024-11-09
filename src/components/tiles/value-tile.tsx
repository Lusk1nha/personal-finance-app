import { cn } from "@/lib/utils";

import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { AnimatedCurrency } from "../animated-currency";

type Variant = "default" | "primary";

interface IValueTileProps {
  variant?: Variant;
  id: string;
  title: string;
  value: number;
  tooltip?: string;
  className?: string;
}

export function ValueTile(props: Readonly<IValueTileProps>) {
  const { variant = "default", id, title, value, className, tooltip } = props;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          id={id}
          className={cn(
            "w-full flex flex-col gap-150 h-[111px] md:h-[119px] p-250 md:p-300 rounded-150 shadow-sm cursor-help",
            variant === "primary" ? "bg-appGrey" : "bg-appWhite",
            className
          )}
        >
          <h2
            className={cn(
              "text-sm font-normal",
              variant === "primary" ? "text-appWhite" : "text-appGrey-500"
            )}
          >
            {title}
          </h2>
          <p
            className={cn(
              "font-bold text-[32px] text-ellipsis truncate",
              variant === "primary" ? "text-appWhite" : "text-appGrey"
            )}
          >
            <AnimatedCurrency>{value}</AnimatedCurrency>
          </p>
        </div>
      </TooltipTrigger>
      <TooltipContent>{tooltip ?? title}</TooltipContent>
    </Tooltip>
  );
}
