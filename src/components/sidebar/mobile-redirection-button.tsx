import React from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface IRedirectButtonProps {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  href: string;
  description?: string;
}

export function MobileRedirectionButton(props: Readonly<IRedirectButtonProps>) {
  const { title, href, icon: Icon, description } = props;

  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link className="h-full" href={href} aria-label={description}>
      <motion.button
        type="button"
        className={cn(
          "w-auto h-full flex flex-col items-center justify-center gap-2 rounded-t-100 px-4",
          isActive
            ? "bg-appBeige-100 border-b-4 border-appGreen text-appGrey"
            : "bg-appGrey text-appGrey-300 hover:text-appBeige-100"
        )}
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
          },
        }}
      >
        <div className={cn("flex items-center justify-evenly")}>
          <Icon className="w-[18px] h-[18px]" />
        </div>

        <span className="text-xs font-bold hidden md:block">{title}</span>
      </motion.button>
    </Link>
  );
}
