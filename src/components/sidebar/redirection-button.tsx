"use client";

import { cn } from "@/lib/utils";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type Variant = "icon" | "long";

interface IRedirectButtonProps {
  variant?: "icon" | "long";
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  href: string;
  description?: string;
}

export function RedirectButton(props: Readonly<IRedirectButtonProps>) {
  const { variant = "long", href } = props;
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const currentPathname = isClient ? pathname : "";
  const isActive = currentPathname === href;

  const component = useMemo(
    () => getComponent(variant),
    [variant, isActive, getComponent]
  );

  function getComponent(variant: Variant) {
    switch (variant) {
      case "long":
        return <LongVariant isActive={isActive} {...props} />;
      case "icon":
        return <IconVariant isActive={isActive} {...props} />;
    }
  }

  return (
    <motion.div
      className="w-full flex items-center"
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
        },
      }}
    >
      {component}
    </motion.div>
  );
}

interface VariantProps extends IRedirectButtonProps {
  isActive: boolean;
}

function LongVariant(props: Readonly<VariantProps>) {
  const { icon: Icon, title, href, isActive } = props;
  return (
    <Link
      href={href}
      className={cn(
        "w-full flex items-center h-14 pl-300 mr-300 gap-4 rounded-r-150 text-base font-bold group",
        isActive
          ? "bg-appBeige-100 text-appGrey border-l-4 border-l-appGreen pl-250"
          : "text-appGrey-300 hover:text-appGrey-100"
      )}
    >
      <Icon className={cn("w-[18px] h-[19px]", isActive && "text-appGreen")} />
      {title}
    </Link>
  );
}

function IconVariant(props: Readonly<VariantProps>) {
  const { icon: Icon, href, isActive } = props;
  return (
    <Tooltip>
      <TooltipTrigger asChild className="w-full">
        <Link
          href={href}
          className={cn(
            "w-full flex items-center justify-center pl-100 mr-100 h-14 gap-4 rounded-r-150 text-base font-bold text-appGrey-300 hover:text-appGrey-100",
            isActive
              ? "bg-appBeige-100 text-appGrey border-l-4 border-l-appGreen"
              : "text-appGrey-300"
          )}
        >
          <Icon
            className={cn("w-[18px] h-[19px]", isActive && "text-appGreen")}
          />
        </Link>
      </TooltipTrigger>
      <TooltipContent className="bg-appGrey-300 text-appGrey" side="right">
        {props.description ?? props.title}
      </TooltipContent>
    </Tooltip>
  );
}
