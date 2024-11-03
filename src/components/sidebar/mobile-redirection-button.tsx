import React from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface IRedirectButtonProps {
  icon: string;
  title: string;
  href: string;
  description?: string;
}

export function MobileRedirectionButton(props: Readonly<IRedirectButtonProps>) {
  const { title, href, icon, description } = props;

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
        <div className="flex items-center justify-center">
          <Image
            width={18}
            height={18}
            src={`/images/${icon}.svg`}
            className={cn(
              isActive
                ? "text-appGreen"
                : "text-appGrey-300 group-hover:text-appGrey-100"
            )}
            alt={icon}
            priority
          />
        </div>

        <span className="text-xs hidden md:block">{title}</span>
      </motion.button>
    </Link>
  );
}
