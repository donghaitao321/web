import React, { useRef } from "react";
import { Button } from "@mui/material";

interface Ref {
  queue: number[];
}

interface Props {
  toggle: () => void;
  children: React.ReactNode;
}

export default function DevModeToggler({ toggle, children }: Props) {
  const ref = useRef<Ref>({ queue: [] });

  const handleLogoClick = () => {
    const { queue } = ref.current;
    const t = performance.now();
    queue.push(t);
    if (queue[0] < t - 5000) queue.shift();
    if (queue.length >= 5) {
      ref.current.queue = [];
      toggle();
    }
  };

  return (
    <Button color="inherit" onClick={handleLogoClick}>
      {children}
    </Button>
  );
}
