"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { motion } from "framer-motion";

interface IRedirectButtonProps {
  variant?: "icon" | "long";
  icon: string;
  title: string;
  href: string;
  description?: string;
}

export function RedirectButton(props: Readonly<IRedirectButtonProps>) {
  const { variant = "long", href } = props;

  const pathname = usePathname();
  const isActive = pathname === href;

  const component =
    variant === "long" ? (
      <LongVariant isActive={isActive} {...props} />
    ) : (
      <IconVariant isActive={isActive} {...props} />
    );

  return (
    <motion.div
      className="w-full"
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
        },
      }}
    >
      <Tooltip>
        <TooltipTrigger className="w-full">{component}</TooltipTrigger>
        <TooltipContent className="bg-appGrey-300 text-appGrey" side="right">
          {props.description ?? props.title}
        </TooltipContent>
      </Tooltip>
    </motion.div>
  );
}

interface VariantProps extends IRedirectButtonProps {
  isActive: boolean;
}

function LongVariant(props: Readonly<VariantProps>) {
  const { icon, title, href, isActive } = props;
  return (
    <Link
      href={href}
      className={cn(
        "w-full flex items-center h-14 pl-400 gap-4 rounded-r-150 text-base font-bold group",
        isActive
          ? "bg-appBeige-100 text-appGrey border-l-4 border-l-appGreen"
          : "text-appGrey-300 hover:text-appGrey-100"
      )}
    >
      <Image
        width={18}
        height={19}
        src={`/images/${icon}.svg`}
        className={cn(
          isActive
            ? "text-appGreen"
            : "text-appGrey-300 group-hover:text-appGrey-100"
        )}
        alt={icon}
        priority
      />

      {title}
    </Link>
  );
}

function IconVariant(props: Readonly<VariantProps>) {
  const { icon, href, isActive } = props;
  return (
    <Link
      href={href}
      className={cn(
        "w-full flex items-center justify-center h-14 gap-4 rounded-150 text-base font-bold text-appGrey-300 hover:text-appGrey-100"
      )}
    >
      <Image
        width={18}
        height={19}
        priority
        src={`/images/${icon}.svg`}
        className={cn(
          isActive
            ? "text-appGreen"
            : "text-appGrey-300 group-hover:text-appGrey-100"
        )}
        alt={icon}
      />
    </Link>
  );
}
