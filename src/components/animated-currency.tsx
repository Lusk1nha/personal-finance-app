"use client";

import { CurrencyHelper } from "@/shared/helpers/currency-helper";
import { animate } from "framer-motion";
import { useEffect, useRef } from "react";

interface IAnimatedCurrencyProps {
  children: number;
}

export function AnimatedCurrency(props: Readonly<IAnimatedCurrencyProps>) {
  const { children } = props;

  const prev = 0;
  const curr = children;

  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(prev, curr, {
      duration: 2,
      ease: "easeOut",
      onUpdate(value) {
        if (!node) return;

        const helper = new CurrencyHelper();
        const currency = helper.formatCurrency(value);

        node.textContent = currency;
      },
    });

    return () => {
      controls.stop();
    };
  }, [prev, curr]);

  return <span ref={nodeRef} />;
}
