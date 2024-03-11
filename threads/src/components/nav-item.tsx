import { cva, VariantProps } from "class-variance-authority";
import React, { HTMLAttributes } from "react";

const navItemVariants = cva(
  "flex items-center justify-start gap-3 px-3 py-2 rounded-md text-sm",
  {
    variants: {
      isActive: {
        true: "bg-secondary text-secondary-foreground",
      },
    },
    defaultVariants: {
      isActive: false,
    },
  }
);

interface NavItemProps
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof navItemVariants> {}

export default function NavItem({
  children,
  className,
  isActive,
  ...props
}: NavItemProps) {
  return (
    <button {...props} className={navItemVariants({ className, isActive })}>
      {children}
    </button>
  );
}
