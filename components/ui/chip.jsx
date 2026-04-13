import * as React from "react"
import { cn } from "@/lib/utils"

const chipVariants = {
  primary: "before:bg-primary",
  secondary: "before:bg-secondary",
  tertiary: "before:bg-tertiary",
}

function Chip({
  className,
  variant = "primary",
  children,
  ...props
}) {
  return (
    <span
      data-slot="chip"
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider text-on-surface bg-surface-container-highest transition-all duration-200 hover:scale-105 hover:bg-surface-bright",
        chipVariants[variant],
        className
      )}
      {...props}
    >
      <span className={cn("w-1 h-1 rounded-full", variant === "primary" ? "bg-primary" : variant === "secondary" ? "bg-secondary" : "bg-tertiary")} />
      {children}
    </span>
  );
}

export { Chip };